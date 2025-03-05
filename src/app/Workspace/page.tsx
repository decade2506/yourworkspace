"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import CountUp from "react-countup";

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
const service = [
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
const space = [
  {
    image: "/brandpic/office/office3_1.jpg",
    littleimg: "/brandpic/svimg/beanbag.png",
    capacity: "Capacity 10 person",
    title: "Executive Private Office",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptate quod quia mollitia reprehenderit corrupti veniam nemo aspernatur adipisci!",
    price: "200$/day",
    badge: "PRIVATE OFFICE",
  },
  {
    image: "/brandpic/office/office3_1.jpg",
    littleimg: "/brandpic/svimg/beanbag.png",
    capacity: "Capacity 10 person",
    title: "Executive Private Office",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptate quod quia mollitia reprehenderit corrupti veniam nemo aspernatur adipisci!",
    price: "200$/day",
    badge: "PRIVATE OFFICE",
  },
  {
    image: "/brandpic/office/office3_1.jpg",
    littleimg: "/brandpic/svimg/beanbag.png",
    capacity: "Capacity 10 person",
    title: "Executive Private Office",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptate quod quia mollitia reprehenderit corrupti veniam nemo aspernatur adipisci!",
    price: "200$/day",
    badge: "PRIVATE OFFICE",
  },
  {
    image: "/brandpic/office/office3_1.jpg",
    littleimg: "/brandpic/svimg/beanbag.png",
    capacity: "Capacity 10 person",
    title: "Executive Private Office",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptate quod quia mollitia reprehenderit corrupti veniam nemo aspernatur adipisci!",
    price: "200$/day",
    badge: "PRIVATE OFFICE",
  },
];
const Gallery = [
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
const Facilities = [
  {
    img: "/brandpic/svimg/wifi.png",
    title: "High-speed Internet",
    content: "We provide dedicated Private, fast, and secure Wi-Fi.",
  },
  {
    img: "/brandpic/svimg/storage.png",
    title: "Personal Storage",
    content: "Lockable storage cabinets for personal or team use.",
  },
  {
    img: "/brandpic/svimg/soundproof.png",
    title: "Soundproofing",
    content: "For privacy and a quiet work environment.",
  },
  {
    img: "/brandpic/svimg/climate.png",
    title: "Climate Control",
    content: "Adjustable air conditioning and heating.",
  },
  {
    img: "/brandpic/svimg/locker.png",
    title: "Private Lockers",
    content: "Secure, rentable lockers for storing personal items.",
  },
  {
    img: "/brandpic/svimg/board.png",
    title: "Whiteboards",
    content: "For brainstorming and collaborative sessions.",
  },
];

export default function Workspace() {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
    >
      {/* Title */}
      <div className="flex flex-col items-center bg-green-200">
        <div className="mt-[40px] px-5 xl:pr-20 xsl:pr-[20%] ">
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-center xl:text-left text-green-800 font-medium"
          >
            WORKING SPACE FOR EVERY NEED
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-4xl md:text-5xl xl:text-6xl text-center xl:text-left text-black font-medium my-5"
          >
            Discover Flexible And Inspiring Workspaces
          </motion.h1>
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-center xl:text-left"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quos
            repudiandae unde ut velit sapiente labore expedita soluta maiores
            deserunt exercitationem aliquam natus quis accusantium, m.
          </motion.p>
        </div>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center xl:mr-[85%] gap-4 my-10"
        >
          <Button className="rounded-full text-white bg-orange-400 px-10 hover:bg-black/80">
            Book Now
          </Button>
        </motion.div>
      </div>

      {/* Room & Services */}
      <div className="bg-white md:flex flex-rows items-center justify-center flex-wrap gap-5">
        <div className="flex flex-col items-center text-center md:text-left">
          <motion.ul
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-lg xl:text-xl leading-[2.8] xl:leading-[3] flex flex-col gap-3 lg:mb-10 my-10 md:ml-4 text-green-600 font-medium"
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
              width={325}
              height={370}
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
            <div className="h-[100px] w-[290px] rounded-2xl bg-white flex items-center justify-center font-medium text-3xl">
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

      {/* Range */}
      <div className="bg-white flex flex-col items-center">
        <div className="mt-[40px] px-3 xl:px-36">
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-center text-green-700 font-medium"
          >
            COMFORTABLE WORKSPACES
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-3xl md:text-5xl text-center text-black font-medium my-3"
          >
            We Offer A Range Of Modern And Flexible Workspaces
          </motion.h1>
        </div>
        <div className="pb-7 flex flex-wrap gap-3 items-center justify-center">
          {service.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
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

      {/* Our Space */}
      <div className="bg-slate-50 flex flex-col items-center">
        <div className="mt-[40px] px-11 xl:relative">
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-center xl:text-left mt-10 pt-6 text-green-700 font-medium"
          >
            OUR SPACES
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-3xl md:text-5xl xl:leading-relaxed text-center xl:text-left xl:w-[50%] text-black font-medium my-6"
          >
            Take A Look At Our Vibrant And Dynamic Workspaces
          </motion.h1>
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-center xl:text-right xl:w-1/2 xl:ml-[50%] xl:absolute top-[70%]"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quos
            repudiandae unde ut velit sapiente labore expedita soluta maiores
            deserunt exercitationem aliquam natus quis accusantium, m.
          </motion.p>
        </div>
        {space.map((item, index) => (
          <motion.div
            key={index}
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className=" bg-white relative w-[326px] h-[550px] sm:h-[100%] lg:h-[100%] sm:pb-6  sm:w-3/4 rounded-2xl border-2 border-solid my-5 flex flex-col items-center"
          >
            <Image
              src={item.image}
              alt=""
              width={326}
              height={200}
              className="rounded-t-2xl sm:w-[100%]"
            />
            <Badge className="absolute hidden md:block bottom-[92%] left-[1%] p-3 text-white bg-green-900">
              {item.badge}
            </Badge>
            <div className="flex flex-col md:flex-row items-center gap-4 flex-wrap md:ml-[-60%] lg:ml-[-70%]">
              <Image
                src={item.littleimg}
                alt=""
                width={40}
                height={40}
                className="mt-6 mb-3"
              />
              <motion.h2
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                className="text-sm text-slate-400 md:text-left md:pt-6"
              >
                {item.capacity}
              </motion.h2>
            </div>

            <div className="p-5">
              <motion.h1
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                className="text-xl mt-2 text-center md:text-left"
              >
                {item.title}
              </motion.h1>
              <motion.p
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                className="text-sm text-center md:text-left mt-5"
              >
                {item.content}
              </motion.p>
            </div>
            <div className="border-t-2 border-solid border-slate-300 pt-6 sm:px-6 md:px-8 lg:px-14 flex justify-center items-center gap-5 sm:gap-40 md:gap-[250px] lg:gap-[350px]">
              <motion.p
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
              >
                {item.price}
              </motion.p>
              <Button className="rounded-full text-white bg-green-700 px-10 hover:bg-black/80">
                Book Now
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gallery */}
      <div className="bg-white">
        <div className="mt-[40px] px-11 ">
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-center mt-10 pt-6 text-green-700 font-medium"
          >
            COMFORTABLE SPACES
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-3xl md:text-5xl text-center text-black font-medium my-3"
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
          {Gallery.map((item, index) => (
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

      {/* Our Facilities */}
      <div className="bg-slate-50 flex flex-col items-center">
        <div className="mt-[40px] px-11 ">
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-center mt-10 pt-6 text-green-700 font-medium"
          >
            OUR FACILITIES
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-3xl text-center text-green-700 font-medium my-6"
          >
            Premium Amenities for a Seamless Work Experience
          </motion.h1>
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-center"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quos
            repudiandae unde ut velit sapiente labore expedita soluta maiores
            deserunt exercitationem aliquam natus quis accusantium, m.
          </motion.p>
        </div>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          className="flex items-center gap-14"
        >
          <Image
            src="/brandpic/profile/profile1.jpg"
            alt=""
            height={150}
            width={150}
            className="rounded-full"
          />
          <Image
            src="/brandpic/profile/profile2.jpg"
            alt=""
            height={190}
            width={190}
            className="rounded-full"
          />
        </motion.div>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          className="flex items-end"
        >
          <Image
            src="/brandpic/profile/profile3.jpg"
            alt=""
            height={105}
            width={105}
            className="rounded-full"
          />
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-5 xl:px-[200px] xsl:px-[300px] xxl:px-[400px]">
          {Facilities.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              className="w-[326px] h-[241px] sm:w-3/4 lg:w-[326px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3 bg-white p-5"
            >
              <Image
                src={item.img}
                alt={item.title}
                height={75}
                width={75}
                className="my-3"
              />
              <h1 className="text-xl my-3 text-center">{item.title}</h1>
              <p className="text-sm text-center mb-5">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
