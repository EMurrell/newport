import Link from "next/link";
import Head from "next/head";
import Meta from "../components/Meta";
import FadeUp from "../components/FadeUp";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";

export default function Mtc() {
  return (
    <>
      <Meta />
      <section
        id="mtc"
        className="w-full px-5 pt-4 tracking-tight md:h-screen font-display bg-offwhite text-ltblack dark:text-offwhite md:pt-8 md:px-12 lg:px-24 2xl:px-32 dark:bg-ltblack"
      >
        <FadeUp>
          <div className="inline-flex justify-between w-full pt-2 mt-2 text-sm border-t-2 border-ltblack dark:border-offwhite md:text-base">
            <p>UI Components & Starters</p>
            <p>Case Study</p>
          </div>
          <div className="flex flex-col">
            <div className="flex pt-12 lg:pt-24">
              <h3 className="pr-16 text-2xl font-medium md:text-2xl lg:text-3xl md:pr-96">
                A collection of personal projects.
              </h3>
            </div>
            <div className="inline-flex justify-center py-4 md:justify-end "></div>
            <div className="flex flex-col ">
              <div className="pr-10 text-xl lg:w-3/4 md:text-xl lg:text-2xl">
                <p className="pt-8 pb-6 lg:pb-20">
                  <strong>Brief:</strong>
                  <br /> An ongoing project to design and develop UI components
                  for the purpose of contributing to the open-source community
                  as well as expand my web development skills.
                </p>
              </div>
              <div className="pb-6 pr-10 text-xl lg:w-3/4 md:text-xl lg:text-2xl lg:pb-20">
                <p className="py-2">
                  <strong>1. Next.js Single Page Starter</strong>
                  <br /> An unopinionated, minimally-designed website template
                  that is configured with fade-in animations that are triggered
                  on scroll, and a navigation bar with animated sliding
                  side-bar.
                </p>
                <div className="flex flex-col justify-between py-4 md:flex-row">
                  <button className="inline-flex justify-center px-6 py-1 my-4 font-medium transition duration-300 ease-in-out transform border-2 rounded-sm hover:scale-105 hover:bg-crimson border-ltblack dark:border-offwhite">
                    <a
                      className="text-base md:text-lg lg:text-xl "
                      href="https://next-js-singlepage-starter.vercel.app/"
                    >
                      VIEW PREVIEW&emsp;
                    </a>
                    <ExternalLinkIcon className="h-5 md:h-6" />
                  </button>
                  <button className="inline-flex justify-center px-6 py-1 my-4 font-medium transition duration-300 ease-in-out transform border-2 rounded-sm hover:scale-105 hover:bg-crimson border-ltblack dark:border-offwhite">
                    <a
                      className="text-base md:text-lg lg:text-xl "
                      href="https://github.com/EMurrell/next.js-singlepage-starter"
                    >
                      VIEW ON GITHUB&emsp;
                    </a>
                    <ExternalLinkIcon className="h-5 md:h-6 " />
                  </button>
                  <button className="inline-flex justify-center px-6 py-1 my-4 font-medium transition duration-300 ease-in-out transform border-2 rounded-sm hover:scale-105 hover:bg-crimson border-ltblack dark:border-offwhite">
                    <a
                      className="text-base md:text-lg lg:text-xl "
                      href="https://dev.to/emurrell/a-nextjs-starter-configured-with-nav-and-animations-lac"
                    >
                      READ ARTICLE&emsp;
                    </a>
                    <ExternalLinkIcon className="h-5 md:h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
      <Footer />
    </>
  );
}
