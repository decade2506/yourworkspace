import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Workspace() {
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col items-center bg-green-50">
        <div className="mt-[40px] px-11 ">
          <p className="text-sm text-center  text-green-700 font-semibold">
            WORKING SPACE FOR EVERY NEED
          </p>
          <h1 className="text-4xl text-center text-black font-semibold my-5">
            Discover Flexible <br /> And Inspiring <br /> Workspaces
          </h1>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quos
            repudiandae unde ut velit sapiente labore expedita soluta maiores
            deserunt exercitationem aliquam natus quis accusantium, m.
          </p>
        </div>
        <div className="flex justify-center gap-4 my-10">
          <Button className="rounded-full text-white bg-orange-400 px-10 hover:bg-black/80">
            Book Now
          </Button>
          <Button className="rounded-full text-green-500 border-2 border-green-500 bg-white px-10 hover:bg-green-500 hover:text-white">
            More Detail
          </Button>
        </div>
      </div>

      {/* Room & Services */}
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
          <div className="flex flex-col gap-3 text-green-700 absolute bottom-3 left-14">
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
          <div className="flex flex-col gap-3 text-green-700 absolute bottom-3 left-14">
            <div className="h-[100px] w-[290px] rounded-2xl bg-white flex items-center justify-center font-semibold text-3xl">
              5+
            </div>
          </div>
        </div>
      </div>

      {/* Range */}
      <div className="bg-white flex flex-col items-center">
        <div className="mt-[40px] px-11 ">
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

      {/* Our Space */}
      <div className="bg-slate-50 flex flex-col items-center">
        <div className="mt-[40px] px-11 ">
          <p className="text-sm text-center mt-10 pt-6 text-green-700 font-semibold">
            COMFORTABLE WORKSPACES
          </p>
          <h1 className="text-3xl text-center text-black font-semibold my-6">
            Take A Look At Our <br /> Vibrant And Dynamic <br /> Workspaces
          </h1>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quos
            repudiandae unde ut velit sapiente labore expedita soluta maiores
            deserunt exercitationem aliquam natus quis accusantium, m.
          </p>
        </div>
        <div className="w-[326px] h-[530px] rounded-2xl border-2 border-solid my-5 flex flex-col items-center">
          <Image
            src="/brandpic/office/office3_1.jpg"
            alt=""
            width={326}
            height={200}
            className="rounded-t-2xl"
          />
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            width={40}
            height={40}
            className="mt-6 mb-3"
          />
          <h2 className="text-sm text-slate-400">Capacity 10 Person</h2>
          <div className="p-5">
            <h1 className="text-xl mt-6 text-center">
              Executive Private Offices
            </h1>
            <p className="text-sm text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate quod quia mollitia reprehenderit corrupti veniam nemo
              aspernatur adipisci!
            </p>
          </div>
          <div className="border-t-2 border-solid border-stale-300 mx-5 pt-6 flex justify-center items-center gap-5">
            <p>$200/Day</p>
            <Button className="rounded-full text-white bg-green-700 px-10 hover:bg-black/80">
              Book Now
            </Button>
          </div>
        </div>
        <div className="w-[326px] h-[530px] rounded-2xl border-2 border-solid my-5 flex flex-col items-center">
          <Image
            src="/brandpic/office/office3_1.jpg"
            alt=""
            width={326}
            height={200}
            className="rounded-t-2xl"
          />
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            width={40}
            height={40}
            className="mt-6 mb-3"
          />
          <h2 className="text-sm text-slate-400">Capacity 10 Person</h2>
          <div className="p-5">
            <h1 className="text-xl mt-6 text-center">
              Executive Private Offices
            </h1>
            <p className="text-sm text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate quod quia mollitia reprehenderit corrupti veniam nemo
              aspernatur adipisci!
            </p>
          </div>
          <div className="border-t-2 border-solid border-stale-300 mx-5 pt-6 flex justify-center items-center gap-5">
            <p>$200/Day</p>
            <Button className="rounded-full text-white bg-green-700 px-10 hover:bg-black/80">
              Book Now
            </Button>
          </div>
        </div>
        <div className="w-[326px] h-[530px] rounded-2xl border-2 border-solid my-5 flex flex-col items-center">
          <Image
            src="/brandpic/office/office3_1.jpg"
            alt=""
            width={326}
            height={200}
            className="rounded-t-2xl"
          />
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            width={40}
            height={40}
            className="mt-6 mb-3"
          />
          <h2 className="text-sm text-slate-400">Capacity 10 Person</h2>
          <div className="p-5">
            <h1 className="text-xl mt-6 text-center">
              Executive Private Offices
            </h1>
            <p className="text-sm text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate quod quia mollitia reprehenderit corrupti veniam nemo
              aspernatur adipisci!
            </p>
          </div>
          <div className="border-t-2 border-solid border-stale-300 mx-5 pt-6 flex justify-center items-center gap-5">
            <p>$200/Day</p>
            <Button className="rounded-full text-white bg-green-700 px-10 hover:bg-black/80">
              Book Now
            </Button>
          </div>
        </div>
        <div className="w-[326px] h-[530px] rounded-2xl border-2 border-solid my-5 flex flex-col items-center">
          <Image
            src="/brandpic/office/office3_1.jpg"
            alt=""
            width={326}
            height={200}
            className="rounded-t-2xl"
          />
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            width={40}
            height={40}
            className="mt-6 mb-3"
          />
          <h2 className="text-sm text-slate-400">Capacity 10 Person</h2>
          <div className="p-5">
            <h1 className="text-xl mt-6 text-center">
              Executive Private Offices
            </h1>
            <p className="text-sm text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate quod quia mollitia reprehenderit corrupti veniam nemo
              aspernatur adipisci!
            </p>
          </div>
          <div className="border-t-2 border-solid border-stale-300 mx-5 pt-6 flex justify-center items-center gap-5">
            <p>$200/Day</p>
            <Button className="rounded-full text-white bg-green-700 px-10 hover:bg-black/80">
              Book Now
            </Button>
          </div>
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

      {/* Our Facilities */}
      <div className="bg-slate-50 flex flex-col items-center">
        <div className="mt-[40px] px-11 ">
          <p className="text-sm text-center mt-10 pt-6 text-green-700 font-semibold">
            COMFORTABLE WORKSPACES
          </p>
          <h1 className="text-3xl text-center text-black font-semibold my-6">
            Take A Look At Our <br /> Vibrant And Dynamic <br /> Workspaces
          </h1>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quos
            repudiandae unde ut velit sapiente labore expedita soluta maiores
            deserunt exercitationem aliquam natus quis accusantium, m.
          </p>
        </div>
        <div className="flex items-center gap-14">
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            height={150}
            width={150}
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
        <div className="flex items-end">
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            height={105}
            width={105}
            className="rounded-full"
          />
        </div>

        <div className="w-[326px] h-[241px] rounded-2xl bg-white flex flex-col items-center justify-center my-3">
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
        </div>
        <div className="w-[326px] h-[241px] rounded-2xl bg-white flex flex-col items-center justify-center my-3">
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
        </div>
        <div className="w-[326px] h-[241px] rounded-2xl bg-white flex flex-col items-center justify-center my-3">
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
        </div>
        <div className="w-[326px] h-[241px] rounded-2xl bg-white flex flex-col items-center justify-center my-3">
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
        </div>
        <div className="w-[326px] h-[241px] rounded-2xl bg-white flex flex-col items-center justify-center my-3">
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
        </div>
        <div className="w-[326px] h-[241px] rounded-2xl bg-white flex flex-col items-center justify-center my-3">
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
        </div>
      </div>

      {/* Contact */}
      <div></div>
    </div>
  );
}
