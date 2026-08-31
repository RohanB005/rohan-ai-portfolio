import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import "./App.css";

function App() {
  return (
    <main className="app">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-greeting">HELLO, I'M</p>

          <h1 className="hero-name">
            ROHAN
            <span> BARKADE</span>
          </h1>

          <h2 className="hero-role">
            AI-ENABLED SOFTWARE DEVELOPER
          </h2>

          <p className="hero-description">
            I build modern software applications using Java, Spring Boot,
            React, .NET and AI technologies.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              View My Work
            </button>

            <button className="secondary-btn">
              Contact Me
            </button>
          </div>
        </div>

        {/* Future 3D / AI visual will go here */}
        <div className="hero-visual">
          <div className="ai-core">
            <div className="ai-ring ring-one"></div>
            <div className="ai-ring ring-two"></div>
            <div className="ai-ring ring-three"></div>

            <div className="ai-center">
              AI
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;