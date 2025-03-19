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
    count: 136,
    title: "Thành viên tích cực",
  },
  {
    count: 65,
    title: "Sự kiện thành công",
  },
  {
    count: 32,
    title: "Quan hệ đối tác",
  },
  {
    count: 5,
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
    profile1: "/brandpic/profile/freelancer1.jpg",
    profile2: "/brandpic/profile/freelancer2.jpg",
    profile3: "/brandpic/profile/freelancer3.jpg",
    title: "Freelancers",
    content:
      "Những Freelancer coi trọng công việc linh hoạt trong một không gian truyền cảm hứng, đồng thời kết nối với những người cùng chí hướng.",
  },
  {
    profile1: "/brandpic/profile/remote1.jpg",
    profile2: "/brandpic/profile/remote2.jpg",
    profile3: "/brandpic/profile/remote3.jpg",
    title: "Nhân viên làm việc từ xa",
    content:
      "Không gian của chúng tôi mang đến môi trường lý tưởng cho những ai cần sự tự do để làm việc ở bất cứ đâu nhưng vẫn muốn được hưởng những lợi ích của một người chuyên nghiệp.",
  },
  {
    profile1: "/brandpic/profile/startup1.jpg",
    profile2: "/brandpic/profile/startup2.jpg",
    profile3: "/brandpic/profile/startup3.jpg",
    title: "Các Công Ty Khởi Nghiệp & Doanh Nhân",
    content:
      "Những người có tầm nhìn xây dựng ý tưởng lớn tiếp theo, tận dụng môi trường hợp tác của chúng tôi để gặp gỡ các đối tác, cố vấn và nhà đầu tư.",
  },
  {
    profile1: "/brandpic/profile/pro1.jpg",
    profile2: "/brandpic/profile/pro2.jpg",
    profile3: "/brandpic/profile/pro3.jpg",
    title: "Chuyên gia sáng tạo",
    content:
      "Các nhà thiết kế, nhà văn, nghệ sĩ và người sáng tạo nội dung tìm thấy cảm hứng trong bầu không khí sôi động của YOURS và hợp tác trong các dự án sáng tạo.",
  },
  {
    profile1: "/brandpic/profile/tech1.jpg",
    profile2: "/brandpic/profile/tech2.jpg",
    profile3: "/brandpic/profile/tech3.jpg",
    title: "Những tín đồ công nghệ",
    content:
      "Những nhà đổi mới trong lĩnh vực công nghệ sử dụng cơ sở công nghệ cao của chúng tôi để xây dựng, thử nghiệm và ra mắt các giải pháp kỹ thuật số tiên tiến.",
  },
  {
    profile1: "/brandpic/profile/consult1.jpg",
    profile2: "/brandpic/profile/consult2.jpg",
    profile3: "/brandpic/profile/consult3.jpg",
    title: "Nhà tư vấn doanh nghiệp",
    content:
      "Các chuyên gia cung cấp kiến ​​thức chuyên môn trong nhiều lĩnh vực, từ tiếp thị đến dịch vụ pháp lý, giúp các công ty khởi nghiệp và doanh nghiệp nhỏ phát triển.",
  },
];
export default function About() {
  return (
    <div className="bg-slate-100 overflow-hidden w-full min-h-screen">
      {/* Title */}
      <div className="relative flex flex-col items-center justify-center text-center bg-green-800 p-8 min-h-[500px] xssm:h-[650px] md:h-[660px] air:h-[799px] lgl:h-[980px] xl:max-h-[900px] hd:max-h-[700px] xxs:pt-52 sm:pt-32 md:pt-0">
        <motion.p
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[1.02rem] text-green-200 font-medium tracking-wider"
        >
          VỀ CHÚNG TÔI
        </motion.p>
        <motion.h1
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-white mt-2 mb-32 font-medium"
        >
          Thúc đẩy đổi mới thông qua cộng đồng
        </motion.h1>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute top-[85%] md:top-[60%] air:top-[70%] lg:top-[70%] lgl:top-[78%] xl:top-[60%]  flex justify-center md:px-5 xl:px-8 lg:px-0 left-0 right-0 mx-auto"
        >
          <Image
            src="/brandpic/office/exmpl.jpg"
            alt="H"
            width={1800}
            height={500}
            className="w-full h-auto sm:aspect-[5/3] xxs:max-h-[165px] xs:max-h-[195px] xsm:max-h-[250px] md:max-h-[340px] lgl:max-h-[400px] xl:max-h-[300px] xxxl:max-h-[450px] hd:max-h-[500px] aspect-auto mx-8 rounded-2xl object-cover object-center"
            priority
            quality={100}
          />
        </motion.div>
      </div>

      {/* About Us */}
      <div className="px-10 pt-52 xxs:mt-26 mt-40 sm:pt-[200px] pb-16 bg-slate-100 flex flex-col items-center">
        <div className="flex flex-col lgl:flex-row items-center justify-center gap-0">
          <div className="flex flex-col lgl:items-start xl:ml-[10%] xl:mr-[5%] w-full">
            <motion.h1
              variants={upwardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[1.02rem] text-green-600 my-5 font-medium tracking-wider text-center"
            >
              VỀ CHÚNG TÔI
            </motion.h1>
            <motion.h1
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl text-green-900 font-medium text-center lgl:text-left"
            >
              Nơi kết nối sáng tạo và năng suất
            </motion.h1>
            <motion.p
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-green-900 text-center mt-3 lgl:text-left"
            >
              YOURS Workspace không chỉ là một không gian làm việc chung – mà
              còn là một trung tâm sáng tạo phát triển mạnh mẽ được thiết kế để
              trao quyền cho những người làm việc tự do, các công ty khởi nghiệp
              và các chuyên gia sáng tạo.
            </motion.p>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="my-7 text-center lgl:text-left">
                <motion.h6
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="font-medium mb-1 text-green-950"
                >
                  Nhiệm vụ
                </motion.h6>
                <motion.p
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-sm"
                >
                  Sứ mệnh của chúng tôi là tạo ra một không gian làm việc chung
                  năng động và trung tâm sáng tạo, nơi sự đổi mới phát triển
                  mạnh mẽ và sự hợp tác liền mạch.
                </motion.p>
              </div>
              <div className="my-7 text-center lgl:text-left">
                <motion.h6
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="font-medium mb-1 text-green-950"
                >
                  Tầm nhìn
                </motion.h6>
                <motion.p
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-sm"
                >
                  Tầm nhìn của chúng tôi là trở thành trung tâm hàng đầu cho các
                  chuyên gia hiện đại đang tìm kiếm một không gian làm việc linh
                  hoạt, sáng tạo và hướng đến cộng đồng.
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
              src="/brandpic/office/exmpl4.jpg"
              alt=""
              height={900}
              width={900}
              className="rounded-2xl h-[300px] md:h-[432px] xl:w-[420px] sm:w-[98%] xl:h-[505px] xxl:w-[90%] xxxl:w-[95%] object-cover object-center"
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
              className="flex flex-col p-3 px-10 gap-2 items-center justify-center bg-green-950 rounded-2xl h-[130px] xxs:w-[250px] xs:w-[300px] sm:w-[98%] md:w-[49%] lg:w-[45%] text-2xl font-medium"
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
                  className="text-white text-5xl font-bold"
                />
                <span className="text-yellow-500 text-4xl">+</span>
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

      {/* Comunity */}
      <div className="py-10 bg-slate-100 flex flex-col items-center p-8">
        <div className="flex flex-col lgl:flex-row gap-8 items-center justify-center mx-8">
          <div className="flex flex-col">
            <motion.h1
              variants={upwardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[1.02rem] text-green-600 my-5 font-medium text-center lgl:text-left"
            >
              CỘNG ĐỒNG CỦA YOURS
            </motion.h1>
            <motion.h1
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl text-green-800 font-medium text-center lgl:text-left"
            >
              Mạng lưới đa dạng của những nhà sáng tạo và đổi mới
            </motion.h1>
          </div>
          <motion.p
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm lgl:text-lg xl:mx-[20%] text-green-900 text-center mt-3 lgl:text-left"
          >
            Cộng đồng của chúng tôi phát triển mạnh mẽ nhờ sự hợp tác được tạo
            ra bởi những trải nghiệm chung, trao đổi kiến ​​thức và hỗ trợ lẫn
            nhau. Sau đây là một số thành viên chủ chốt tạo nên cộng đồng YOURS:
          </motion.p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
          {Community.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-5 flex flex-col gap-5 md:w-[45%] md:h-[380px] xl:w-[30%] xl:mx-1 items-center center rounded-2xl py-7"
            >
              <motion.div
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 mx-10 my-6 xl:w-[80%]"
              >
                <Image
                  src={item.profile1}
                  alt=""
                  height={800} //85
                  width={800}
                  className="rounded-full aspect-square xxs:w-[36%] md:w-[26%] xl:w-[22%] xl:mt-[-20%] object-center object-cover"
                />
                <Image
                  src={item.profile2}
                  alt=""
                  height={800} //120
                  width={800}
                  className="rounded-full aspect-square xxs:w-[50%] md:w-[38%] xl:w-[35%] xl:mb-[-20%] object-center object-cover"
                />
                <Image
                  src={item.profile3}
                  alt=""
                  height={800} //80
                  width={800}
                  className="rounded-full aspect-square xxs:w-[32%] md:w-[33%] xl:w-[30%] xl:mt-[-3%] object-center object-cover"
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
            Bạn đã sẵn sàng gia nhập một cộng đồng gắn kết?
          </motion.p>
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button className="bg-green-800 text-white hover:bg-white hover:text-green-800 text-[1.05rem] rounded-full py-7 px-8">
              <Link href="/Contact">Hẹn lịch trải nghiệm</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
