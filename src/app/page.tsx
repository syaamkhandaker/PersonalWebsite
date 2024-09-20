import Body from "@/components/Body";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Icons from "@/components/Icons";
import Projects from "@/components/Projects";
import "./globals.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Link from "next/link";

const Sections: JSX.Element[] = [
  <Body />,
  <Experience />,
  <Projects />,
  <Contact />,
];

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10">
      {Sections.map((section: JSX.Element, index: Number) => {
        return (
          <div className="h-screen flex justify-center relative">
            <div className="w-11/12 px-20">
              {section}
              <Icons />
            </div>
            {index !== Sections.length - 1 ? (
              <div className="absolute bottom-5 flex justify-center hover:cursor-pointer">
                <ArrowDownwardIcon className="" />
              </div>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
}
