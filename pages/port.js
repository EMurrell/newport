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
        className="w-full px-5 pt-4 tracking-tight font-display bg-offwhite text-ltblack dark:text-offwhite md:pt-8 md:px-12 lg:px-24 2xl:px-32 dark:bg-ltblack"
      >
        <FadeUp>
          <div className="inline-flex justify-between w-full pt-2 mt-2 text-sm border-t-2 border-ltblack dark:border-offwhite md:text-base">
            <p>Professional Portfolio</p>
            <p>Case Study</p>
          </div>
          <div className="flex flex-col">
            <div className="flex pt-12 lg:pt-24">
              <h3 className="pr-16 text-2xl font-medium md:text-2xl lg:text-3xl md:pr-96">
                A portfolio website to showcase my skills and work projects.
              </h3>
            </div>
            <div className="inline-flex justify-center py-4 md:justify-end ">
              <button className="inline-flex px-4 py-1 my-4 font-medium transition duration-300 ease-in-out transform border-2 rounded-sm hover:scale-105 hover:bg-crimson border-ltblack dark:border-offwhite">
                <a
                  className="text-base md:text-lg lg:text-xl "
                  href="https://emurrell.com"
                >
                  VISIT WEBSITE&nbsp;
                </a>
                <ExternalLinkIcon className="h-5 md:h-6" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="pb-6 pr-10 text-xl lg:pb-12 md:w-2/3 md:text-xl lg:text-2xl lg:w-1/2">
                <p className="pb-6 lg:pb-16">
                  <strong>Brief:</strong>
                  <br /> I saught to create a portfolio site that would
                  challenge my skill-levels for both design and development. My
                  approach was to incorporate elements of swiss/international
                  design, minimalism, bold typography, and dark-mode
                  functionality.
                </p>
                <p>
                  <strong>Tools:</strong>
                  <br />
                  Next.js (React), Tailwind CSS / UI, Framer-Motion, Next-themes
                  (dark-mode) Affinity Photo.
                </p>
              </div>
              <div className="flex justify-center rounded lg:justify-end lg:w-1/2 ">
                <a href="https://emurrell.com">
                  <img
                    src="/portfolio-square.jpg"
                    alt="picture of website"
                    width="300"
                    height="auto"
                    className="px-6 py-24 transition duration-300 ease-in-out transform md:p-0 hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
      <Footer />
    </>
  );
}
