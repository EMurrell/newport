import Head from "next/head";
import FadeUp from "./FadeUp";
import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function Work() {
  return (
    <>
      <section
        id="Work"
        className="flex flex-col w-full px-5 pt-4 pb-10 font-bold tracking-tight md:pt-24 bg-offwhite dark:bg-ltblack dark:text-offwhite md:px-8 lg:px-12 text-ltblack font-display"
      >
        <div className="flex border-t-2 border-cblack lg:mx-20">
          <div className="flex justify-center w-1/2 py-6 pl-6 md:pl-2 lg:pl-8 ">
            <FadeUp>
              <h1 className="self-end pt-12 text-5xl font-bold md:text-6xl lg:text-8xl ">
                Work
              </h1>
              <img
                src="se-arrow-grey.png"
                width="80"
                height="auto"
                alt="arrow"
                className="flex justify-center mt-4 ml-12 md:ml-20 lg:ml-40"
              />
            </FadeUp>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row md:justify-evenly">
          <FadeUp>
            <a href="https://www.masonstouch.com">
              <div className="flex flex-col p-2 my-4 cursor-pointer w-80 md:w-96 hover:text-crimson dark:hover:text-crimson">
                <img
                  src="mtc.jpg"
                  alt="masons touch construction"
                  className="transition duration-500 ease-in-out transform hover:scale-105"
                />
                <div className="flex flex-col my-2 text-lg border-t border-b border-cblack dark:border-offwhite md:text-xl lg:text-xl">
                  <h3 className="inline-flex justify-between font-bold">
                    Mason's Touch Construction
                    <ExternalLinkIcon className="h-5 md:h-6" />
                  </h3>
                  <p className="font-light">Website Redesign/Rebuild</p>
                </div>
              </div>
            </a>
          </FadeUp>
          <FadeUp>
            <a href="https://puptopal.netlify.app">
              <div className="flex flex-col p-2 my-4 cursor-pointer w-80 md:w-96 hover:text-crimson dark:hover:text-crimson">
                <img
                  src="ptp.jpg"
                  alt="pup to pal"
                  className="transition duration-500 ease-in-out transform hover:scale-105"
                />
                <div className="flex flex-col my-2 text-lg border-t border-b border-cblack dark:border-offwhite md:text-xl lg:text-xl">
                  <h3 className="inline-flex justify-between font-bold">
                    Pup To Pal <ExternalLinkIcon className="h-5 md:h-6" />
                  </h3>
                  <p className="font-light">Website and Content Creation</p>
                </div>
              </div>
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
