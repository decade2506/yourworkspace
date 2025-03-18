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
    title: "Modern Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/svimg/cozy.png",
    title: "Cozy Space",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/svimg/flexible.png",
    title: "Flexible Booking",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    serviceimg: "/brandpic/svimg/beanbag.png",
    title: "Office Space",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
const Coffee = [
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
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col items-center bg-green-50 pt-40 xs:pt-32 xs:pb-16 xsm:pt-32 sm:pt-52 md:pt-24 lg:pt-40 xl:pt-24 xl:pb-3 xsl:pt-28">
        <motion.div>
          <div className=" px-5 sm:px-11 xl:pr-20 xsl:pr-[20%]">
            <motion.p
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm text-center xl:text-left  text-green-800 font-medium tracking-wider"
            >
              COFFEE & WORKING SPACE
            </motion.p>
            <motion.h1
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl xl:text-6xl text-center xl:text-left text-black font-medium my-5 xl:mr-20"
            >
              Comfortable Working Space & Amazing Coffee Experience
            </motion.h1>
            <motion.p
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm text-center xl:text-left xl:mr-20"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              quos repudiandae unde ut velit sapiente labore expedita soluta
              maiores deserunt exercitationem aliquam natus quis accusantium.
            </motion.p>
          </div>
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center xl:mr-[80%] gap-4 my-10"
          >
            <Button className="rounded-full text-green-500 border-2 border-green-500 bg-white px-10 hover:bg-green-500 hover:text-white">
              <Link href="/about">More Detail</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Services */}
      <div className="bg-white md:flex flex-rows items-center justify-center flex-wrap gap-5 xsl:pb-24 hd:pb-28 hd:gap-9">
        <div className="flex flex-col items-center text-center md:text-left">
          <motion.ul
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg xl:text-xl flex flex-col gap-3 lg:mb-10 my-10 md:ml-4 text-green-600 font-medium leading-[2.8] xl:leading-[3]"
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
          viewport={{ once: true }}
          className="flex flex-col items-center relative"
        >
          <div className="flex justify-center my-6 lg:mt-6 lg:mb-0 lg:ml-16 mx-6">
            <Image
              src="/brandpic/office/office3_3.jpg"
              alt=""
              width={960}
              height={455}
              className="rounded-2xl sm:aspect-[3/5] xs:max-h-[350px] md:max-w-[465px] lg:max-w-[620px] xl:max-h-[455px] xl:max-w-[350px] xl:mt-[-43%] xsl:mt-[-36%] object-cover object-center"
              quality={100}
            />
          </div>
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute bottom-9 sm:mr-16 md:mr-36 md:bottom-[70%] lg:mr-[30%] xl:mr-[-10%] xl:bottom-[110%] xsl:bottom-[100%] xs:w-[300px] w-[400px] flex flex-wrap gap-3 text-green-700 text-center"
          >
            <Badge className="w-[80px] p-2 bg-white">Free Wifi</Badge>
            <Badge className="w-[110px] p-2 bg-white">Free Parking</Badge>
            <Badge className="w-[150px] p-2 bg-white">Free Coffee Break</Badge>
            <Badge className="w-[130px] p-2 bg-white">Flexible Hour</Badge>
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
              src="/brandpic/office/office3_3.jpg"
              alt=""
              width={960}
              height={550}
              className="rounded-2xl sm:aspect-[2/5] xs:max-h-[350px] xl:max-h-[555px] mx-5 xl:max-w-[360px] xl:mt-[-34%] xsl:mt-[-37%] hd:mt-[-30%] object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-3 text-green-700 absolute bottom-8 lg:ml-[-64%] md:ml-[-56%] xl:ml-[-12%]">
            <div className="h-[100px] w-[290px] rounded-2xl bg-white flex items-center justify-center font-medium text-3xl">
              <CountUp
                end={53}
                duration={3}
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
        <div className="mt-[40px] px-3 xl:px-36 ">
          <motion.p
            variants={upwardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center  text-green-700 font-medium tracking-wider"
          >
            COMFORTABLE WORKSPACES
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-center text-black font-medium my-3"
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
              viewport={{ once: true }}
              className="w-[326px] h-[241px] sm:w-3/4 lg:w-[326px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3 bg-white p-5"
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
                className="text-xl my-3 text-center"
              >
                {item.title}
              </motion.h1>
              <motion.p
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-sm text-center mb-5"
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-white">
        <div className="mt-[40px] px-11 ">
          <motion.p
            variants={upwardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center mt-10 pt-6 text-green-700 font-medium tracking-wider"
          >
            COMFORTABLE SPACES
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-center text-black font-medium my-3"
          >
            Explore Our Spaces
          </motion.h1>
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center"
          >
            Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
          </motion.p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 px-3 my-6 space-y-4">
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
                width={326}
                height={index % 2 === 0 ? 500 : 350} // Random heights for organic look
                className="w-full object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coffee */}
      <div className="bg-yellow-50 flex flex-col items-center">
        <div className="mt-[40px] px-2 xl:px-36">
          <motion.p
            variants={upwardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center text-amber-800 font-medium tracking-wider"
          >
            AMAZING COFFEE EXPERIENCE
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-center text-black font-medium my-3"
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
              viewport={{ once: true }}
              className="w-[326px] h-[241px] lg:w-[326px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3 bg-white p-5"
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
                className="text-xl my-3 text-center"
              >
                {item.title}
              </motion.h1>
              <motion.p
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-sm text-center mb-5"
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
