import Head from "next/head";
import FadeUp from "./FadeUp";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="About"
      className="flex flex-row w-full p-4 px-8 tracking-tight 2xl:px-32 bg-offwhite font-display lg:px-28 dark:bg-ltblack text-ltblack dark:text-offwhite "
    >
      <div className="flex w-full border-t-2 border-cblack ">
        <div className="flex flex-col w-1/2">
          <h1 className="self-center pt-12 text-5xl font-bold md:pt-24 md:text-6xl lg:text-8xl ">
            <FadeUp>Stack</FadeUp>
          </h1>

          <div className="flex justify-center mt-4 ml-16 md:ml-24 lg:ml-48">
            <FadeUp>
              <img
                src="/se-arrow-grey.png"
                width="80"
                height="auto"
                alt="arrow"
              />
            </FadeUp>
          </div>
          <div className="flex justify-center pt-24 mt-4 ml-8 md:ml-24 lg:ml-36">
            <FadeUp>
              <button className="p-2 font-semibold border-2 rounded-sm hover:bg-crimson border-ltblack dark:border-offwhite md:text-lg lg:text-xl">
                <a href="#Contact">Contact Me</a>
              </button>
            </FadeUp>
          </div>
        </div>

        <div className="flex flex-col justify-center w-1/2 pt-32 lg:pt-80 lg:pr-24 lg:flex-row lg:justify-around lg:text-xl">
          <div className="flex font-bold ">
            <FadeUp>
              <ul className="py-2 ml-4 border-b-2 border-cblack dark:border-cblack">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>

              <ul className="py-2 ml-4 border-b-2 border-cblack dark:border-cblack lg:border-0">
                <li>React</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
              </ul>
            </FadeUp>
          </div>
          <div className="flex font-bold ">
            <FadeUp>
              <ul className="py-2 ml-4 border-b-2 border-cblack dark:border-cblack">
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Github</li>
              </ul>
              <ul className="py-2 ml-4 ">
                <li>VSCode</li>
                <li>Affinity Photo</li>
                <li>Procreate</li>
              </ul>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
