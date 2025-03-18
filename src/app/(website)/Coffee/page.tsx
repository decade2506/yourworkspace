"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
const Coffee = [
  {
    img: "/brandpic/coffe/quality.jpg",
    badge: "Những Hạt cà phê chất lượng cao",
  },
  {
    img: "/brandpic/coffe/fresh.jpg",
    badge: "Cà Phê Pha Mới 100%",
  },
  {
    img: "/brandpic/coffe/aroma.jpg",
    badge: "Hương thơm tuyệt vời",
  },
  {
    img: "/brandpic/coffe/mood.jpg",
    badge: "Tăng cường tâm trạng của bạn mỗi ngày",
  },
];
const Service = [
  {
    serviceimg: "/brandpic/coffe/beans.png",
    title: "Exotic Coffee",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/coffe/variety.png",
    title: "Muliple variety",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/coffe/service.png",
    title: "Fast Service",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/coffe/abient.png",
    title: "Pleasent Abient",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
const Images = [
  {
    img: "/brandpic/office/office3_3.jpg",
  },
  {
    img: "/brandpic/office/office3_2.jpg",
  },
  {
    img: "/brandpic/office/office3_1.jpg",
  },
  {
    img: "/brandpic/office/office5.png",
  },
  {
    img: "/brandpic/office/office4.png",
  },
  {
    img: "/brandpic/office/office5.png",
  },
  {
    img: "/brandpic/office/office6.png",
  },
];

export default function Blog() {
  return (
    <div className="overflow-hidden w-full min-h-screen">
      {/* Title */}
      <div className="flex flex-col items-center justify-center bg-yellow-100 pt-40 min-h-screen">
        <div className="mt-[40px] px-5 xl:pr-20 xsl:pr-[10%] xl:ml-20">
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center xl:text-left text-amber-600 font-medium tracking-wider"
          >
            CÀ PHÊ MANG ĐI
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl xl:text-6xl text-center xl:text-left text-amber-900 font-medium my-5 xl:mr-32"
          >
            Cà phê tươi ngon chắc chắn sẽ làm bạn phấn chấn mỗi ngày
          </motion.h1>
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-amber-700 text-center xl:text-left mb-9"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quos
            repudiandae unde ut velit sapiente labore expedita soluta.
          </motion.p>
        </div>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center xl:mr-[79%] gap-4 my-3"
        >
          <Button className="rounded-full text-green-500 border-2 border-green-500 bg-white px-10 hover:bg-green-500 hover:text-white">
            <Link href="/About">Biết Thêm chi tiết</Link>
          </Button>
        </motion.div>
      </div>

      {/* Coffee */}
      <div className="bg-white p-10">
        <div className="text-amber-700 md:flex items-center justify-center gap-4">
          {Coffee.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center relative my-6"
            >
              <Image
                src={item.img}
                alt=""
                height={600}
                width={520}
                className="rounded-2xl aspect-[3/5] object-cover object-center"
              ></Image>
              <Badge className="bg-[#313131] text-white border-2 border-solid border-white px-8 py-3 text-sm absolute bottom-2 text-center">
                {item.badge}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coffee Sercvices */}
      <div className="bg-yellow-100 flex flex-col items-center">
        <div className="mt-[40px] px-2 ">
          <motion.p
            variants={upwardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center  text-amber-600 font-medium tracking-wider"
          >
            TRẢI NGHIỆM CÀ PHÊ TUYỆT VỜI
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl md:mx-36 text-center text-amber-900 font-medium my-3"
          >
            Nhân tiện, sao không thưởng thức một tách cà phê?
          </motion.h1>
        </div>
        <div className="flex flex-wrap md:px-36 xl:px-0 xl:flex-nowrap xl:w-5/6 gap-3 items-center justify-center my-6">
          {Service.map((item, index) => (
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
                alt=""
                height={75}
                width={75}
                className="my-3"
              />
              <h1 className="text-xl my-3 text-center">{item.title}</h1>
              <p className="text-sm text-center mb-5">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* gallery */}
      <div className="bg-white">
        <div className="mt-[40px] px-3 ">
          <motion.p
            variants={upwardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center mt-10 pt-6 text-amber-600 font-medium tracking-wider"
          >
            CÀ PHÊ TƯƠI CHO NGÀY THÊM HỨNG KHỞI
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-center text-amber-900 font-medium my-3"
          >
            Khám Phá Cà Phê Của YOURS
          </motion.h1>
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </motion.p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 px-3 my-6 space-y-4">
          {Images.map((item, index) => (
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
                width={326}
                height={index % 2 === 0 ? 500 : 350} // Random heights for organic look
                className="w-full object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
