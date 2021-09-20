import Link from "next/link";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="flex w-full h-28 dark:bg-ltblack dark:text-offwhite bg-offwhite text-ltblack">
      <div className="flex items-center justify-center w-full mx-8 border-t-2 md:mx-28 border-cblack ">
        <a
          href="/#"
          className="font-medium text-center md:text-xl text-mybeige font-display hover:text-cblack"
        >
          © {getCurrentYear()} EMurrell.com
        </a>
      </div>
    </footer>
  );
}
