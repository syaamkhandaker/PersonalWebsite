import "./App.css";
import Navbar from "./components/Navbar/navbar";
import AboutMe from "./components/AboutMe/aboutme";
import Experience from "./components/Experience/experience";
import Project from "./components/Projects/projects";
import Contactme from "./components/Contact/contactme";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Experience />
      <Project />
      <Contactme />
      <Footer />
    </>
  );
}

export default App;
