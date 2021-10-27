import Head from "next/head";
import FadeUp from "./FadeUp";
import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import ProjectCard from "../components/ProjectCard";

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
              <h1 className="self-end pt-6 text-5xl font-bold md:pt-12 md:text-6xl lg:text-8xl ">
                Work
              </h1>
              <img
                src="/se-arrow-grey.png"
                width="80"
                height="auto"
                alt="arrow"
                className="flex justify-center mt-4 ml-12 md:ml-20 lg:ml-40"
              />
            </FadeUp>
          </div>
        </div>

        <div className="flex flex-col flex-wrap md:justify-evenly md:flex-row lg:mx-10">
          <ProjectCard />
        </div>
      </section>
    </>
  );
}
