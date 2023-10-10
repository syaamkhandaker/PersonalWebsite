import Body from "@/components/Body";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Icons from "@/components/Icons";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="py-6 flex justify-center">
      <div className="w-11/12">
        <Nav />
        <Body />
        <Experience />
        <Projects />
        <Contact />
        <Icons />
        <Footer />
      </div>
    </div>
  );
}
