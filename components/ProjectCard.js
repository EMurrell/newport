import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import FadeUp from "./FadeUp";
import Projects from "../components/Projects";

export default function WorkCard(item) {
  return (
    <>
      {Projects.map((item) => (
        <FadeUp key={item.id}>
          <Link href={item.link}>
            <div className="flex flex-col p-4 my-4 transition duration-300 ease-in-out transform cursor-pointer xl:mx-24 w-80 md:w-96 hover:text-crimson dark:hover:text-crimson hover:scale-105">
              <img src={item.img} alt={item.alt} />
              <div className="flex flex-col my-2 text-lg border-t border-b border-cblack dark:border-offwhite md:text-xl ">
                <h3 className="inline-flex justify-between font-bold">
                  {item.name}
                  <ExternalLinkIcon className="h-6" />
                </h3>
                <p className="font-light">{item.description}</p>
              </div>
            </div>
          </Link>
        </FadeUp>
      ))}
    </>
  );
}
