import Banner from "@/components/Banner";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/*Banner*/}
      <div>
        <Banner />
      </div>

      {/*Workspace*/}
      <div>
        <div className="mt-[30px] mb-[25px] text-2xl">
          <h1 className="text-center my-5 text-2xl font-semibold text-accent p-3">
            OUR WORKSPACE
            <div className="border-b-2 border-solid border-accent my-2 w-[50px] mx-auto"></div>
          </h1>
          <p className="text-center text-sm mx-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            animi enim sed at tempore aut sapiente.
          </p>
        </div>
        {/*Workspace services*/}
        <div className="bg-green-100">
          <h1 className="text-center text-2xl text-green-600 font-semibold p-3 my-9">
            OUR SERVICES
            <div className="border-b-2 border-solid border-green-600 my-2 w-[50px] mx-auto"></div>
          </h1>
          <div className="flex flex-col items-center sm:flex-row mx-2">
            <div className="h-[268px] xl:w[268px] p-4">
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 59 59"
                  style={{ width: "100px", height: "100px" }}
                >
                  <g>
                    <path d="M10.407,1.707c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0c-11.307,11.307-11.307,29.705,0,41.012 C9.189,41.5,9.445,41.598,9.7,41.598s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 C-0.12,29.363-0.12,12.234,10.407,1.707z"></path>
                    <path d="M50.005,0.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c5.092,5.091,7.896,11.871,7.896,19.092 S53.683,34.8,48.591,39.891c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 c5.47-5.469,8.481-12.751,8.481-20.506S55.475,5.762,50.005,0.293z"></path>
                    <path d="M14.651,5.949c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0c-8.968,8.968-8.968,23.56,0,32.527 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 C6.463,27.46,6.463,14.138,14.651,5.949z"></path>
                    <path d="M45.763,4.535c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c8.188,8.188,8.188,21.511,0,29.699 c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 C54.731,28.095,54.731,13.503,45.763,4.535z"></path>
                    <path d="M18.893,8.778c-0.391-0.391-1.023-0.391-1.414,0c-3.206,3.206-4.972,7.475-4.972,12.021s1.766,8.814,4.972,12.021 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 c-5.849-5.849-5.849-15.364,0-21.213C19.283,9.802,19.283,9.169,18.893,8.778z"></path>
                    <path d="M41.521,8.778c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c5.849,5.849,5.849,15.364,0,21.213 c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 c3.206-3.206,4.972-7.475,4.972-12.021S44.727,11.984,41.521,8.778z"></path>
                    <path d="M29.499,14c-3.859,0-7,3.141-7,7c0,3.519,2.614,6.432,6,6.92V58c0,0.553,0.447,1,1,1s1-0.447,1-1V27.92 c3.386-0.488,6-3.401,6-6.92C36.499,17.141,33.359,14,29.499,14z M29.499,26c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S32.256,26,29.499,26z"></path>
                  </g>
                </svg>
              </div>
              <div className="mt-8">
                <h1>Services 1</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
              </div>
            </div>
            <div className="h-[268px] xl:w[268px] p-4">
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 59 59"
                  style={{ width: "100px", height: "100px" }}
                >
                  <g>
                    <path d="M10.407,1.707c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0c-11.307,11.307-11.307,29.705,0,41.012 C9.189,41.5,9.445,41.598,9.7,41.598s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 C-0.12,29.363-0.12,12.234,10.407,1.707z"></path>
                    <path d="M50.005,0.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c5.092,5.091,7.896,11.871,7.896,19.092 S53.683,34.8,48.591,39.891c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 c5.47-5.469,8.481-12.751,8.481-20.506S55.475,5.762,50.005,0.293z"></path>
                    <path d="M14.651,5.949c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0c-8.968,8.968-8.968,23.56,0,32.527 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 C6.463,27.46,6.463,14.138,14.651,5.949z"></path>
                    <path d="M45.763,4.535c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c8.188,8.188,8.188,21.511,0,29.699 c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 C54.731,28.095,54.731,13.503,45.763,4.535z"></path>
                    <path d="M18.893,8.778c-0.391-0.391-1.023-0.391-1.414,0c-3.206,3.206-4.972,7.475-4.972,12.021s1.766,8.814,4.972,12.021 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 c-5.849-5.849-5.849-15.364,0-21.213C19.283,9.802,19.283,9.169,18.893,8.778z"></path>
                    <path d="M41.521,8.778c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c5.849,5.849,5.849,15.364,0,21.213 c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 c3.206-3.206,4.972-7.475,4.972-12.021S44.727,11.984,41.521,8.778z"></path>
                    <path d="M29.499,14c-3.859,0-7,3.141-7,7c0,3.519,2.614,6.432,6,6.92V58c0,0.553,0.447,1,1,1s1-0.447,1-1V27.92 c3.386-0.488,6-3.401,6-6.92C36.499,17.141,33.359,14,29.499,14z M29.499,26c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S32.256,26,29.499,26z"></path>
                  </g>
                </svg>
              </div>
              <div className="mt-8">
                <h1>Services 1</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
              </div>
            </div>
            <div className="h-[268px] xl:w[268px] p-4">
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 59 59"
                  style={{ width: "100px", height: "100px" }}
                >
                  <g>
                    <path d="M10.407,1.707c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0c-11.307,11.307-11.307,29.705,0,41.012 C9.189,41.5,9.445,41.598,9.7,41.598s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 C-0.12,29.363-0.12,12.234,10.407,1.707z"></path>
                    <path d="M50.005,0.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c5.092,5.091,7.896,11.871,7.896,19.092 S53.683,34.8,48.591,39.891c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 c5.47-5.469,8.481-12.751,8.481-20.506S55.475,5.762,50.005,0.293z"></path>
                    <path d="M14.651,5.949c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0c-8.968,8.968-8.968,23.56,0,32.527 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 C6.463,27.46,6.463,14.138,14.651,5.949z"></path>
                    <path d="M45.763,4.535c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c8.188,8.188,8.188,21.511,0,29.699 c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 C54.731,28.095,54.731,13.503,45.763,4.535z"></path>
                    <path d="M18.893,8.778c-0.391-0.391-1.023-0.391-1.414,0c-3.206,3.206-4.972,7.475-4.972,12.021s1.766,8.814,4.972,12.021 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 c-5.849-5.849-5.849-15.364,0-21.213C19.283,9.802,19.283,9.169,18.893,8.778z"></path>
                    <path d="M41.521,8.778c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c5.849,5.849,5.849,15.364,0,21.213 c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 c3.206-3.206,4.972-7.475,4.972-12.021S44.727,11.984,41.521,8.778z"></path>
                    <path d="M29.499,14c-3.859,0-7,3.141-7,7c0,3.519,2.614,6.432,6,6.92V58c0,0.553,0.447,1,1,1s1-0.447,1-1V27.92 c3.386-0.488,6-3.401,6-6.92C36.499,17.141,33.359,14,29.499,14z M29.499,26c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S32.256,26,29.499,26z"></path>
                  </g>
                </svg>
              </div>
              <div className="mt-8">
                <h1>Services 1</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Preview of space*/}
        <div>
          <div>
            <p className="mt-8 text-[1.05rem] text-center font-semibold text-green-500">TAKE A PEAK</p>
            <h1 className="text-center text-2xl text-green-800 my-2 font-semibold  p-3">
              Find a space that's is right for you
              {/* <div className="border-b-2 border-solid border-green-600 my-2 w-[100px] mx-auto"></div> */}
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="border-2 border-solid border-slate-200 mx-6 mb-6 sm:mx-0 h-[512px] rounded-2xl flex flex-col sm:w-[431px]">
              <div className="h-[296px] bg-slate-500 rounded-t-2xl"></div>
              <div className="h-[216px] rounded-b-2xl p-7">
                <h1 className="text-2xl">
                  <b>Coworking space</b>
                </h1>
                <p className="mt-9 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="border-2 border-solid border-slate-200 mx-6 mb-6 sm:mx-0 h-[512px] rounded-2xl flex flex-col sm:w-[431px]">
              <div className="h-[296px] bg-slate-500 rounded-t-2xl"></div>
              <div className="h-[216px] rounded-b-2xl p-7">
                <h1 className="text-2xl">
                  <b>Coworking space</b>
                </h1>
                <p className="mt-9 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="border-2 border-solid border-slate-200 mx-6 mb-6 sm:mx-0 h-[512px] rounded-2xl flex flex-col sm:w-[431px]">
              <div className="h-[296px] bg-slate-500 rounded-t-2xl"></div>
              <div className="h-[216px] rounded-b-2xl p-7">
                <h1 className="text-2xl">
                  <b>Coworking space</b>
                </h1>
                <p className="mt-9">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="border-2 border-solid border-slate-200 mx-6 mb-6 sm:mx-0 h-[512px] rounded-2xl flex flex-col sm:w-[431px]">
              <div className="h-[296px] bg-slate-500 rounded-t-2xl"></div>
              <div className="h-[216px] rounded-b-2xl p-7">
                <h1 className="text-2xl">
                  <b>Coworking space</b>
                </h1>
                <p className="mt-9">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Workspace Page link */}
        <div className="text-center my-7">
          <Button className="mx-auto rounded-full px-6 bg-accent font-semibold text-white hover:bg-slate-500 hover:text-white">
            <Link
              href="/Workspace"
            >
              Learn More
            </Link>
          </Button>
        </div>
      </div>

      {/*Coffee*/}
      <div className="bg-yellow-100">
        <div className="h-[210px] marker:relative">
          <div className="absolute w-full px-10">
            <h1 className="text-2xl text-amber-800 text-center p-3 font-semibold my-6">
              Our Coffee Experience
              <div className="border-b-2 border-solid border-amber-800 my-2 w-[50px] mx-auto"></div>
            </h1>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla
              aliquam totam, quis at sapiente ea! vero labore, amet earum.
            </p>
          </div>
        </div>
        {/* Offer */}
        <div className="bg-white">
          <div>
            <h1 className=" text-amber-800 font-semibold text-center p-3 text-2xl mb-6">
              Our Offer
              <div className="border-b-2 border-solid border-amber-800 my-2 w-[50px] mx-auto"></div>
            </h1>
          </div>
          <div className="sm:flex items-center justify-between px-10 pt-3">
            <div className="h-[300px] sm:w-[400px] flex flex-col items-center m-3">
              <Image
                src="/brandpic/coffee/coffe1.png"
                alt="Exotic"
                width={114}
                height={114}
                className="border-b-2 border-solid border-amber-800 px-4 m-2"
              />
              <h1 className="text-xl my-3">Exotic coffee</h1>
              <p className="text-center text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
                sed dolorem culpa neque incidunt facilis adipisci beatae.
              </p>
            </div>
            <div className="h-[300px] sm:w-[400px] flex flex-col items-center m-3">
              <Image
                src="/brandpic/coffee/coffe1.png"
                alt="Variety"
                width={114}
                height={114}
                className="border-b-2 border-solid border-amber-800 px-4 m-2"
              />
              <h1 className="text-xl my-3">Exotic coffee</h1>
              <p className="text-center text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
                sed dolorem culpa neque incidunt facilis adipisci beatae.
              </p>
            </div>
            <div className="h-[300px] sm:w-[400px] flex flex-col items-center m-3">
              <Image
                src="/brandpic/coffee/coffe1.png"
                alt="Pleasent Abient"
                width={114}
                height={114}
                className="border-b-2 border-solid border-amber-800 px-4 m-2"
              />
              <h1 className="text-xl my-3">Exotic coffee</h1>
              <p className="text-center text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
                sed dolorem culpa neque incidunt facilis adipisci beatae.
              </p>
            </div>
          </div>
        </div>

        {/* Specialty */}
        <div className="bg-yellow-100 p-3">
          <div>
            <h1 className="text-center text-2xl font-semibold text-amber-900 p-3 mb-6">
              Our Specialty
              <div className="border-b-2 border-solid border-amber-800 my-2 w-[50px] mx-auto"></div>
            </h1>
          </div>
          <div className="">
            <div className="flex flex-col justify-between items-center gap-10 md:flex-row md:gap-2">
              <div className="w-[280px] h-[360px] bg-amber-200">
                <div className="h-[280px] w-[280px] bg-slate-200"></div>
                <div className="p-3">
                  <h1>Coffee 1</h1>
                  <p className="text-right">5$</p>
                </div>
              </div>
              <div className="w-[280px] h-[360px] bg-amber-200">
                <div className="h-[280px] w-[280px] bg-slate-200"></div>
                <div className="p-3">
                  <h1>Coffee 1</h1>
                  <p className="text-right">5$</p>
                </div>
              </div>
              <div className="w-[280px] h-[360px] bg-amber-200">
                <div className="h-[280px] w-[280px] bg-slate-200"></div>
                <div className="p-3">
                  <h1>Coffee 1</h1>
                  <p className="text-right">5$</p>
                </div>
              </div>
            </div>
          </div>
          {/* Coffee Page Link */}
          <div className="text-center my-6">
            <Button className="font-semibold mx-auto rounded-full px-6 text-white bg-amber-800 hover:bg-white hover:text-amber-800">
              <Link href="/Coffee">Learn About our Menu</Link>
            </Button>
          </div>
        </div>
      </div>

      {/*Blog Link*/}
      <div className="h-[200px] bg-orange-400 text-center flex flex-col items-center gap-5">
        <p className="text-xl font-semibold">
          Want fresh Content?
          <br /> Click here <span className="text-3xl">&darr;</span>
        </p>
        <Button className="font-semibold mx-auto rounded-full px-6 bg-white text-orange-900 hover:bg-slate-500 hover:text-white">
          <Link href="/Blog">Read Our Blog</Link>
        </Button>
      </div>
    </div>
  );
}
