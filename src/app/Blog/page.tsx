import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Blog() {
  return (
    <div>
      {/* Title */}
      <div className="relative flex flex-col items-center justify-center text-center bg-green-800 p-5 h-[267px]">
        <p className="text-sm text-green-200 font-semibold">OUR BLOG</p>
        <h1 className="text-2xl text-white my-10 font-semibold">
          Insights, Tips, And Inspiration
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
      {/* Latest Blog */}
      <div className="px-10 py-32 bg-slate-100">
        <h1 className="text-lg text-green-800 my-5">Latest Post</h1>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col p-2 bg-white rounded-2xl">
            <Image
              src="/brandpic/office/office3_1.jpg"
              alt=""
              width={300}
              height={200}
              className="rounded-2xl mx-auto"
            ></Image>
            <h1 className="mt-3 text-lg">
              Coworking Space Vs Traditional Office: Which Is More Effective?
            </h1>
            <p className="text-[0.8rem] text-accent"> March 2, 2025</p>
            <p className="text-sm my-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
              voluptatem cupiditate quaerat?
            </p>
            <Link href="/post" className="text-green-800 my-2">
              Read More
            </Link>
          </div>
          <div className="flex flex-col p-2 bg-white rounded-2xl">
            <Image
              src="/brandpic/office/office3_1.jpg"
              alt=""
              width={300}
              height={200}
              className="rounded-2xl mx-auto"
            ></Image>
            <h1 className="mt-3 text-lg">
              Coworking Space Vs Traditional Office: Which Is More Effective?
            </h1>
            <p className="text-[0.8rem] text-accent"> March 2, 2025</p>
            <p className="text-sm my-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
              voluptatem cupiditate quaerat?
            </p>
            <Link href="/post" className="text-green-800 my-2">
              Read More
            </Link>
          </div>
        </div>
      </div>
      {/* Feature Blog */}
      <div className="px-10 py-2 bg-slate-100">
        <h1 className="text-lg text-green-800 my-5">Feature Post</h1>
        <div className="flex flex-col items-center gap-5">
          <div className="grid grid-cols-[1fr_1fr] gap-3 h-[250px]">
            <div className="w-[105px] h-[105px]">
              <Image
                src="/brandpic/office/office3_3.jpg"
                alt=""
                height={105}
                width={105}
                className="rounded-2xl"
              ></Image>
            </div>
            <div className="grid grid-rows-[1fr_1fr] w-[200px]">
              <div>
                <h1 className="text-xl">
                  Why Coworking Spaces Are Becoming A Popular Choice For
                  Freelancers
                  <p className="text-[0.8rem] text-accent">March 2, 2025</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </h1>
              </div>
              <div className="mt-4">
                <Link href="/post" className="text-green-800">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr] gap-3 h-[250px]">
            <div className="w-[105px] h-[105px]">
              <Image
                src="/brandpic/office/office3_3.jpg"
                alt=""
                height={105}
                width={105}
                className="rounded-2xl"
              ></Image>
            </div>
            <div className="grid grid-rows-[1fr_1fr] w-[200px]">
              <div>
                <h1 className="text-xl">
                  Why Coworking Spaces Are Becoming A Popular Choice For
                  Freelancers
                  <p className="text-[0.8rem] text-accent">March 2, 2025</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </h1>
              </div>
              <div className="mt-4">
                <Link href="/post" className="text-green-800">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Load More */}
      <div className="p-5 flex justify-center bg-slate-100">
        <Button className="rounded-xl px-6 bg-green-800 text-white mx-auto">
          Load More
        </Button>
      </div>
    </div>
  );
}
