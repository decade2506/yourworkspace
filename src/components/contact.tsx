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
import Link from "next/link";

const contact = [
  {
    image: "/brandpic/svimg/chat.png",
    title: "Liên hệ tư vấn không gian làm việc",
    des: "Hãy trò chuyện với đội ngũ thân thiện của chúng tôi.",
    info: "hatran121289@gmail.com",
    link: "#"
  },
  {
    image: "/brandpic/svimg/mail.png",
    title: "Trò chuyện để hỗ trợ",
    des: "Hãy trò chuyện với đội ngũ thân thiện của chúng tôi.",
    info: "hatran121289@gmail.com",
    link: "#"
  },
  {
    image: "/brandpic/svimg/map.png",
    title: "Ghé thăm chúng tôi",
    des: "Ghé thăm Văn phòng của chúng tôi",
    info: "yours@workspace.vn",
    link: "#"
  },
  {
    image: "/brandpic/svimg/phone.png",
    title: "Gọi cho chúng tôi",
    des: "Ghé thăm Văn phòng của chúng tôi",
    info: "(+84) 94 777 71 02",
    link: "#"
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
          message: "Xác minh không thành công. Vui lòng thử lại.",
        });
        return;
      }

      // Verify captcha on server
      const captchaResult = await ContactAction(token, data);

      if (!captchaResult.success) {
        setSubmitStatus({
          success: false,
          message:
            captchaResult.message ||
            "Xác minh không thành công. Vui lòng thử lại.",
        });
        return;
      }

      // Only send email if captcha is successful
      const result = await sendMail(data);

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Cảm ơn bạn! Lời nhắn của bạn đã được gửi thành công.",
        });
        reset();
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || "Không gửi được lời nhắn. Vui lòng thử lại.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Đã xảy ra lỗi không mong muốn. Vui lòng thử lại sau.",
      });
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="bg-slate-100 overflow-hidden w-full min-h-screen">
      <Script
        src={`https://www.google.com/recaptcha/api.js`}
        strategy="afterInteractive"
      />

      {/* Title */}
      <div className="relative flex flex-col items-center justify-center text-center bg-green-800 p-8 min-h-[500px] xssm:h-[650px] md:h-[660px] air:h-[799px] lgl:h-[980px] xl:max-h-[600px] hd:max-h-[700px] xxs:pt-52 sm:pt-32 md:pt-0">
        <motion.p
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[1.02rem] text-green-200 font-medium tracking-wider"
        >
          LIÊN HỆ VỚI CHÚNG TÔI
        </motion.p>
        <motion.h1
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lgl:text-6xl text-white mt-2 mb-32 font-medium"
        >
          Chúng tôi ở đây để giúp đỡ
        </motion.h1>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute top-[85%] md:top-[60%] air:top-[70%] lg:top-[70%] lgl:top-[78%] xl:top-[60%] flex justify-center md:px-5 xl:px-8 lg:px-0 left-0 right-0 mx-auto"
        >
          <Image
            src="/brandpic/office/exmpl3.jpg"
            alt="H"
            width={1800}
            height={500}
            className="w-full h-auto sm:aspect-[5/3] xxs:max-h-[165px] xs:max-h-[195px] xsm:max-h-[250px] md:max-h-[340px] lgl:max-h-[400px] xl:max-h-[300px] xxxl:max-h-[450px] hd:max-h-[500px] aspect-auto mx-8 rounded-2xl object-cover object-center"
            priority
            quality={100}
          />
        </motion.div>
      </div>

      {/* Contact Us */}
      <motion.div className="px-20 pt-44 xxs:mt-26 xl:mt-20 xxl:mt-40 pb-16 bg-slate-100 flex flex-col items-center">
        <motion.h1
          variants={upwardVariants_2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[1.02rem] text-green-600 my-5 font-medium tracking-wide text-center"
        >
          LIÊN HỆ VỚI CHÚNG TÔI
        </motion.h1>
        <motion.h1
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-green-800 font-medium text-center mx-0 xsl:mx-40"
        >
          Bạn cũng có thể liên hệ trực tiếp với đội ngũ thân thiện của chúng tôi
        </motion.h1>
        <div className="pt-10">
          <div className="flex flex-col xl:flex-row gap-8 items-center">
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              variants={upwardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6 p-3 bg-white rounded-2xl md:gap-6 xxs:w-[300px] sm:w-3/4 divuto my-7 px-2 sm:px-5 py-11 xl:mr-[-10%] shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                <div>
                  <p>
                    Họ và tên <span className="text-red-500">*</span>
                  </p>
                  <Input
                    className="rounded-xl bg-slate-100 px-2"
                    type="text"
                    placeholder="Tên của bạn"
                    {...register("name")}
                  />
                  <div className="h-[10px]">
                    {errors.name && (
                      <p className="text-red-500 text-sm">
                        {errors.name.message}
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
                    placeholder="Email của bạn"
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
                    Số điện thoại <span className="text-red-500">*</span>
                  </p>
                  <Input
                    className="rounded-xl bg-slate-100 px-2"
                    type="phone"
                    placeholder="Số điện thoại của bạn"
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
                    Tên doanh nghiệp <span className="text-red-500">*</span>
                  </p>
                  <Input
                    className="rounded-xl bg-slate-100 px-2"
                    type="company"
                    placeholder="Tên doanh nghiệp của bạn"
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
              <p>Lời nhắn</p>
              <Textarea
                className="h-[120px] rounded-2xl bg-slate-100 px-2"
                placeholder="Gửi lời nhắn của bạn"
                {...register("message")}
              />

              {/* Only render reCAPTCHA on client side */}
              {isMounted ? (
                <div
                  id="recaptcha-container"
                  className="g-recaptcha mb-4 xxs:ml-[-3%] sm:ml-0"
                  data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                />
              ) : (
                <div className="mb-4 h-[78px]"></div> // Placeholder with same height
              )}

              {submitStatus && (
                <div
                  className={`p-3 rounded-lg ${
                    submitStatus.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <Button
                size="lg"
                className="rounded-full bg-green-800 text-white hover:bg-green-900"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Đang xử lý..." : "Đặt ngay"}
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
                  className="xxs:w-[300px] xs:w-[326px] h-[254px] sm:w-3/4 md:w-1/3 rounded-2xl border-2 bg-white flex flex-col items-center justify-center my-3 lgl:px-8"
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
                  <Link href={item.link} className="text-sm text-green-600 text-center mb-2 mx-10 hover:mr-3">
                    {item.info}
                  </Link>
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
          CÂU HỎI THƯỜNG GẶP
        </motion.h1>
        <motion.h1
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-green-800 md:mx-52 xl:mx-64 xsl:mx-72 font-medium text-center"
        >
          Mọi thứ bạn cần biết về YOURS Workspace
        </motion.h1>
        <motion.p
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm md:text-lg text-green-900 text-center mt-3 md:mx-52 xl:mx-64 xsl:mx-72"
        >
          Chúng tôi muốn đảm bảo rằng mọi câu hỏi của bạn về không gian, tư cách
          thành viên và dịch vụ của chúng tôi đều được giải đáp rõ ràng.
        </motion.p>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-10 p-5 text-left flex flex-col justify-center items-center mt-10"
        >
          {Question_1.map((item, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="xxs:w-[300px] xsm:w-11/12 sm:w-[500px] md:w-[600] lg:w-[900px] transition-all duration-300 ease-in-out"
            >
              <AccordionItem value={item.value}>
                <AccordionTrigger className="text-wrap">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-wrap max-w-[900px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
