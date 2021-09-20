import Head from "next/head";
import FadeUp from "./FadeUp";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

export default function About() {
  return (
    <>
      <main className="flex flex-col w-full px-5 py-8 md:px-8 lg:px-12 2xl:px-20 bg-ltblack text-offwhite font-display">
        <FadeUp>
          <div className="flex flex-row py-12 border-t ">
            <h1 className="inline-flex text-4xl font-semibold md:pt-12 text-cblack md:text-6xl lg:text-8xl">
              Skills &ensp;
              <img
                className="w-10 h-auto lg:w-24 md:w-16 "
                src="grey-arrow.png"
              />
            </h1>
          </div>
          <div className="flex pb-4 text-xl md:w-3/4 md:text-2xl lg:text-3xl">
            <p>
              HTML \ CSS \ Javascript \ React \ JSX \ Next.js \ TailwindCSS \
              Framer Motion \ Node.js \ MongoDB \ Github \ VSCode \ CLI \
              AffinityPhoto \ Procreate
            </p>
          </div>
        </FadeUp>
      </main>
    </>
  );
}
