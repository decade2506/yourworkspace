"use client";

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
const Numbers = [
  {
    count: 100,
    title: "Active Members",
  },
  {
    count: 100,
    title: "Successful Events",
  },
  {
    count: 100,
    title: "Partnerships",
  },
  {
    count: 100,
    title: "Locations Serving",
  },
];
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
const Community = [
  {
    profile1: "/brandpic/profile/profile1.jpg",
    profile2: "/brandpic/profile/profile2.jpg",
    profile3: "/brandpic/profile/profile3.jpg",
    title: "Freelancers",
    content:
      "Freelancers who value flexible work in an inspiring space while connecting with like-minded peers.",
  },
  {
    profile1: "/brandpic/profile/profile1.jpg",
    profile2: "/brandpic/profile/profile2.jpg",
    profile3: "/brandpic/profile/profile3.jpg",
    title: "Remote Workers",
    content:
      "Our space offers the ideal environment for those who need the freedom to work from anywhere but still want the benefits of a professional.",
  },
  {
    profile1: "/brandpic/profile/profile1.jpg",
    profile2: "/brandpic/profile/profile2.jpg",
    profile3: "/brandpic/profile/profile3.jpg",
    title: "Startups & Entrepreneurs",
    content:
      "Visionaries building the next big idea, leveraging our collaborative environment to meet partners, mentors, and investors.",
  },
  {
    profile1: "/brandpic/profile/profile1.jpg",
    profile2: "/brandpic/profile/profile2.jpg",
    profile3: "/brandpic/profile/profile3.jpg",
    title: "Creative Professionals",
    content:
      "Designers, writers, artists, and content creators who find inspiration in the vibrant atmosphere of Worknow and collaborate on innovative projects.",
  },
  {
    profile1: "/brandpic/profile/profile1.jpg",
    profile2: "/brandpic/profile/profile2.jpg",
    profile3: "/brandpic/profile/profile3.jpg",
    title: "Tech Enthusiasts",
    content:
      "Innovators in the tech space who use our high-tech facilities to build, test, and launch cutting-edge digital solutions.",
  },
  {
    profile1: "/brandpic/profile/profile1.jpg",
    profile2: "/brandpic/profile/profile2.jpg",
    profile3: "/brandpic/profile/profile3.jpg",
    title: "Business Consultants",
    content:
      "Professionals offering expertise in various fields, from marketing to legal services, helping startups and small businesses grow.",
  },
];
export default function About() {
  return (
    <div className="bg-slate-100 overflow-hidden w-full min-h-screen">
      {/* Title */}
      <div className="relative flex flex-col items-center justify-center text-center bg-green-800 p-8 min-h-[300px] md:h-[600px] xl:max-h-[900px] xxs:pt-52 sm:pt-32 md:pt-0">
        <motion.p
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[1.02rem] text-green-200 font-medium tracking-wider"
        >
          ABOUT
        </motion.p>
        <motion.h1
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-white mt-2 mb-32 font-medium"
        >
          Empowering Innovation Through Community
        </motion.h1>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute top-[85%] md:top-[60%] lg:top-[70%] xl:top-[60%]  flex justify-center md:px-5 xl:px-8 lg:px-0 left-0 right-0 mx-auto"
        >
          <Image
            src="/brandpic/office/exmpl.jpg"
            alt="H"
            width={1800}
            height={500}
            className="w-full h-auto sm:aspect-[5/3] xxs:max-h-[165px] xs:max-h-[165px] xsm:max-h-[250px] md:max-h-[340px] xl:max-h-[300px] xxxl:max-h-[450px] hd:max-h-[500px] aspect-auto mx-8 rounded-2xl object-cover object-center"
            priority
            quality={100}
          />
        </motion.div>
      </div>

      {/* About Us */}
      <div className="px-10 pt-52 mt-20 sm:pt-[200px] pb-16 bg-slate-100 flex flex-col items-center">
        <div className="flex flex-col xl:flex-row items-center justify-center gap-0">
          <div className="flex flex-col xl:items-start xl:ml-[10%] xl:mr-[5%] w-full">
            <motion.h1
              variants={upwardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[1.02rem] text-green-600 my-5 font-medium tracking-wider text-center"
            >
              ABOUT US
            </motion.h1>
            <motion.h1
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl text-green-900 font-medium text-center xl:text-left"
            >
              Where Creativity Meets Productivity
            </motion.h1>
            <motion.p
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-green-900 text-center mt-3 xl:text-left"
            >
              YOURS Workspace is more than just a coworking space – it’s a
              thriving creative center designed to empower freelancers,
              startups, and creative professionals.
            </motion.p>
            <div className="flex flex-col md:flex-row">
              <div className="my-7 text-center">
                <motion.h6
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="font-medium mb-1 text-green-950"
                >
                  Mission
                </motion.h6>
                <motion.p
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-sm"
                >
                  Our mission is to create a dynamic coworking space and
                  creative center where innovation thrives and collaboration is
                  seamless.
                </motion.p>
              </div>
              <div className="my-7 text-center">
                <motion.h6
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="font-medium mb-1 text-green-950"
                >
                  Vision
                </motion.h6>
                <motion.p
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-sm"
                >
                  Our vision is to become the leading hub for modern
                  professionals who seek a flexible, innovative, and
                  community-driven workspace.
                </motion.p>
              </div>
            </div>
          </div>

          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-7 w-full flex justify-center xl:mr-[10%]"
          >
            <Image
              src="/brandpic/office/office3_3.jpg"
              alt=""
              height={300}
              width={300}
              className="rounded-2xl h-[300px] md:h-[432px] xl:w-[420px] sm:w-[98%] xl:h-[505px] object-cover object-center"
            ></Image>
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 xl:px-0 xl:flex-nowrap xl:w-5/6 mx-auto">
          {Numbers.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col p-3 px-10 gap-2 items-center justify-center bg-green-900 rounded-2xl h-[130px] xxs:w-[250px] xs:w-[300px] sm:w-[98%] md:w-[49%] lg:w-[45%] text-2xl font-medium"
            >
              <div className="flex justify-center">
                <CountUp
                  end={item.count}
                  duration={3}
                  delay={0}
                  startOnMount={false}
                  enableScrollSpy={true}
                  scrollSpyDelay={2}
                  scrollSpyOnce={true}
                  className="text-white"
                />
                <span className="text-yellow-500">+</span>
              </div>
              <h1 className="text-green-50 text-xl">{item.title}</h1>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Range */}
      <div className="bg-white flex flex-col items-center">
        <div className="mt-[40px] px-3 xl:px-36">
          <motion.p
            variants={upwardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center text-green-700 font-medium tracking-wider"
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
        <div className="pb-7 flex flex-wrap md:px-36 xl:px-0 xl:flex-nowrap xl:w-5/6 gap-3 items-center justify-center">
          {service.map((item, index) => (
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
              <h1 className="text-xl my-3 text-center">{item.title}</h1>
              <p className="text-sm text-center mb-5">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comunity */}
      <div className="py-10 bg-slate-100 flex flex-col items-center p-8">
        <motion.h1
          variants={upwardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[1.02rem] text-green-600 my-5 font-medium"
        >
          THE YOURS COMMUNITY
        </motion.h1>
        <motion.h1
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl text-green-800 font-medium text-center"
        >
          A Diverse Network Of Innovators And Creators
        </motion.h1>
        <motion.p
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm text-green-900 text-center mt-3"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          architecto sit reiciendis voluptates dolorum molestiae hic numquam
          beatae similique ipsum ea nulla voluptate, fugit.
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
          {Community.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-5 flex flex-col md:w-[45%] md:h-[380px] xl:w-[30%] xl:mx-1 items-center center rounded-2xl py-7"
            >
              <motion.div
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 mx-10 my-6 xl:w-[40%]"
              >
                <Image
                  src={item.profile1}
                  alt=""
                  height={70}
                  width={70}
                  className="rounded-full sm:w-[30%] md:w-[20%] xl:mt-[-20%]"
                />
                <Image
                  src={item.profile2}
                  alt=""
                  height={105}
                  width={105}
                  className="rounded-full sm:w-[50%] md:w-[50%] xl:mb-[-20%]"
                />
                <Image
                  src={item.profile3}
                  alt=""
                  height={65}
                  width={65}
                  className="rounded-full sm:w-[30%] md:w-[40%] xl:mt-[-10%] xl:w-[48%]"
                />
              </motion.div>
              <div className="text-center">
                <motion.h4
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-lg font-medium my-5"
                >
                  {item.title}
                </motion.h4>
                <motion.p
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="text-sm"
                >
                  {item.content}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="p-4 flex flex-wrap items-center justify-center gap-4 mt-8">
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center font-medium"
          >
            Ready To Join A Community That Fosters Collaboration?
          </motion.p>
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button className="bg-green-800 text-white text-[1.05rem] rounded-full py-7 px-8">
              <Link href="/Contact">Schedule A Tour</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
