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

const contact = [
  {
    image: "/brandpic/office/office3_3.jpg",
    title: "Placeholder",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: "yours@workspace.vn"
  },
  {
    image: "/brandpic/office/office3_3.jpg",
    title: "Placeholder",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: "yours@workspace.vn"
  },
  {
    image: "/brandpic/office/office3_3.jpg",
    title: "Placeholder",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: "yours@workspace.vn"
  },
  {
    image: "/brandpic/office/office3_3.jpg",
    title: "Placeholder",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: "yours@workspace.vn"
  },
]

export default function Contact() {
  return (
    <div>
      {/* Title */}
      <div className="relative flex flex-col items-center justify-center text-center bg-green-800 p-8 h-[300px] md:h-[600px] xl:h-[900px] xs:pt-52 sm:pt-32 md:pt-0">
        <p className="text-[1.02rem] text-green-200 font-medium tracking-wider">
          ABOUT
        </p>
        <h1 className="text-3xl md:text-5xl text-white mt-2 mb-32 font-medium">
          Empowering Innovation Through Community
        </h1>
        <div className="absolute top-[85%] md:top-[60%] lg:top-[70%] xl:top-[60%] flex justify-center md:px-5 lg:px-0 left-0 right-0 mx-auto">
          <Image
            src="/brandpic/office/exmpl.jpg"
            alt="H"
            width={1800}
            height={500}
            className="sm:aspect-[5/2] xs:max-h-[165px] md:max-h-[340px] xl:max-h-[500px] aspect-auto mx-8 rounded-2xl object-cover object-center"
            priority
            quality={100}
          />
        </div>
      </div>

      {/* Contact Us */}
      <div className="px-20 pt-32 pb-16 bg-slate-100 flex flex-col items-center">
        <h1 className="text-[1.02rem] text-green-600 my-5 font-semibold tracking-wide">
          CONTACT US
        </h1>
        <h1 className="text-3xl md:5xl text-green-800 font-semibold text-center">
          You Can Also Contact Our Friendly Team Directly
        </h1>
        <div className="pt-10">
          <div className="flex flex-col xl:flex-row items-center">
            <form className="flex flex-col gap-6 p-3 bg-white rounded-xl xs:w-[320px] sm:w-3/4 h-auto my-7 px-5 py-11 xl:mr-[-10%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <p>Full name</p>
                <Input
                  className="rounded-xl bg-slate-100 px-2"
                  type="fullname"
                  placeholder=""
                />
                <p>Email *</p>
                <Input
                  className="rounded-xl bg-slate-100 px-2"
                  type="email"
                  placeholder=""
                />
                <p>Phone *</p>
                <Input
                  className="rounded-xl bg-slate-100 px-2"
                  type="phone"
                  placeholder=""
                />
                <p>Company name*</p>
                <Input
                  className="rounded-xl bg-slate-100 px-2"
                  type="company"
                  placeholder=""
                />
              </div>
              <p>Message</p>
              <Textarea
                className="h-[120px] rounded-2xl bg-slate-100 px-2"
                placeholder=""
              />
              <Button
                size="lg"
                className="max-w-50 rounded-full bg-green-800 text-white"
              >
                Submit
              </Button>
            </form>
            <div className="flex flex-wrap gap-2 justify-center xl:mr-[-10%]">
              {contact.map((item, index)=>(
                <div key={index} className="w-[326px] h-[254px] sm:w-3/4 md:w-1/3 rounded-2xl bg-white flex flex-col items-center justify-center my-3">
                <Image
                  src={item.image}
                  alt=""
                  height={75}
                  width={75}
                />
                <h1 className="text-xl my-3 text-center">{item.title}</h1>
                <p className="text-sm text-center mb-3 mx-7">
                  {item.des}
                </p>
                <p className="text-sm text-green-600 text-center mb-2 mx-10">
                  {item.info}
                </p>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Common Question */}
      <div className="bg-white p-10 flex flex-col items-center">
        <h1 className="text-[1.02rem] text-green-600 my-5 font-semibold tracking-wide">
          COMMON QUESTIONS
        </h1>
        <h1 className="text-3xl md:text-5xl text-green-800 md:mx-52 xl:mx-64 xsl:mx-72 font-semibold text-center">
          Everything You Need To Know About Worknow
        </h1>
        <p className="text-sm text-green-900 text-center mt-3 md:mx-52 xl:mx-64 xsl:mx-72">
          We want to make sure that every question you have about our spaces,
          memberships, and services is answered clearly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 my-10 mx-[-11] gap-5">
          <div className="bg-slate-100 p-5 text-left rounded-xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Can I Book A Space For A Day Or A Few Hours?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer hourly and daily bookings for meeting rooms,
                  coworking spaces, and private offices.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can I Book A Space For A Day Or A Few Hours?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer hourly and daily bookings for meeting rooms,
                  coworking spaces, and private offices.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I Book A Space For A Day Or A Few Hours?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer hourly and daily bookings for meeting rooms,
                  coworking spaces, and private offices.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I Book A Space For A Day Or A Few Hours?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer hourly and daily bookings for meeting rooms,
                  coworking spaces, and private offices.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="bg-slate-100 p-5 text-left rounded-xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Can I Book A Space For A Day Or A Few Hours?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer hourly and daily bookings for meeting rooms,
                  coworking spaces, and private offices.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can I Book A Space For A Day Or A Few Hours?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer hourly and daily bookings for meeting rooms,
                  coworking spaces, and private offices.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I Book A Space For A Day Or A Few Hours?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer hourly and daily bookings for meeting rooms,
                  coworking spaces, and private offices.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I Book A Space For A Day Or A Few Hours?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer hourly and daily bookings for meeting rooms,
                  coworking spaces, and private offices.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
