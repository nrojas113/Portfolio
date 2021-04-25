import React from "react";
import Nav from "./Nav";
import Cover from "./Main/Cover";
import About from "./Main/About";
import Skills from "./Main/Skills";
import Experience from "./Main/Experience";
import Projects from "./Main/Projects";
import Footer from "./Footer";

const Root = () => {
  return (
    <>
      <Nav />
      <main>
        <Cover />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
};
export default Root;
