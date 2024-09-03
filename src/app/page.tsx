import Body from "@/components/Body";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Icons from "@/components/Icons";
import Projects from "@/components/Projects";
import "./globals.css";

const Sections: JSX.Element[] = [
  <Body />,
  <Experience />,
  <Projects />,
  <Contact />,
  <Footer />,
];

export default function Home() {
  return (
    <div className="py-12">
      {Sections.map((section: JSX.Element, index: Number) => {
        return (
          <div className="h-screen px-20 flex justify-center">
            <div className="w-11/12">
              {section}
              <Icons />
            </div>
          </div>
        );
      })}
    </div>
  );
}
