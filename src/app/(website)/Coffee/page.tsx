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
const Images = [
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
    img: "/brandpic/gallert/ga5.jpg",
  },
];

export default function Blog() {
  return (
    <div className="bg-slate-100 overflow-hidden w-full min-h-screen">
      {/* Title */}
      <div className="flex flex-col items-center justify-center bg-[#f0c19f] pt-40 min-h-screen">
        <div className="mt-[40px] px-5 xl:pr-20 xsl:pr-[10%] xl:ml-4 hd:ml-20">
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center xl:text-left text-amber-900 font-medium tracking-wider"
          >
            CÀ PHÊ MANG ĐI
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl xl:text-6xl text-center xl:text-left font-medium my-5 xl:mr-32"
          >
            Cà phê tươi ngon chắc chắn sẽ làm bạn phấn chấn mỗi ngày
          </motion.h1>
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm lgl:text-lg text-amber-900 text-center xl:text-left mb-9"
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
          <Button className="rounded-full text-slate-600 bg-white px-10 hover:bg-slate-600 hover:text-white/90 font-medium">
            <Link href="/About">Biết thêm chi tiết</Link>
          </Button>
        </motion.div>
      </div>

      {/* Coffee */}
      <div className="bg-white p-10">
        <div className="text-amber-700 md:flex items-center justify-center gap-8">
          {Coffee.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center relative my-6 lgl:hover:scale-[103%]"
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
      <div className="flex flex-col items-center">
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
      <div className="bg-white py-10">
        <div className="mt-[40px] px-3">
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
            Khám phá cà phê của YOURS
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
        <div className="columns-1 air:columns-3 my-6 space-y-2 air:space-y-4 xl:space-y-5 xxl:space-y-6 xxxl:space-y-7 hd:space-y-8 px-3 air:px-20 xl:px-28 hd:px-52">
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
                width={1000}
                height={1000}
                className="w-full aspect-auto object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
