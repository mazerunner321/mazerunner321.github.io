import React from "react";
import About from "../Components/About/About";
import GithubCalender from "../Components/Github/GithubCalender";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <GithubCalender />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
