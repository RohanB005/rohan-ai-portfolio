import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />

        <section id="projects" className="placeholder-section">
          <h2>Projects</h2>
        </section>

        <section id="contact" className="placeholder-section">
          <h2>Contact</h2>
        </section>
      </main>
    </div>
  );
}

export default App;