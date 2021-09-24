import Head from "next/head";
import Meta from "../components/Meta";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Meta />
      <Header />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
