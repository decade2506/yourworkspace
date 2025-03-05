"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef, useState, useEffect } from "react";
const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.5,
    },
  },
};
const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

// Arrays
const Workspace = [
  {
    serviceimg: "/brandpic/office/office3_3.jpg",
    title: "Modern Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/office/office3_3.jpg",
    title: "Cozy Space",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/office/office3_3.jpg",
    title: "Flexible Booking",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/office/office3_3.jpg",
    title: "Office Space",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
const Coffee = [
  {
    serviceimg: "/brandpic/office/office3_3.jpg",
    title: "Exotic Coffee",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/office/office3_3.jpg",
    title: "Muliple variety",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/office/office3_3.jpg",
    title: "Fast Service",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/office/office4.png",
    title: "Pleasent Abient",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
const Space = [
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

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
    >
      {/* Title */}
      <div className="flex flex-col items-center bg-green-50">
        <motion.div>
          <div className="mt-[40px] px-5 xl:pr-20 xsl:pr-[20%]">
            <motion.p
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              className="text-sm text-center xl:text-left  text-green-800 font-semibold"
            >
              COFFEE & WORKING SPACE
            </motion.p>
            <motion.h1
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              className="text-4xl text-center xl:text-left text-black font-semibold my-5 xl:mr-20"
            >
              Comfortable Working Space & Amazing Coffee Experience
            </motion.h1>
            <motion.p
              variants={childVariants}
              className="text-sm text-center xl:text-left xl:mr-20"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              quos repudiandae unde ut velit sapiente labore expedita soluta
              maiores deserunt exercitationem aliquam natus quis accusantium.
            </motion.p>
          </div>
          <motion.div
            variants={childVariants}
            viewport={{ once: true, amount: 0.4 }}
            className="flex justify-center xl:mr-[75%] gap-4 my-10"
          >
            <Button className="rounded-full text-green-500 border-2 border-green-500 bg-white px-10 hover:bg-green-500 hover:text-white">
              <Link href="/About">More Detail</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Services */}
      <div className="bg-white md:flex flex-rows items-center justify-center flex-wrap gap-5">
        <div className="flex flex-col items-center text-center md:text-left">
          <motion.ul
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-lg flex flex-col gap-3 lg:mb-10 my-10 md:ml-4 text-green-600 font-semibold"
          >
            <li>Working space</li>
            <li>Meeting Room</li>
            <li>Event Spaces</li>
            <li>Private Office Room</li>
          </motion.ul>
        </div>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col items-center relative"
        >
          <div className="flex justify-center my-6 lg:mt-6 lg:mb-0 lg:ml-16 mx-6">
            <Image
              src="/brandpic/office/office3_3.jpg"
              alt=""
              width={297}
              height={331}
              className="rounded-2xl sm:w-[400px] md:w-[500px] lg:w-[586px] xl:w-[325px] xl:h-[455px] xl:mt-[-30%] h-[370px] object-cover object-center"
            />
          </div>
          <div className="absolute bottom-9 sm:mr-16 md:mr-36 md:bottom-[70%] lg:mr-[30%] xl:mr-[-10%] xl:bottom-[96%] xs:w-[300px] w-[400px] flex flex-wrap gap-3 text-green-700 text-center">
            <Badge className="w-[80px] p-2 bg-white">Free Wifi</Badge>
            <Badge className="w-[110px] p-2 bg-white">Free Parking</Badge>
            {/* <Badge className="w-[110px] p-2 bg-white border-2 border-green-500">
              24/7 Access
            </Badge> */}
            <Badge className="w-[150px] p-2 bg-white">Free Coffee Break</Badge>
            <Badge className="w-[130px] p-2 bg-white">Flexible Hour</Badge>
          </div>
        </motion.div>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          className="relative flex flex-col items-center"
        >
          <div className="flex justify-center mb-6 mt-0">
            <Image
              src="/brandpic/office/office3_3.jpg"
              alt=""
              width={325}
              height={370}
              className="rounded-2xl sm:w-[400px] md:w-[690px] lg:w-[896px] xl:w-[350px] xl:h-[550px] xl:mt-[-20%] h-[370px] object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-3 text-green-700 absolute bottom-8 lg:ml-[-64%] md:ml-[-56%] xl:ml-[-12%]">
            <div className="h-[100px] w-[290px] rounded-2xl bg-white flex items-center justify-center font-semibold text-3xl">
              <CountUp
                end={53}
                duration={3}
                delay={2}
                startOnMount={false}
                enableScrollSpy={true}
                scrollSpyDelay={2}
                scrollSpyOnce={true}
              />
              <span className="text-yellow-500">+</span>
              <p className="text-sm text-green-600 p-4 font-medium">
                Happy Customer
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Comfortable */}
      <div className="bg-green-50 flex flex-col items-center">
        <div className="mt-[40px] px-3 ">
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-center  text-green-700 font-semibold"
          >
            COMFORTABLE WORKSPACES
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-3xl text-center text-black font-semibold my-3"
          >
            We Offer A Range Of Modern And Flexible Workspaces
          </motion.h1>
        </div>
        <div className="pb-7 flex flex-wrap gap-3 items-center justify-center">
          {Workspace.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-[326px] h-[241px] sm:w-3/4 lg:w-[326px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3 bg-white p-5"
            >
              <Image
                src={item.serviceimg}
                alt={item.title}
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

      {/* Gallery */}
      <div className="bg-white">
        <div className="mt-[40px] px-11 ">
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-center mt-10 pt-6 text-green-700 font-semibold"
          >
            COMFORTABLE SPACES
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-3xl text-center text-black font-semibold my-3"
          >
            Explore Our Spaces
          </motion.h1>
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-center"
          >
            Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
          </motion.p>
        </div>
        <div className="flex flex-col xl:flex-row xl:justify-center flex-wrap items-center gap-3 my-4">
          {Space.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
            >
              <Image
                src={item.img}
                alt=""
                width={326}
                height={500}
                className="rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coffee */}
      <div className="bg-yellow-50 flex flex-col items-center">
        <div className="mt-[40px] px-2 ">
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-center  text-amber-800 font-semibold"
          >
            Amazing Coffee Experience
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-3xl text-center text-black font-semibold my-3"
          >
            While You Are At It, Why Don't Enjoy A Cup Of Coffee
          </motion.h1>
        </div>
        <div className="pb-7 flex flex-wrap gap-3 items-center justify-center">
          {Coffee.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-[326px] h-[241px] sm:w-3/4 lg:w-[326px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3 bg-white p-5"
            >
              <Image
                src={item.serviceimg}
                alt={item.title}
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
    </motion.div>
  );
}
