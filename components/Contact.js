import Head from "next/head";
import FadeUp from "./FadeUp";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="flex flex-row w-full p-4 py-24 bg-offwhite dark:bg-ltblack font-display lg:px-28 text-ltblack dark:text-offwhite"
    >
      <div className="flex flex-col w-1/2 pl-4 md:pt-6 md:pl-2">
        <h1 className="self-center text-4xl font-bold md:text-5xl lg:text-7xl ">
          <FadeUp>Contact</FadeUp>
        </h1>

        <div className="flex justify-center mt-6 ml-16 md:ml-32 lg:ml-48">
          <FadeUp>
            <img src="se-arrow-grey.png" width="80" height="auto" alt="arrow" />
          </FadeUp>
        </div>
      </div>

      <div className="flex flex-col justify-center w-1/2 font-bold pt-28 md:pl-12 lg:pt-52 lg:text-xl">
        <div className="flex md:pl-12">
          <FadeUp>
            <ul className="py-4 border-b-2 border-cblack ">
              <li className="inline-flex hover:text-crimson">
                <a href="mailto:emurrell.dev@gmail.com">
                  Email&emsp;&emsp;&emsp;&ensp;
                </a>
                <ExternalLinkIcon className="h-5 md:h-6" />
              </li>
              <li className="text-xs font-normal md:text-base">
                emurrell.dev@gmail.com
              </li>
            </ul>

            <ul className="py-4 border-b-2 border-cblack ">
              <li className="inline-flex hover:text-crimson">
                <a href="https://github.com/EMurrell">
                  Github&emsp;&emsp;&emsp;
                </a>
                <ExternalLinkIcon className="h-5 md:h-6" />
              </li>
              <li className="text-xs font-normal md:text-base">
                github.com/EMurrell
              </li>
            </ul>

            <ul className="py-4 ">
              <li className="inline-flex hover:text-crimson">
                <a href="https://twitter.com/MurrellWeb">
                  Twitter&emsp;&emsp;&emsp;
                </a>
                <ExternalLinkIcon className="h-5 md:h-6" />
              </li>
              <li className="text-xs font-normal md:text-base">
                twitter.com/MurrellWeb
              </li>
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
