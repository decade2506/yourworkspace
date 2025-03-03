import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Blog() {
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col items-center bg-yellow-100">
        <div className="mt-[40px] px-5 ">
          <p className="text-sm text-center  text-amber-600 font-semibold">
            Coffee On The Go
          </p>
          <h1 className="text-4xl text-center text-amber-900 font-semibold my-5">
            Delicious and Fresh Coffee That Will Boost Your Day
          </h1>
          <p className="text-sm text-amber-700 text-center mb-9">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quos
            repudiandae unde ut velit sapiente labore expedita soluta.
          </p>
        </div>
      </div>

      {/* Coffee */}
      <div className="bg-white p-10">
        <div className="text-amber-700">
          <div className="flex flex-col items-center relative my-6">
            <Image
              src="/brandpic/office/office3_3.jpg"
              alt=""
              height={500}
              width={300}
              className="rounded-2xl"
            ></Image>
            <Badge className="bg-[#313131] text-white px-5 py-3 text-sm absolute bottom-2 left-2">High Quality Coffee Beans</Badge>
          </div>
          <div className="flex flex-col items-center relative my-6">
            <Image
              src="/brandpic/office/office3_3.jpg"
              alt=""
              height={500}
              width={300}
              className="rounded-2xl"
            ></Image>
            <Badge className="bg-[#313131] text-white px-5 py-3 text-sm absolute bottom-2 right-2">100% Freshly Made Coffee</Badge>
          </div>
          <div className="flex flex-col items-center relative my-6">
            <Image
              src="/brandpic/office/office3_3.jpg"
              alt=""
              height={500}
              width={300}
              className="rounded-2xl"
            ></Image>
            <Badge className="bg-[#313131] text-white px-5 py-3 text-sm absolute bottom-2 left-2">Great Aroma</Badge>
          </div>
          <div className="flex flex-col items-center relative my-6">
            <Image
              src="/brandpic/office/office3_3.jpg"
              alt=""
              height={500}
              width={300}
              className="rounded-2xl"
            ></Image>
            <Badge className="bg-[#313131] text-white px-5 py-3 text-sm absolute bottom-2 right-2">Boost Your Mood Everyday</Badge>
          </div>
        </div>
      </div>

      {/* Coffee Sercvices */}
      <div className="bg-yellow-100 flex flex-col items-center">
        <div className="mt-[40px] px-2 ">
          <p className="text-sm text-center  text-amber-600 font-semibold">
            Amazing Coffee Experience
          </p>
          <h1 className="text-3xl text-center text-amber-900 font-semibold my-3">
            While You Are At It, Why Don't Enjoy A Cup Of Coffee
          </h1>
        </div>
        <div className="w-[326px] h-[241px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3 bg-white p-5">
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
        <div className="w-[326px] h-[241px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3 bg-white p-5">
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
        <div className="w-[326px] h-[241px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3 bg-white p-5">
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
        <div className="w-[326px] h-[241px] rounded-2xl border-2 border-solid flex flex-col items-center justify-center my-3 bg-white p-5">
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

      {/* Spaces */}
      <div className="bg-white">
        <div className="mt-[40px] px-3 ">
          <p className="text-sm text-center mt-10 pt-6 text-amber-600 font-semibold">
            FRESH COFFEE MAKE YOUR DAY
          </p>
          <h1 className="text-3xl text-center text-amber-900 font-semibold my-3">
            Explore YOURS Coffee
          </h1>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 my-4">
          <Image
            src="/brandpic/office/office3_2.jpg"
            alt=""
            width={326}
            height={500}
            className="rounded-2xl"
          />
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            width={326}
            height={500}
            className="rounded-2xl"
          />
          <Image
            src="/brandpic/office/office3_2.jpg"
            alt=""
            width={326}
            height={500}
            className="rounded-2xl"
          />
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            width={326}
            height={500}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
