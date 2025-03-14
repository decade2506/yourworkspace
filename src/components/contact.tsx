"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FormData } from "@/@types/mail-form";
import mailFormSchema from "@/utils/main-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { ContactAction } from "@/app/action";
import { getCaptchaToken } from "@/utils/captcha";
import Script from "next/script";

const contact = [
  {
    image: "/brandpic/svimg/chat.png",
    title: "Chat To Sales",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: "yours@workspace.vn",
  },
  {
    image: "/brandpic/svimg/mail.png",
    title: "Chat To Support",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: "yours@workspace.vn",
  },
  {
    image: "/brandpic/svimg/map.png",
    title: "Visit Us",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: "yours@workspace.vn",
  },
  {
    image: "/brandpic/svimg/phone.png",
    title: "Call Us",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: "(+84) 94 777 71 02",
  },
];
const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
const upwardVariants = {
  hidden: { opacity: 0, y: 450 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const upwardVariants_2 = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const Question_1 = [
  {
    question: "Can I Book A Space For A Day Or A Few Hours?",
    answer:
      "Yes, we offer hourly and daily bookings for meeting rooms, coworking spaces, and private offices.",
    value: "item-1",
  },
  {
    question: "Can I Book A Space For A Day Or A Few Hours?",
    answer:
      "Yes, we offer hourly and daily bookings for meeting rooms, coworking spaces, and private offices.",
    value: "item-2",
  },
  {
    question: "Can I Book A Space For A Day Or A Few Hours?",
    answer:
      "Yes, we offer hourly and daily bookings for meeting rooms, coworking spaces, and private offices.",
    value: "item-3",
  },
  {
    question: "Can I Book A Space For A Day Or A Few Hours?",
    answer:
      "Yes, we offer hourly and daily bookings for meeting rooms, coworking spaces, and private offices.",
    value: "item-4",
  },
];

type ContactFormProps = {
  sendMail: (
    data: FormData
  ) => Promise<{ success: boolean; error: string | null }>;
};

export default function ContactForm({ sendMail }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(mailFormSchema),
  });

  // Add state for client-side rendering of reCAPTCHA
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Add state for submission status
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus(null);
      
      // First get the captcha token before sending the email
      const token = await getCaptchaToken();
      
      // Verify captcha first
      if (!token) {
        setSubmitStatus({
          success: false,
          message: "CAPTCHA verification failed. Please try again.",
        });
        return;
      }
      
      // Verify captcha on server
      const captchaResult = await ContactAction(token, data);
      
      if (!captchaResult.success) {
        setSubmitStatus({
          success: false,
          message: captchaResult.message || "CAPTCHA verification failed. Please try again.",
        });
        return;
      }
      
      // Only send email if captcha is successful
      const result = await sendMail(data);

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });
        reset();
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      });
      console.error("Form submission error:", error);
    }
  };

  return (
    <div>
      <Script
        src={`https://www.google.com/recaptcha/api.js`}
        strategy="afterInteractive"
      />
      
      {/* Title */}
      <motion.div
        variants={childVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative flex flex-col items-center justify-center text-center bg-green-800 p-8 h-[300px] md:h-[600px] xl:h-[900px] xs:pt-52 sm:pt-32 md:pt-0"
      >
        <motion.p
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[1.02rem] text-green-200 font-medium tracking-wider"
        >
          Contact Us
        </motion.p>
        <motion.h1
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-white mt-2 mb-32 font-medium"
        >
          We're Here to Help!
        </motion.h1>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute top-[85%] md:top-[60%] lg:top-[70%] xl:top-[60%] flex justify-center md:px-5 lg:px-0 left-0 right-0 mx-auto"
        >
          <Image
            src="/brandpic/office/exmpl3.jpg"
            alt="H"
            width={1800}
            height={500}
            className="w-full h-auto sm:aspect-[5/2] xs:max-h-[165px] md:max-h-[340px] xl:max-h-[500px] aspect-auto mx-8 rounded-2xl object-cover object-center"
            priority
            quality={100}
          />
        </motion.div>
      </motion.div>

      {/* Contact Us */}
      <motion.div className="px-20 pt-44 pb-16 bg-slate-100 flex flex-col items-center">
        <motion.h1
          variants={upwardVariants_2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[1.02rem] text-green-600 my-5 font-medium tracking-wide"
        >
          CONTACT US
        </motion.h1>
        <motion.h1
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-green-800 font-medium text-center"
        >
          You Can Also Contact Our Friendly Team Directly
        </motion.h1>
        <div className="pt-10">
          <div className="flex flex-col xl:flex-row items-center">
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              variants={upwardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6 p-3 bg-white rounded-2xl md:gap-6 x:max-w-[320px] sm:w-3/4 divuto my-7 px-2 sm:px-5 py-11 xl:mr-[-10%] shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                <div>
                  <p>
                    Full name <span className="text-red-500">*</span>
                  </p>
                  <Input
                    className="rounded-xl bg-slate-100 px-2"
                    type="text"
                    placeholder="Your name"
                    {...register("name")}
                  />
                  <div className="h-[10px]">
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <p>
                    Email <span className="text-red-500">*</span>
                  </p>
                  <Input
                    className="rounded-xl bg-slate-100 px-2"
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  <div className="h-[10px]">
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <p>
                    Phone <span className="text-red-500">*</span>
                  </p>
                  <Input
                    className="rounded-xl bg-slate-100 px-2"
                    type="phone"
                    placeholder="Phone number"
                    {...register("phone")}
                  />
                  <div className="h-[10px]">
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <p>
                    Company name <span className="text-red-500">*</span>
                  </p>
                  <Input
                    className="rounded-xl bg-slate-100 px-2"
                    type="company"
                    placeholder="Your comany name"
                    {...register("company")}
                  />
                  <div className="h-[10px]">
                    {errors.company && (
                      <p className="text-red-500 text-sm">
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <p>Message</p>
              <Textarea
                className="h-[120px] rounded-2xl bg-slate-100 px-2"
                placeholder="send your message"
                {...register("message")}
              />

              {/* Only render reCAPTCHA on client side */}
              {isClient && (
                <div 
                  id="recaptcha-container"
                  className="g-recaptcha mb-4" 
                  data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                />
              )}

              {submitStatus && (
                <div
                  className={`p-3 rounded-lg ${
                    submitStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <Button
                size="lg"
                className="max-w-50 rounded-full bg-green-800 text-white hover:bg-green-900"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Processing..." : "Submit"}
              </Button>
            </motion.form>
            <div className="flex flex-wrap gap-8 justify-center xl:mr-[-12%]">
              {contact.map((item, index) => (
                <motion.div
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  key={index}
                  className="w-[326px] h-[254px] sm:w-3/4 md:w-1/3 rounded-2xl bg-white flex flex-col items-center justify-center my-3"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={75}
                    height={75}
                    className="w-[75px] h-[75px] object-contain"
                    priority={index === 0}
                  />
                  <h1 className="text-xl my-3 text-center">{item.title}</h1>
                  <p className="text-sm text-center mb-3 mx-7">{item.des}</p>
                  <p className="text-sm text-green-600 text-center mb-2 mx-10">
                    {item.info}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Common Question */}
      <motion.div className="bg-white p-10 flex flex-col items-center">
        <motion.h1
          variants={upwardVariants_2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[1.02rem] text-green-600 my-5 font-medium tracking-wide"
        >
          COMMON QUESTIONS
        </motion.h1>
        <motion.h1
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-green-800 md:mx-52 xl:mx-64 xsl:mx-72 font-medium text-center"
        >
          Everything You Need To Know About Worknow
        </motion.h1>
        <motion.p
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm text-green-900 text-center mt-3 md:mx-52 xl:mx-64 xsl:mx-72"
        >
          We want to make sure that every question you have about our spaces,
          memberships, and services is answered clearly.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 my-10 mx-[-11] gap-5">
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-100 p-5 text-left rounded-xl mx-auto"
          >
            {Question_1.map((item, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
              >
                <AccordionItem value={item.value}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </motion.div>
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-100 p-5 text-left rounded-xl mx-auto"
          >
            {Question_1.map((item, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
              >
                <AccordionItem value={item.value}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
