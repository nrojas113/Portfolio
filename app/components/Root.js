import React from "react";
import Nav from "./Nav";
import Cover from "./Main/Cover";
import About from "./Main/About";
import Skills from "./Main/Skills";
import Experience from "./Main/Experience";
import Projects from "./Main/Projects";
import Contact from "./Main/Contact";
import Footer from "./Footer";
import "aos/dist/aos.css";

const Root = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Cover />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Root;
