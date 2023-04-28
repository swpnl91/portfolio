import React from "react";
import Hero from "../components/Hero";
import About1 from "../components/About1";
import About2 from "../components/About2";
import About3 from "../components/About3";
import Projects from "../components/Projects";
import Contact from "../components/Contact";



const Home = () => {
  return (
    <>
      <Hero />
      <About1 />
      <About2 />
      <About3 />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;