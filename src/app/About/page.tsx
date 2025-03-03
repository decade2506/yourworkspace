import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
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

      {/* About Us */}
      <div className="px-10 pt-32 pb-16 bg-slate-100 flex flex-col items-center">
        <h1 className="text-[1.02rem] text-green-600 my-5 font-semibold">
          ABOUT US
        </h1>
        <h1 className="text-2xl text-green-800 font-semibold text-center">
          Where Creativity Meets Productivity
        </h1>
        <p className="text-sm text-green-900 text-center mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          architecto sit reiciendis voluptates dolorum molestiae hic numquam
          beatae similique ipsum ea nulla voluptate, fugit.
        </p>
        <div className="my-7 text-center">
          <h6 className="font-semibold mb-1">Mission</h6>
          <p>
            Our mission is to create a dynamic coworking space and creative
            center where innovation thrives and collaboration is seamless.
          </p>
        </div>
        <div className="my-7 text-center">
          <h6 className="font-semibold mb-1">Vision</h6>
          <p>
            Our mission is to create a dynamic coworking space and creative
            center where innovation thrives and collaboration is seamless.
          </p>
        </div>
        <div className="mb-7">
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            height={300}
            width={300}
            className="rounded-2xl"
          ></Image>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-green-800 rounded-2xl py-8 px-16">
            <h1 className="text-3xl text-center text-white">5+</h1>
            <p className="text-lg text-center text-green-100">Active member</p>
          </div>
          <div className="bg-green-800 rounded-2xl py-8 px-16">
            <h1 className="text-3xl text-center text-white">5+</h1>
            <p className="text-lg text-center text-green-100">Active member</p>
          </div>
          <div className="bg-green-800 rounded-2xl py-8 px-16">
            <h1 className="text-3xl text-center text-white">5+</h1>
            <p className="text-lg text-center text-green-100">Active member</p>
          </div>
          <div className="bg-green-800 rounded-2xl py-8 px-16">
            <h1 className="text-3xl text-center text-white">5+</h1>
            <p className="text-lg text-center text-green-100">Active member</p>
          </div>
        </div>
      </div>

      {/* Range */}
      <div className="bg-white flex flex-col items-center py-10">
        <div className="mt-[40px] px-3 ">
          <p className="text-sm text-center  text-green-700 font-semibold">
            COMFORTABLE WORKSPACES
          </p>
          <h1 className="text-3xl text-center text-black font-semibold my-3">
            We Offer A Range Of <br /> Modern And Flexible <br /> Workspaces
          </h1>
        </div>
        <div className="w-[326px] h-[241px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3">
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            height={75}
            width={75}
            className="my-3"
          />
          <h1 className="text-xl my-3 text-center">Placeholder</h1>
          <p className="text-sm text-center mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-[326px] h-[241px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3">
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            height={75}
            width={75}
            className="my-3"
          />
          <h1 className="text-xl my-3 text-center">Placeholder</h1>
          <p className="text-sm text-center mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-[326px] h-[241px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3">
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            height={75}
            width={75}
            className="my-3"
          />
          <h1 className="text-xl my-3 text-center">Placeholder</h1>
          <p className="text-sm text-center mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-[326px] h-[241px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3">
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            height={75}
            width={75}
            className="my-3"
          />
          <h1 className="text-xl my-3 text-center">Placeholder</h1>
          <p className="text-sm text-center mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* Comunity */}
      <div className="py-10 bg-slate-100 flex flex-col items-center p-8">
        <h1 className="text-[1.02rem] text-green-600 my-5 font-semibold">
          THE YOURS COMMUNITY
        </h1>
        <h1 className="text-2xl text-green-800 font-semibold text-center">
          A Diverse Network Of Innovators And Creators
        </h1>
        <p className="text-sm text-green-900 text-center mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          architecto sit reiciendis voluptates dolorum molestiae hic numquam
          beatae similique ipsum ea nulla voluptate, fugit.
        </p>
        <div>
          <div className="bg-white p-5 flex flex-col items-center center my-6 rounded-2xl">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={100}
                  width={100}
                  className="rounded-full"
                />
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={190}
                  width={190}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={80}
                  width={80}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="text-center">
                <h4 className="text-lg font-medium my-5">Freelancers</h4>
                <p className="text-sm">Freelancers who value flexible work in an inspiring space while connecting with like-minded peers.</p>
            </div>
          </div>
          <div className="bg-white p-5 flex flex-col items-center center my-6 rounded-2xl">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={100}
                  width={100}
                  className="rounded-full"
                />
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={190}
                  width={190}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={80}
                  width={80}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="text-center">
                <h4 className="text-lg font-medium my-5">Freelancers</h4>
                <p className="text-sm">Freelancers who value flexible work in an inspiring space while connecting with like-minded peers.</p>
            </div>
          </div>
          <div className="bg-white p-5 flex flex-col items-center center my-6 rounded-2xl">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={100}
                  width={100}
                  className="rounded-full"
                />
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={190}
                  width={190}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={80}
                  width={80}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="text-center">
                <h4 className="text-lg font-medium my-5">Freelancers</h4>
                <p className="text-sm">Freelancers who value flexible work in an inspiring space while connecting with like-minded peers.</p>
            </div>
          </div>
          <div className="bg-white p-5 flex flex-col items-center center my-6 rounded-2xl">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={100}
                  width={100}
                  className="rounded-full"
                />
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={190}
                  width={190}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={80}
                  width={80}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="text-center">
                <h4 className="text-lg font-medium my-5">Freelancers</h4>
                <p className="text-sm">Freelancers who value flexible work in an inspiring space while connecting with like-minded peers.</p>
            </div>
          </div>
          <div className="bg-white p-5 flex flex-col items-center center my-6 rounded-2xl">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={100}
                  width={100}
                  className="rounded-full"
                />
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={190}
                  width={190}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={80}
                  width={80}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="text-center">
                <h4 className="text-lg font-medium my-5">Freelancers</h4>
                <p className="text-sm">Freelancers who value flexible work in an inspiring space while connecting with like-minded peers.</p>
            </div>
          </div>
          <div className="bg-white p-5 flex flex-col items-center center my-6 rounded-2xl">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={100}
                  width={100}
                  className="rounded-full"
                />
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={190}
                  width={190}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/brandpic/office/office3_3.jpg"
                  alt=""
                  height={80}
                  width={80}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="text-center">
                <h4 className="text-lg font-medium my-5">Freelancers</h4>
                <p className="text-sm">Freelancers who value flexible work in an inspiring space while connecting with like-minded peers.</p>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col items-center gap-4">
            <p className="text-center font-medium">Ready To Join A Community That Fosters Collaboration?</p>
            <Button className="bg-green-800 text-white text-[1.05rem] rounded-full py-7 px-8">Schedule A Tour</Button>
        </div>
      </div>
    </div>
  );
}
