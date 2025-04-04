"use server";
import { FormData } from "@/@types/mail-form";
import { VerifyCaptcha } from "@/utils/captcha";
import { headers } from "next/headers";

const submissionTracker = new Map<string, number[]>();

const WINDOW_SIZE_MS = 3600000;
const MAX_SUBMISSIONS = 5;

export async function ContactAction(token: string | null, formdata: FormData) {
  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";

  const now = Date.now();
  let submissions = submissionTracker.get(ip) || [];

  submissions = submissions.filter(
    (timestamp) => now - timestamp < WINDOW_SIZE_MS
  );

  if (submissions.length >= MAX_SUBMISSIONS) {
    return {
      success: false,
      message: "Too many submissions. Please try again later.",
    };
  }

  submissions.push(now);
  submissionTracker.set(ip, submissions);

  if (!token) {
    return {
      success: false,
      message: "Token not found",
    };
  }

  const captchaData = await VerifyCaptcha(token);
  if (!captchaData) {
    return {
      success: false,
      message: "Captcha verification failed",
    };
  }

  // Check if captcha was successful
  if (!captchaData.success) {
    return {
      success: false,
      message: "Captcha verification failed",
      errors: captchaData["error-codes"],
    };
  }

  // Only check score if captcha was successful (when success is true, we have score property)
  if (captchaData.score < 0.5) {
    return {
      success: false,
      message: "Suspicious activity detected. Please try again.",
    };
  }

  // Additional validation of the form data (especially the email)
  if (!isValidEmail(formdata.email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  // Additional phone validation
  if (!isValidPhone(formdata.phone)) {
    return {
      success: false,
      message: "Please enter a valid phone number.",
    };
  }

  return {
    success: true,
    message: null,
  };
}

// Simple email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Simple phone validation function
function isValidPhone(phone: string): boolean {
  // Allow digits, spaces, plus, dash, and parentheses
  // And require at least 7 digits total
  const phoneRegex = /^[+\d\s()-]{7,}$/;
  const digitCount = phone.replace(/\D/g, "").length;
  return phoneRegex.test(phone) && digitCount >= 7;
}
