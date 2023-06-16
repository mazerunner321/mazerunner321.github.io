import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import End from "./Components/End/End";
import Footer from "./Components/Footer/Footer";
import GithubCalender from "./Components/Github/GithubCalender";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <GithubCalender />
      <Contact />
      <Footer />
      <End />
    </div>
  );
}

export default App;
