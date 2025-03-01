import Banner from "@/components/Banner";
import Link from "next/link";
import Image from "next/image";

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
          <h1 className="text-center mb-7 bg-green-400 p-3">
            <b>Our Workspace</b>
          </h1>
          <p className="text-center text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            animi enim sed at tempore aut sapiente. Fuga enim labore,
            dignissimos ratione nobis magni amet asperiores ipsam consequatur
            porro vitae impedit.
          </p>
        </div>
        {/*Workspace services*/}
        <h1 className="text-center bg-green-400 text-xl font-bold p-3 my-9">
          Our Services
        </h1>
        <div className="h-[810px] sm:h-[270px] sm:flex bg-white">
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
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
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
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
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
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
          </div>
        </div>
        {/*Preview of space*/}
        <div className="h-[2198px] sm:h-[620px]">
          <div>
            <h1 className="text-center text-2xl my-7 font-bold bg-green-400 p-3">
              Find a space that's is right for you
            </h1>
          </div>
          <div className="sm:flex">
            <div className="border-2 border-solid border-slate-100 mx-6 mb-6 sm:mx-0 h-[512px] rounded-2xl flex flex-col sm:w-[431px]">
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
            <div className="border-2 border-solid border-slate-100 mx-6 mb-6 sm:mx-0 h-[512px] rounded-2xl flex flex-col sm:w-[431px]">
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
            <div className="border-2 border-solid border-slate-100 mx-6 mb-6 sm:mx-0 h-[512px] rounded-2xl flex flex-col sm:w-[431px]">
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
            <div className="border-2 border-solid border-slate-100 mx-6 mb-6 sm:mx-0 h-[512px] rounded-2xl flex flex-col sm:w-[431px]">
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
          <Link
            href="/Workspace"
            className="hover:text-accent hover:border-b-2 border-accent pb-1"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/*Coffee*/}
      <div className="bg-yellow-100 h-[2000px] sm:h-[1100px]">
        <div className="h-[210px] marker:relative">
          <div className="absolute w-full">
            <h1 className="text-3xl text-center p-3 bg-amber-900 text-white my-6">
              Our Coffee Experience
            </h1>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla
              aliquam totam, quis at sapiente ea! vero labore, amet earum.
            </p>
          </div>
        </div>
        {/* Offer */}
        <div className="h-[930px] sm:h-[330px]">
          <div>
            <h1 className="bg-amber-900 text-white text-center p-3 text-2xl mb-6">
              Our Offer
            </h1>
          </div>
          <div className="sm:flex items-center justify-between">
            <div className="h-[300px] sm:w-[400px] flex flex-col items-center m-3">
              <Image
                src="/brandpic/coffee/coffe1.png"
                alt="Exotic"
                width={114}
                height={114}
                className="border-b-2 border-solid border-accent px-4 m-2"
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
                className="border-b-2 border-solid border-accent px-4 m-2"
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
                className="border-b-2 border-solid border-accent px-4 m-2"
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
        <div className="h-[800px]">
          <div>
            <h1 className="text-center text-white text-2xl bg-amber-900 p-3 mb-6">
              Our Specialty
            </h1>
          </div>
          <div className="grid grid-rows-2 gap-4 p-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-20 sm:items-center">
            <div className="flex justify-between items-center sm:gap-20">
              <div className="w-[220px] h-[300px] bg-amber-200">
                <div className="h-[220px] w-[220px] bg-slate-200"></div>
                <div className="p-3">
                  <h1>Coffee 1</h1>
                  <p className="text-right">5$</p>
                </div>
              </div>
              <div className="w-[220px] h-[300px] bg-amber-200">
                <div className="h-[220px] w-[220px] bg-slate-200"></div>
                <div className="p-3">
                  <h1>Coffee 1</h1>
                  <p className="text-right">5$</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center sm:gap-20">
              <div className="w-[220px] h-[300px] bg-amber-200">
                <div className="h-[220px] w-[220px] bg-slate-200"></div>
                <div className="p-3">
                  <h1>Coffee 1</h1>
                  <p className="text-right">5$</p>
                </div>
              </div>
              <div className="w-[220px] h-[300px] bg-amber-200">
                <div className="h-[220px] w-[220px] bg-slate-200"></div>
                <div className="p-3">
                  <h1>Coffee 1</h1>
                  <p className="text-right">5$</p>
                </div>
              </div>
            </div>
          </div>
          {/* Coffee Page Link */}
          <div className="text-center mt-10">
            <Link
              href="/Coffee"
              className="hover:text-accent hover:border-b-2 border-accent pb-1"
            >
              Learn About our Menu
            </Link>
          </div>
        </div>
      </div>

      {/*Blog Link*/}
      <div className="h-[200px] bg-orange-400 text-center flex items-center pl-[35%] sm:pl-[45%]">
        <Link href="/Blog" className="hover:text-white hover:border-b-2">
          Want fresh Content?
          <br /> Click here & visit our blog
        </Link>
      </div>
    </div>
  );
}
