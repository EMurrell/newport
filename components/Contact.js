import Head from "next/head";
import FadeUp from "./FadeUp";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import Footer from "./Footer";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="flex flex-row w-full p-4 pt-16 pb-24 snap-y snap-start snap-mandatory bg-offwhite dark:bg-ltblack font-display lg:px-28 text-ltblack dark:text-offwhite"
    >
      <div className="flex flex-col w-1/2 pl-4 md:pt-6 md:pl-2">
        <h1 className="self-center text-4xl font-bold md:text-5xl lg:text-7xl ">
          <FadeUp>Contact</FadeUp>
        </h1>

        <div className="flex justify-center mt-6 ml-16 md:ml-32 lg:ml-48">
          <FadeUp>
            <img
              src="/se-arrow-grey.png"
              width="80"
              height="auto"
              alt="arrow"
            />
          </FadeUp>
        </div>
      </div>

      <div className="flex flex-col justify-center w-1/2 font-bold pt-28 md:pl-12 lg:pt-52 lg:text-2xl">
        <div className="flex md:pl-12">
          <FadeUp>
            <ul className="flex flex-col py-4 border-b-2 border-cblack ">
              <li className="inline-flex justify-between transition duration-300 ease-in-out transform hover:text-crimson hover:scale-105">
                <a href="mailto:emurrell.dev@gmail.com">Email</a>
                <ExternalLinkIcon className="h-5 md:h-6" />
              </li>
              <li className="text-xs font-normal md:text-base ">
                emurrell.dev@gmail.com
              </li>
            </ul>

            <ul className="flex flex-col py-4 border-b-2 border-cblack">
              <li className="inline-flex justify-between transition duration-300 ease-in-out transform hover:text-crimson hover:scale-105">
                <a href="https://github.com/EMurrell">Github</a>
                <ExternalLinkIcon className="h-5 md:h-6" />
              </li>
              <li className="text-xs font-normal md:text-base">
                github.com/EMurrell
              </li>
            </ul>

            <ul className="flex flex-col py-4 border-b-2 border-cblack ">
              <li className="inline-flex justify-between transition duration-300 ease-in-out transform hover:text-crimson hover:scale-105">
                <a href="https://twitter.com/MurrellWeb">Twitter</a>
                <ExternalLinkIcon className="h-5 md:h-6" />
              </li>
              <li className="text-xs font-normal md:text-base">
                twitter.com/MurrellWeb
              </li>
            </ul>
            <ul className="flex flex-col py-4 ">
              <li className="inline-flex justify-between transition duration-300 ease-in-out transform hover:text-crimson hover:scale-105">
                <a href="https://dev.to/emurrell">Dev.to</a>
                <ExternalLinkIcon className="flex h-5 md:h-6 justify-self-end" />
              </li>
              <li className="text-xs font-normal md:text-base">
                dev.to/emurrell
              </li>
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
