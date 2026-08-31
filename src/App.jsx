import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 
import Skills from "./components/Skills";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <Footer />  
    </>
  );
}

export default App;