import Banner from "@/components/Banner";
import Image from "next/image";

export default function Blog() {
  return (
    <div>
      {/* Banner */}
      <div className="h-96 bg-slate-500">
        <Banner />
        <div className="text-white">Intended Length For banner</div>
      </div>

      {/* About */}
      <div className="flex flex-col items-center bg-white">
        <h1 className="my-6 text-center text-2xl font-semibold text-amber-800">
          About Our Coffee
          <div className="border-b-2 border-solid border-amber-800 my-2 w-[50px] mx-auto"></div>
        </h1>
        <div className="flex justify-between items-center gap-3 mx-6 mb-6">
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            width={200}
            height={400}
          ></Image>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        </div>
        <div className="flex justify-between items-center gap-3 mx-6 mb-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
          <Image
            src="/brandpic/office/office3_3.jpg"
            alt=""
            width={200}
            height={400}
          ></Image>
        </div>
      </div>

      {/* Drinks Menu */}
      <div className="flex flex-col gap-3 bg-yellow-50">
        <div className="flex flex-col items-center">
          <h1 className="my-6 text-center text-2xl font-semibold text-amber-800">
            Explore Our Menu
            <div className="border-b-2 border-solid border-amber-800 my-2 w-[50px] mx-auto"></div>
          </h1>
        </div>
        <div className="px-10">
          <h2 className="text-lg text-amber-800 font-semibold text-left mx-3">
            Coffee - Cacao
            <div className="border-b-2 border-solid border-amber-800 my-2 w-[40px]"></div>
          </h2>
          <div className="text-sm py-3 grid grid-cols-2 gap-24 mx-3">
            <ul className="leading-loose w-[200px] text-red-500 font-semibold">
              <li>ESPRESSO</li>
              <li>MILK ESPRESSO</li>
              <li>AMERICANO</li>
              <li>DEN SAI GON</li>
              <li>SUA SAI GON</li>
              <li>BAC SIU</li>
              <li>CACAO</li>
              <li>SALT COFFEE</li>
              <li>YOURS SPECIAL</li>
              <li>WATER</li>
            </ul>
            <ul className="leading-loose font-semibold w-[100px] text-right">
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
            </ul>
          </div>
        </div>
        <div className="px-10">
          <h2 className="text-lg text-amber-800 font-semibold text-left mx-3">
            Other Drinks
            <div className="border-b-2 border-solid border-amber-800 my-2 w-[40px]"></div>
          </h2>
          <div className="text-sm py-3 grid grid-cols-2 gap-24 mx-3">
            <ul className="leading-loose w-[200px] text-red-500 font-semibold">
              <li>ESPRESSO</li>
              <li>MILK ESPRESSO</li>
              <li>AMERICANO</li>
              <li>DEN SAI GON</li>
              <li>SUA SAI GON</li>
              <li>BAC SIU</li>
              <li>CACAO</li>
              <li>SALT COFFEE</li>
              <li>YOURS SPECIAL</li>
              <li>WATER</li>
            </ul>
            <ul className="leading-loose font-semibold w-[100px] text-right">
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
              <li>1$</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-white my-0">
        <div className="pt-[10px] px-11 ">
          <h1 className="text-2xl text-center text-amber-800 font-semibold my-3">
            Explore Our Gallery
            <div className="border-b-2 border-solid border-amber-800 my-2 w-[50px] mx-auto"></div>
          </h1>
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
