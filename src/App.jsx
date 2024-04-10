import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Rubriques from "./Rubriques";
import Skills from "./Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Rubriques />
      <Footer />
    </>
  );
};

export default App;
