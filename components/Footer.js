import Link from "next/link";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="flex w-full h-48 tracking-tight dark:bg-ltblack dark:text-offwhite bg-offwhite text-ltblack">
      <div className="flex items-center justify-center w-full mx-8 border-t-2 lg:mx-32 border-cblack ">
        <a
          href="/#"
          className="font-medium text-center transition duration-300 ease-in-out transform md:text-xl text-mybeige font-display hover:text-crimson hover:scale-105"
        >
          © {getCurrentYear()} EMurrell.com
          <p className="p-2 text-sm">-Back to Home-</p>
        </a>
      </div>
    </footer>
  );
}
