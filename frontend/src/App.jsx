import Navbar from "./components/layout/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="home" className="placeholder-section">
          <h1>ROHAN BARKADE</h1>
          <p>AI-Enabled Software Developer</p>
        </section>

        <section id="about" className="placeholder-section">
          <h2>About</h2>
        </section>

        <section id="skills" className="placeholder-section">
          <h2>Skills</h2>
        </section>

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