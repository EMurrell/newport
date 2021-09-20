import Head from "next/head";
import FadeUp from "./FadeUp";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <section
        id="Work"
        className="flex flex-col w-full px-5 pt-4 pb-10 font-bold md:pt-24 bg-offwhite dark:bg-ltblack dark:text-offwhite md:px-8 2xl:px-16 text-ltblack font-display"
      >
        <div className="flex mx-4 border-t-2 border-cblack lg:mx-20">
          <div className="flex justify-center w-1/2 py-6 pl-6 md:pl-2 lg:pl-8 ">
            <FadeUp>
              <h1 className="self-end pt-12 text-5xl font-bold md:text-6xl lg:text-8xl ">
                Work
              </h1>
              <img
                src="se-arrow-grey.png"
                width="80"
                height="auto"
                alt="arrow"
                className="flex justify-center mt-4 ml-12 md:ml-20 lg:ml-40"
              />
            </FadeUp>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row md:justify-evenly">
          <FadeUp>
            <Link href="/mtc">
              <div className="flex flex-col p-2 my-4 w-80 md:w-96">
                <img src="mtc.jpg" alt="masons touch construction" />
                <div className="my-2 text-lg border-t border-b border-cblack dark:border-offwhite md:text-xl lg:text-2xl">
                  <h3 className="font-bold">Mason's Touch Construction</h3>
                  <p className="font-light">Website Redesign/Rebuild</p>
                </div>
              </div>
            </Link>
          </FadeUp>
          <FadeUp>
            <Link href="/ptp">
              <div className="flex flex-col p-2 my-4 w-80 md:w-96">
                <img src="ptp.jpg" alt="pup to pal" />
                <div className="my-2 text-lg border-t border-b border-cblack dark:border-offwhite md:text-xl lg:text-2xl">
                  <h3 className="font-bold">Pup To Pal</h3>
                  <p className="font-light">Website and Content Creation</p>
                </div>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
