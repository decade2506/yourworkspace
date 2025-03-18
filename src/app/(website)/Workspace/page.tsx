"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import CountUp from "react-countup";
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
    <div className="overflow-hidden w-full min-h-screen">
      {/* Title */}
      <div className="flex flex-col items-center justify-center bg-green-200 pt-40 min-h-screen">
        <div className="mt-[40px] px-5 xl:pr-20 xsl:pr-[20%] ml-10">
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center xl:text-left text-green-800 font-medium tracking-wider"
          >
            KHÔNG GIAN LÀM VIỆC CHO MỌI NHU CẦU
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl xl:text-6xl text-center xl:text-left text-black font-medium my-5"
          >
            Khám phá không gian làm việc linh hoạt và đầy cảm hứng
          </motion.h1>
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
          viewport={{ once: true }}
          className="flex justify-center xl:mr-[85%] gap-4 my-10"
        >
          <Button className="rounded-full text-white bg-orange-400 px-10 hover:bg-black/80">
            <Link href="/contact">Đặt Ngay</Link>
          </Button>
        </motion.div>
      </div>

      {/* Room & Services */}
      <div className="bg-white md:flex flex-rows items-center justify-center flex-wrap gap-5 pt-3 pb-10 hd:pb-28 hd:gap-9">
        <div className="flex flex-col items-center text-center md:text-left">
          <motion.ul
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg xl:text-xl flex flex-col gap-3 lg:mb-10 my-10 md:ml-4 text-green-600 font-medium leading-[2.8] xl:leading-[3]"
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
              src="/brandpic/office/office3_3.jpg"
              alt=""
              width={960}
              height={455}
              className="rounded-2xl sm:aspect-[3/5] xs:max-h-[350px] md:max-w-[465px] lg:max-w-[620px] xl:max-h-[455px] xl:max-w-[350px] object-cover object-center"
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
            <Badge className="w-[150px] p-2 bg-white">Free Coffee Break</Badge>
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
              src="/brandpic/office/office3_3.jpg"
              alt=""
              width={960}
              height={550}
              className="rounded-2xl sm:aspect-[2/5] xs:max-h-[350px] xl:max-h-[555px] mx-5 xl:max-w-[360px] object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-3 text-green-700 absolute bottom-8 lg:ml-[-64%] md:ml-[-56%] xl:ml-[-12%]">
            <div className="h-[100px] xxs:w-[250px] xs:w-[290px] rounded-2xl bg-white flex items-center justify-center font-medium text-3xl">
              <CountUp
                end={52}
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
            KHÔNG GIAN LÀM VIỆC THOẢI MÁI
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-center text-black font-medium my-3"
          >
            Chúng tôi mang đến không gian làm việc hiện đại và linh hoạt, phù
            hợp mọi nhu cầu.
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

      {/* Our Space */}
      <div className="bg-slate-50 flex flex-col items-center">
        <div className="mt-[40px] px-11 xl:relative">
          <motion.p
            variants={upwardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center xl:text-left mt-10 pt-6 text-green-700 font-medium tracking-wider"
          >
            KHÔNG GIAN CỦA CHÚNG TÔI
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl xl:leading-relaxed text-center xl:text-left xl:w-[50%] text-black font-medium my-6"
          >
            Hãy ghé thăm không gian làm việc đầy năng nượng và hiện đại của
            chúng tôi
          </motion.h1>
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-center xl:text-right xl:w-1/2 xl:ml-[40%] xl:absolute top-[70%]"
          >
            Cho dù bạn đang tìm kiếm một nơi yên tĩnh để làm việc, một không
            gian chuyên nghiệp để họp hay một địa điểm tổ chức hội thảo tiếp
            theo, chúng tôi đều có không gian hoàn hảo dành cho bạn.
          </motion.p>
        </div>

        {space.map((item, index) => (
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={index}
            className="flex flex-col items-center xl:items-end justify-end my-8 xl:relative"
          >
            <Image
              src={item.image}
              alt=""
              width={1088}
              height={600}
              className="hidden xl:block rounded-2xl max-w-[1200px] h-[600px] object-cover object-center"
            />
            <motion.div
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className=" bg-white relative w-[326px] h-[550px] sm:h-[100%] lg:h-[100%] xl:w-[415px] xl:h-[340px] sm:pb-6  sm:w-3/4 rounded-2xl border-2 border-solid my-5 flex flex-col items-center xl:absolute xl:right-5"
            >
              <Image
                src={item.image}
                alt=""
                width={326}
                height={200}
                className="rounded-t-2xl sm:w-[100%] xl:hidden"
              />
              <Badge className="absolute hidden md:block bottom-[92%] left-[1%] xl:bottom-[155%] xl:left-[-155%] p-3 text-white bg-green-900">
                {item.badge}
              </Badge>
              <div className="flex flex-col md:flex-row items-center gap-4 flex-wrap md:ml-[-60%] lg:ml-[-70%] xl:ml-[-40%]">
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
              <div className="border-t-2 border-solid border-slate-300 pt-6 sm:px-6 md:px-8 lg:px-14 xl:px-6 flex justify-center items-center gap-5 sm:gap-40 md:gap-[250px] lg:gap-[350px] xl:gap-24">
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
          </motion.div>
        ))}
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
            KHÔNG GIAN CHUẨN HÓA
          </motion.p>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-center text-black font-medium my-3"
          >
            Khám phá không gian của chúng tôi
          </motion.h1>
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-center"
          >
            Take a look at our vibrant and dynamic workspaces.
          </motion.p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 px-3 my-6 space-y-4">
          {Gallery.map((item, index) => (
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

      {/* Our Facilities */}
      <div className="bg-slate-50 flex flex-col items-center">
        <div className="md:flex flex-col xl:flex-row items-center justify-center">
          <div className="mt-[40px] px-11 xl:w-[40%]">
            <motion.p
              variants={upwardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm text-center xl:text-left mt-10 pt-6 text-green-700 font-medium tracking-wider"
            >
              CƠ SỞ VẬT CHẤT
            </motion.p>
            <motion.h1
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl text-center xl:text-left text-green-700 font-medium my-6"
            >
              Tiện nghi cao cấp cho trải nghiệm làm việc liền mạch
            </motion.h1>
            <motion.p
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-center xl:text-left"
            >
              Chúng tôi cung cấp nhiều tiện nghi hàng đầu được thiết kế để giúp
              trải nghiệm làm việc của bạn trở nên suôn sẻ và thoải mái nhất có
              thể.
            </motion.p>
          </div>
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 mx-10 my-6 xl:w-[40%]"
          >
            <Image
              src="/brandpic/profile/profile1.jpg"
              alt=""
              height={85}
              width={85}
              className="rounded-full md:w-[20%] xl:mt-[-20%] object-center object-cover"
            />
            <Image
              src="/brandpic/profile/profile2.jpg"
              alt=""
              height={120}
              width={120}
              className="rounded-full md:w-[50%] xl:mb-[-20%] object-center object-cover"
            />
            <Image
              src="/brandpic/profile/profile3.jpg"
              alt=""
              height={80}
              width={80}
              className="rounded-full md:w-[40%] xl:mt-[-10%] xl:w-[48%] object-center object-cover"
            />
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 xl:px-[200px] xsl:px-[300px] xxl:px-[400px] my-20">
          {Facilities.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="xxs:w-[300px] xs:w-[326px] h-[245px] sm:w-3/4 lg:w-[45%] xl:w-[30%] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-4 bg-white p-5"
            >
              <Image
                src={item.img}
                alt={item.title}
                height={75}
                width={75}
                className="my-3"
              />
              <h1 className="text-xl my-3 mx-[-5] text-center">{item.title}</h1>
              <p className="text-sm text-center mb-5">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
