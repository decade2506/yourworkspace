"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
const upwardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Workspace = [
  {
    serviceimg: "/brandpic/svimg/modern.png",
    title: "Thiết kế hiện đại",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/svimg/cozy.png",
    title: "Không gian ấm cúng",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/svimg/flexible.png",
    title: "Đặt phòng linh hoạt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/svimg/beanbag.png",
    title: "Văn phòng làm việc",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
const Coffee = [
  {
    serviceimg: "/brandpic/coffe/beans.png",
    title: "Cà phê hảo hạng",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/coffe/variety.png",
    title: "Đa dạng lựa chọn",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/coffe/service.png",
    title: "Phục vụ nhanh",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/coffe/abient.png",
    title: "Không khí dễ chịu",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
const Space = [
  {
    img: "/brandpic/gallert/ga1.jpg",
  },
  {
    img: "/brandpic/gallert/ga2.png",
  },
  {
    img: "/brandpic/gallert/ga3.png",
  },
  {
    img: "/brandpic/gallert/ga4.png",
  },
  {
    img: "/brandpic/coffe/cf5.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-white overflow-hidden w-full min-h-screen">
      {/* Title */}
      <div className="flex flex-col items-center justify-center bg-green-800 pt-40 min-h-screen xxs:pt-20 xsm:pt-32 sm:pt-52 md:pt-24 lg:pt-40 xl:pt-24 xl:pb-3 xsl:pt-28">
        <motion.div>
          <div className=" px-5 sm:px-11 xl:pr-20 xsl:pr-[20%] hd:ml-12">
            <motion.p
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm text-center lgl:text-left  text-green-300 font-medium tracking-wider xxs:mx-[-10] lgl:mx-0"
            >
              CÀ PHÊ & KHÔNG GIAN LÀM VIỆC
            </motion.p>
            <motion.h1
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lgl:text-6xl text-center lgl:text-left text-white font-medium my-5 xl:mr-20"
            >
              Không gian làm việc thoải mái và trải nghiệm cà phê tuyệt vời
            </motion.h1>
            <motion.p
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm md:text-lg text-center lgl:text-left xl:mr-20 text-white/70"
            >
              Nâng tầm trải nghiệm làm việc của bạn với không gian linh hoạt,
              hiện đại, được thiết kế để truyền cảm hứng cho sự hợp tác, năng
              suất và kết nối. Văn phòng cao cấp, cà phê hảo hạng, tiềm năng vô
              hạn.
            </motion.p>
          </div>
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center lgl:mr-[74%] xl:mr-[80%] gap-4 my-10"
          >
            <Link href="/About">
              <Button className="rounded-full text-slate-600 bg-white px-10 hover:bg-slate-600 hover:text-white/90 font-medium">
                Xem thêm
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Services */}
      <div className="bg-white md:flex flex-rows items-center justify-center flex-wrap gap-5 pt-3 pb-10 hd:pb-28 hd:gap-9">
        <div className="flex flex-col items-center text-center md:text-left">
          <motion.ul
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg xl:text-xl flex flex-col gap-3 lg:mb-10 my-10 md:ml-1 text-green-600 font-medium leading-[2.8] xl:leading-[3]"
          >
            <li>Không gian làm việc</li>
            <li>Phòng họp</li>
            <li>Không gian sự kiện</li>
            <li>Văn phòng làm việc riêng</li>
          </motion.ul>
        </div>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center relative"
        >
          <div className="flex justify-center my-6 lg:mt-6 lg:mb-0 lg:ml-16 mx-6">
            <Image
              src="/brandpic/office/vp2.png"
              alt=""
              width={960}
              height={455}
              className="rounded-2xl sm:aspect-[2/5] xs:max-h-[350px] md:max-w-[460px] xl:max-h-[455px] sml:aspect-[2/5] air:max-w-[500px] lg:max-w-[595px] xl:max-w-[350px] object-cover object-center"
              quality={100}
            />
          </div>
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute bottom-9 sm:mr-[50%]  md:bottom-[70%] lgl:bottom-[66%] xl:bottom-[73%] lg:mr-[20%] xsm:mr-[28%] md:mr-[10%] xl:mr-[-25%] xxs:w-[250px] xs:w-[290px] md:w-[400px] w-[800px] flex flex-wrap gap-3 text-green-700 text-center"
          >
            <Badge className="w-[120px] p-2 bg-white">Wifi Miễn Phí</Badge>
            <Badge className="w-[130px] p-2 bg-white">Đậu Xe Miễn Phí</Badge>
            <Badge className="w-[150px] p-2 bg-white">Cà phê tiện lợi</Badge>
            <Badge className="w-[170px] p-2 bg-white">
              Linh Hoạt Về Thời Gian
            </Badge>
          </motion.div>
        </motion.div>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex flex-col items-center"
        >
          <div className="flex justify-center mb-6 mt-0">
            <Image
              src="/brandpic/gallert/ga4.png"
              alt=""
              width={960}
              height={550}
              className="rounded-2xl sm:aspect-[2/5] xs:max-h-[350px] xl:max-h-[555px] mx-5 xl:max-w-[360px] object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-3 text-green-700 absolute bottom-8 lg:ml-[-64%] md:ml-[-56%] xl:ml-[-12%]">
            <div className="h-[100px] xxs:w-[250px] xs:w-[290px] rounded-2xl bg-white flex items-center justify-center font-semibold   text-3xl">
              <CountUp
                end={552}
                duration={3}
                startOnMount={false}
                enableScrollSpy={true}
                scrollSpyDelay={2}
                scrollSpyOnce={true}
              />
              <span className="text-yellow-500">+</span>
              <p className="text-lg text-green-600 p-4 font-medium">
                Khách hàng vui vẻ
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Comfortable */}
      <div className="flex flex-col items-center">
        <div className="mt-[40px] px-3 xl:px-36 ">
          <motion.p
            variants={upwardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center  text-green-700 font-medium tracking-wider"
          >
            KHÔNG GIAN LÀM VIỆC THOẢI MÁI
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-center text-black font-medium my-3 xxl:px-28 xxxl:px-40 hd:px-64"
          >
            Chúng tôi mang đến không gian làm việc hiện đại và linh hoạt, phù
            hợp mọi nhu cầu.
          </motion.h1>
        </div>
        <div className="pb-7 flex flex-wrap md:px-36 xl:px-0 xl:flex-nowrap xl:w-5/6 gap-3 items-center justify-center">
          {Workspace.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="xxs:w-[300px] xs:w-[326px] h-[241px] sm:w-3/4 lg:w-[326px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3 bg-white p-5"
            >
              <Image
                src={item.serviceimg}
                alt={item.title}
                height={75}
                width={75}
                className="my-3"
              />
              <motion.h1
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl my-3 text-center font-medium"
              >
                {item.title}
              </motion.h1>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-white py-10">
        <div className="mt-[40px] px-11 ">
          <motion.p
            variants={upwardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center mt-10 pt-6 text-green-700 font-medium tracking-wider"
          >
            KHÔNG GIAN CỦA YOURS
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-center text-black font-medium my-3 xl:mx-40 xxl:px-28 xxxl:px-40 hd:px-64"
          >
            Khám phá không gian đầy cảm hứng của chúng tôi
          </motion.h1>
        </div>
        <div className="columns-1 air:columns-3 my-6 space-y-2 air:space-y-4 xl:space-y-5 xxl:space-y-6 xxxl:space-y-7 hd:space-y-8 px-3 air:px-20 xl:px-28 hd:px-52">
          {Space.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="break-inside-avoid rounded-2xl overflow-hidden"
            >
              <Image
                src={item.img}
                alt={`Coffee Image ${index + 1}`}
                width={1000}
                height={1000}
                className="w-full aspect-auto object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coffee */}
      <div className="flex flex-col items-center mt-9">
        <div className="mt-[40px] px-2 xl:px-36">
          <motion.p
            variants={upwardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center text-amber-800 font-medium tracking-wider"
          >
            TRẢI NGHIỆM CÀ PHÊ TUYỆT VỜI
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-center text-black font-medium my-5 xxl:px-28 xxxl:px-40 hd:px-64"
          >
            Nhân tiện, sao không thưởng thức một tách cà phê?
          </motion.h1>
        </div>
        <div className="pb-7 flex flex-wrap md:px-36 xl:px-0 xl:flex-nowrap xl:w-5/6 gap-3 items-center justify-center">
          {Coffee.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="xxs:w-[300px] xs:w-[326px] h-[241px] lg:w-[326px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3 bg-white p-5"
            >
              <Image
                src={item.serviceimg}
                alt={item.title}
                height={75}
                width={75}
                className="my-3"
              />
              <motion.h1
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl my-3 text-center font-medium"
              >
                {item.title}
              </motion.h1>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
