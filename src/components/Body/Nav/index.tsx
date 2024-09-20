import { navItemProps } from "@/common/types";
// import { NavLinks } from "@/utils/constants";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between items-center pt-10">
      <Link href="/" className="text-2xl font-bold text-black">
        Syaam Khandaker
      </Link>
      {/* <div className="md:flex justify-center items-center gap-10 hidden">
        {NavLinks.map((navItem: navItemProps) => {
          return (
            <Link
              key={navItem.value}
              href={navItem.link}
              className="relative inline-block"
            >
              {navItem.value}
              <span className="absolute inset-0 border-transparent border-b-2 hover:border-black border-width-0.6s linear"></span>
            </Link>
          );
        })}
      </div> */}
      <Link
        href={"resume.pdf"}
        target="_blank"
        className="py-4 px-6 bg-secondary rounded-xl text-white font-bold text-2xl shadow-md transition duration-100 ease-linear hover:scale-110"
      >
        Resume
      </Link>
    </div>
  );
}
