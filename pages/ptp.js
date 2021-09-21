import Link from "next/link";
import Head from "next/head";
import Meta from "../components/Meta";
import FadeUp from "../components/FadeUp";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function Ptp() {
  return (
    <>
      <Meta />
      <section
        id="ptp"
        className="w-full h-screen px-5 pt-4 tracking-tight font-display bg-offwhite text-ltblack dark:text-offwhite md:pt-8 md:px-12 lg:px-24 2xl:px-32 dark:bg-ltblack"
      >
        <div className="inline-flex justify-between w-full pt-2 mt-2 text-sm border-t-2 border-ltblack dark:border-offwhite md:text-base">
          <p>Pup To Pal</p>
          <p>Case Study</p>
        </div>
        <div className="flex flex-col">
          <div className="flex w-3/4 pt-12">
            <h1 className="text-2xl md:text-2xl lg:text-3xl">
              Pup To Pal is a dog training business in Ottawa, ON.
            </h1>
          </div>
          <div className="inline-flex justify-end pt-8 pb-8 text-sm md:text-base ">
            <a
              className="hover:text-crimson"
              href="https://puptopal.netlify.app"
            >
              VIEW LIVE SITE &emsp;
            </a>
            <ExternalLinkIcon className="w-4 md:w-6" />
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2"></div>
            <div className="flex justify-center rounded lg:justify-end lg:w-1/2 ">
              <a href="https://puptopal.netlify.app">
                <img
                  src="ptp-square.jpg"
                  width="300"
                  height="auto"
                  className="transition duration-500 ease-in-out transform hover:scale-105 "
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
