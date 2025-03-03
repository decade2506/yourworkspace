import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col items-center bg-green-50">
        <div className="mt-[40px] px-5 ">
          <p className="text-sm text-center  text-green-800 font-semibold">
            COFFEE & WORKING SPACE
          </p>
          <h1 className="text-4xl text-center text-black font-semibold my-5">
            Comfortable Working Space & Amazing Coffee Experience
          </h1>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quos
            repudiandae unde ut velit sapiente labore expedita soluta maiores
            deserunt exercitationem aliquam natus quis accusantium.
          </p>
        </div>
        <div className="flex justify-center gap-4 my-10">
          <Button className="rounded-full text-green-500 border-2 border-green-500 bg-white px-10 hover:bg-green-500 hover:text-white">
            <Link href="/About">More Detail</Link>
          </Button>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white">
        <div className="flex flex-col items-center text-center">
          <ul className="text-lg flex flex-col gap-3 my-10 text-green-600 font-semibold">
            <li>Working space</li>
            <li>Meeting Room</li>
            <li>Event Spaces</li>
            <li>Private Office Room</li>
          </ul>
        </div>
        <div className="relative">
          <div className="flex justify-center my-6">
            <Image
              src="/brandpic/office/office3_3.jpg"
              alt=""
              width={325}
              height={370}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 text-green-700 absolute bottom-3 left-12">
            <Badge className="w-[80px] p-2 bg-white border-2 border-green-500">
              Free Wifi
            </Badge>
            <Badge className="w-[110px] p-2 bg-white border-2 border-green-500">
              Free Parking
            </Badge>
            <Badge className="w-[110px] p-2 bg-white border-2 border-green-500">
              24/7 Access
            </Badge>
            <Badge className="w-[150px] p-2 bg-white border-2 border-green-500">
              Free Coffee Break
            </Badge>
            <Badge className="w-[130px] p-2 bg-white border-2 border-green-500">
              Flexible Hour
            </Badge>
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-center my-6">
            <Image
              src="/brandpic/office/office3_3.jpg"
              alt=""
              width={325}
              height={370}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 text-green-700 absolute bottom-3 left-12">
            <div className="h-[100px] w-[290px] rounded-2xl bg-white flex items-center justify-center font-semibold text-3xl">
              5+
            </div>
          </div>
        </div>
      </div>

      {/* Comfortable */}
      <div className="bg-green-50 flex flex-col items-center">
        <div className="mt-[40px] px-3 ">
          <p className="text-sm text-center  text-green-700 font-semibold">
            COMFORTABLE WORKSPACES
          </p>
          <h1 className="text-3xl text-center text-black font-semibold my-3">
            We Offer A Range Of <br /> Modern And Flexible <br /> Workspaces
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

      {/* Gallery */}
      <div className="bg-white">
        <div className="mt-[40px] px-11 ">
          <p className="text-sm text-center mt-10 pt-6 text-green-700 font-semibold">
            COMFORTABLE SPACES
          </p>
          <h1 className="text-3xl text-center text-black font-semibold my-3">
            Explore Our Spaces
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

      {/* Coffee */}
      <div className="bg-yellow-50 flex flex-col items-center">
        <div className="mt-[40px] px-2 ">
          <p className="text-sm text-center  text-amber-800 font-semibold">
            Amazing Coffee Experience
          </p>
          <h1 className="text-3xl text-center text-black font-semibold my-3">
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
    </div>
  );
}
