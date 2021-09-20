import Link from "next/link";
import Head from "next/head";
import Meta from "../components/Meta";
import FadeUp from "../components/FadeUp";

export default function Ptp() {
  return (
    <>
      <Meta />
      <section
        id="ptp"
        className="w-full h-screen px-5 pt-4 bg-offwhite text-ltblack dark:text-offwhite md:pt-8 md:px-12 lg:px-24 2xl:px-32 dark:bg-ltblack"
      >
        <div className="inline-flex justify-between w-full pt-2 mt-2 border-t-2 border-ltblack dark:border-offwhite md:text-lg lg:text-xl">
          <p>Pup To Pal</p>
          <p>Case Study</p>
        </div>
      </section>
    </>
  );
}
