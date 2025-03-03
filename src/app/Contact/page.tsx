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

export default function Contact() {
  return (
    <div>
      {/* Title */}
      <div className="relative flex flex-col items-center justify-center text-center bg-green-800 p-8 h-[267px]">
        <p className="text-[1.02rem] text-green-200 font-semibold">ABOUT</p>
        <h1 className="text-2xl text-white my-10 font-semibold">
          Empowering Innovation Through Community
        </h1>
        <div className="absolute bottom-[-40%]">
          <Image
            src="/brandpic/office/office3_2.jpg"
            alt="H"
            width={300}
            height={300}
            className="rounded-2xl"
          ></Image>
        </div>
      </div>

      {/* Contact Us */}
      <div className="px-10 pt-32 pb-16 bg-slate-100 flex flex-col items-center">
        <h1 className="text-[1.02rem] text-green-600 my-5 font-semibold">
          CONTACT US
        </h1>
        <h1 className="text-2xl text-green-800 font-semibold text-center">
          You Can Also Contact Our Friendly Team Directly
        </h1>
        <div>
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <form className="flex flex-col gap-6 p-3 bg-white rounded-xl xs:w-[320px] my-7">
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
            <div className="w-[326px] h-[254px] rounded-2xl bg-white flex flex-col items-center justify-center my-3">
              <Image
                src="/brandpic/office/office3_3.jpg"
                alt=""
                height={75}
                width={75}
                className="my-3"
              />
              <h1 className="text-xl my-3 text-center">Placeholder</h1>
              <p className="text-sm text-center mb-5 mx-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-sm text-green-600 text-center mb-5 mx-10">
                yours@workspace.vn
              </p>
            </div>
            <div className="w-[326px] h-[254px] rounded-2xl bg-white flex flex-col items-center justify-center my-3">
              <Image
                src="/brandpic/office/office3_3.jpg"
                alt=""
                height={75}
                width={75}
                className="my-3"
              />
              <h1 className="text-xl my-3 text-center">Placeholder</h1>
              <p className="text-sm text-center mb-5 mx-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-sm text-green-600 text-center mb-5 mx-10">
                yours@workspace.vn
              </p>
            </div>
            <div className="w-[326px] h-[254px] rounded-2xl bg-white flex flex-col items-center justify-center my-3">
              <Image
                src="/brandpic/office/office3_3.jpg"
                alt=""
                height={75}
                width={75}
                className="my-3"
              />
              <h1 className="text-xl my-3 text-center">Placeholder</h1>
              <p className="text-sm text-center mb-5 mx-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-sm text-green-600 text-center mb-5 mx-10">
                yours@workspace.vn
              </p>
            </div>
            <div className="w-[326px] h-[254px] rounded-2xl bg-white flex flex-col items-center justify-center my-3">
              <Image
                src="/brandpic/office/office3_3.jpg"
                alt=""
                height={75}
                width={75}
                className="my-3"
              />
              <h1 className="text-xl my-3 text-center">Placeholder</h1>
              <p className="text-sm text-center mb-5 mx-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-sm text-green-600 text-center mb-5 mx-10">
                yours@workspace.vn
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Question */}
      <div className="bg-white p-10 flex flex-col items-center">
        <h1 className="text-[1.02rem] text-green-600 my-5 font-semibold">
          COMMON QUESTIONS
        </h1>
        <h1 className="text-2xl text-green-800 font-semibold text-center">
          Everything You Need To Know About Worknow
        </h1>
        <p className="text-sm text-green-900 text-center mt-3">
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
