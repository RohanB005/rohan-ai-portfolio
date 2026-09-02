import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-status">
            <span className="status-dot"></span>
            <span>SYSTEM ONLINE</span>
          </div>

          <p className="hero-greeting">HELLO, I'M</p>

          <h1 className="hero-name">
            ROHAN
            <span> BARKADE</span>
          </h1>

          <h2 className="hero-title">
            AI-ENABLED SOFTWARE DEVELOPER
          </h2>

          <p className="hero-description">
            I build modern software solutions using Java, Spring Boot,
            React, SQL and AI-powered technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-button primary">
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="/Rohan-Barkade-Resume.pdf"
              className="hero-button secondary"
              download
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          <a href="#about" className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={16} />
          </a>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="hero-orb">
            <div className="orb-ring ring-one"></div>
            <div className="orb-ring ring-two"></div>
            <div className="orb-ring ring-three"></div>

            <div className="orb-core">
              <span>RB</span>
            </div>
          </div>

          <div className="visual-label">
            <span className="visual-line"></span>
            <span>AI SYSTEM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;