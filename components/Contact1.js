import Link from "next/link";
import Head from "next/head";
import FadeUp from "../components/FadeUp";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="flex flex-row w-full bg-ltblack text-offwhite font-display"
    >
      <div>
        <FadeUp>
          <h2 className="w-1/2 px-12 pt-24 pb-2 text-2xl font-bold text-center md:pt-32 md:text-4xl lg:text-5xl">
            Contact
          </h2>
        </FadeUp>
      </div>

      <div className="flex flex-col w-1/2 p-10 pb-24 text-center ">
        <div className="flex-col px-5 py-4 ">
          <FadeUp>
            <h2 className="text-base font-bold transition duration-500 ease-in-out transform md:text-lg lg:text-2xl hover:text-orange hover:-translate-y-1 hover:scale-110">
              <a href="mailto:emurrell.dev@gmail.com">EMAIL</a>
            </h2>
            <p className="text-sm font-bold md:text-sm lg:text-lg ">
              emurrell.dev@gmail.com
            </p>
          </FadeUp>
        </div>
        <div className="flex-col px-5 py-4 text-base font-bold ">
          <FadeUp>
            <h2 className="text-base font-bold transition duration-500 ease-in-out transform md:text-lg lg:text-2xl hover:text-orange hover:-translate-y-1 hover:scale-110">
              <a href="https://github.com/EMurrell">GITHUB</a>
            </h2>
            <p className="text-sm font-bold tracking-wide md:text-sm lg:text-lg ">
              github.com/EMurrell
            </p>
          </FadeUp>
        </div>
        <div className="flex-col px-5 py-4 text-base font-bold tracking-wide ">
          <FadeUp>
            <h2 className="text-base font-bold transition duration-500 ease-in-out transform hover:text-orange md:text-lg lg:text-2xl hover:text-myblue hover:-translate-y-1 hover:scale-110">
              <a href="https://twitter.com/MurrellWeb">TWITTER</a>
            </h2>
            <p className="text-sm font-bold md:text-sm lg:text-lg ">
              twitter.com/MurrellWeb
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
