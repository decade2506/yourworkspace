export async function getCaptchaToken() {
  return new Promise<string | null>((resolve) => {
    // Check if grecaptcha is available
    if (typeof grecaptcha === 'undefined') {
      console.error('reCAPTCHA not loaded');
      resolve(null);
      return;
    }

    try {
      // Get the token from the checkbox response
      const token = grecaptcha.getResponse();
      if (!token) {
        console.error('Please complete the captcha');
        resolve(null);
        return;
      }
      resolve(token);
    } catch (error) {
      console.error('Error with reCAPTCHA:', error);
      resolve(null);
    }
  });
}

export async function VerifyCaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    throw new Error("No secret key found");
  }
  const url = new URL("https://www.google.com/recaptcha/api/siteverify");

  url.searchParams.append("secret", secretKey);
  url.searchParams.append("response", token);

  const res = await fetch(url);
  const captchaData: CaptchaData = await res.json();

  if (!res.ok) return null;

  return captchaData;
}

type CaptchaData =
  | {
      success: true;
      challenge_ts: string;
      hostname: string;
      score: number;
      action: string;
    }
  | {
      success: false;
      "error-codes": ErrorCode[];
    };

type ErrorCode =
  | "missing-input-secret"
  | "invalid-input-secret"
  | "missing-input-response"
  | "invalid-input-response"
  | "bad-request"
  | "timeout-or-duplicate";
