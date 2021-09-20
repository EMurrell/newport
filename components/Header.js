import Head from "next/head";
import FadeUp from "./FadeUp";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Popover } from "@headlessui/react";
import {
  CodeIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";
import { useTheme } from "next-themes";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "offwhite",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "offwhite",
  },
};

const navigation = [
  // { name: "Home", href: "#", current: true },

  { name: "Home", href: "#Home", current: false },
  { name: "About", href: "#About", current: false },
  { name: "Work", href: "#Work", current: false },
  { name: "Contact", href: "#Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <main
      id="Home"
      className="w-full h-screen px-5 pt-4 bg-offwhite text-ltblack dark:text-offwhite md:pt-8 md:px-12 lg:px-24 2xl:px-32 dark:bg-ltblack"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5, duration: 5 }}
        variants={{
          hidden: {
            scale: 1,
            opacity: 0,
            y: -50,
          },
          visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
              delay: 1.8,
              duration: 0.5,
            },
          },
        }}
      >
        <div className="flex flex-row justify-between w-full border-t-2 border-ltblack font-display dark:border-offwhite">
          <div className="flex pt-1 text-xs font-medium md:text-base ">
            ERIC <br /> MURRELL
          </div>
          <button
            className="inline-flex pt-1 mt-2 text-lg border-t-2 border-ltblack dark:border-offwhite hover:text-cblack dark:hover:text-cblack"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            <SunIcon className="w-4 pt-1 md:-mt-4" />
            &nbsp;/&nbsp;
            <MoonIcon className="w-4 pt-1 md:-mt-4" />
          </button>
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button className="inline-flex items-center justify-center hover:text-mybeige focus:outline-none dark:border-offwhite border-ltblack dark:bg-ltblack">
                  <span className="pt-2 mt-2 text-sm font-medium border-t-2 md:text-base border-ltblack font-display dark:border-offwhite dark:hover:text-cblack dark:bg-ltblack">
                    MENU
                  </span>
                </Popover.Button>
                <Popover.Panel
                  className={`${
                    open
                      ? "z-50 opacity-100 fixed inset-0 overflow-hidden"
                      : "opacity-0"
                  } bg-offwhite animate-fade-in-down`}
                >
                  <div className="inset-y-0 flex justify-end pt-4 pr-4 dark:bg-ltblack">
                    <Popover.Button className="inline-flex items-center justify-center hover:text-cblack ">
                      <span className="pt-2 mt-2 font-medium border-t-2 font-display md:mr-20 md:mt-8 dark:border-offwhite border-ltblack">
                        CLOSE
                      </span>
                    </Popover.Button>
                  </div>

                  {/* Open Menu */}
                  <div className="flex flex-col w-full h-screen px-5 pt-16 pb-3 space-y-1 md:px-12 lg:px-24 2xl:px-32 dark:bg-ltblack ">
                    {navigation.map((item) => (
                      <Popover.Button
                        className="mt-24 animate-fade-in-down "
                        onClick={() => (open = false)}
                      >
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-offwhite dark:bg-ltblack  "
                              : "text-ltblack   dark:text-offwhite",
                            " px-3 py-6  text-4xl md:text-5xl font-medium font-display flex hover:text-cblack dark:hover:text-cblack "
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <ChevronLeftIcon className="w-10 h-10" />
                          {item.name}
                          &emsp;/
                          <ChevronRightIcon className="w-10 h-10" />
                        </a>
                      </Popover.Button>
                    ))}
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>
      </motion.div>

      <div className="flex flex-col justify-center w-full h-screen bg-offwhite dark:bg-ltblack">
        <div className="flex self-end pb-6 pr-12 -mt-32 md:-mt-16 ">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-36 h-36"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />

            <motion.path
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 5 }}
          variants={{
            hidden: {
              scale: 1,
              opacity: 0,
              y: 40,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
              transition: {
                delay: 1.2,
                duration: 0.5,
              },
            },
          }}
        >
          <p className="flex pl-1 -mb-8 text-lg font-medium lg:-mb-12 font-display md:text-3xl lg:text-4xl">
            Full Stack
          </p>
          <h1 className="text-6xl font-bold font-display md:text-8xl lg:text-9xl">
            &emsp;&emsp;&ensp;Web
          </h1>

          <h1 className="text-6xl font-bold font-display md:text-8xl lg:text-9xl">
            Developer
          </h1>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 5 }}
          variants={{
            hidden: {
              scale: 1,
              opacity: 0,
              x: 40,
            },
            visible: {
              scale: 1,
              opacity: 1,
              x: 0,
              transition: {
                delay: 2.4,
                duration: 0.5,
              },
            },
          }}
        >
          <div className="flex flex-row pt-16">
            <div className="w-1/2 "></div>

            <div className="flex w-1/2 pr-2 text-sm font-medium tracking-wider md:text-base lg:text-xl font-display md:px-20">
              Hello, my name is Eric. I am a self-taught programmer and design
              enthusiast. <br /> I live in Canada.
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 5 }}
          variants={{
            hidden: {
              scale: 1,
              opacity: 0,
              x: -50,
            },
            visible: {
              scale: 1,
              opacity: 1,
              x: 0,
              transition: {
                delay: 2.4,
                duration: 0.5,
              },
            },
          }}
        >
          <p className="pl-12 mb-12 -ml-16 text-sm text-right -rotate-90 w-36 md:text-sm font-display">
            scroll down
          </p>
        </motion.div>
      </div>
    </main>
  );
}
