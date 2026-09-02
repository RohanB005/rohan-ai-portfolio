import { Code2, Database, BrainCircuit, Server } from "lucide-react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Software Development",
      text: "Building scalable applications with Java, Spring Boot and .NET.",
    },
    {
      icon: Database,
      title: "Database",
      text: "Working with MySQL, SQL queries, data modelling and persistence.",
    },
    {
      icon: BrainCircuit,
      title: "AI Integration",
      text: "Exploring practical AI and LLM integration in software applications.",
    },
    {
      icon: Server,
      title: "Backend Engineering",
      text: "Developing REST APIs, backend services and microservice-based systems.",
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">01 / ABOUT ME</span>

          <h2>
            Building software with a{" "}
            <span>problem-solving mindset.</span>
          </h2>

          <p>
            A Computer Engineering graduate and PG-DAC developer focused on
            building modern software applications and learning emerging
            technologies.
          </p>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-terminal"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal-header">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="terminal-title">rohan@developer:~</div>
            </div>

            <div className="terminal-body">
              <p>
                <span className="terminal-key">name:</span>
                <span className="terminal-value">Rohan Barkade</span>
              </p>

              <p>
                <span className="terminal-key">role:</span>
                <span className="terminal-value">
                  Software Developer
                </span>
              </p>

              <p>
                <span className="terminal-key">education:</span>
                <span className="terminal-value">
                  BE Computer Engineering
                </span>
              </p>

              <p>
                <span className="terminal-key">specialization:</span>
                <span className="terminal-value">PG-DAC</span>
              </p>

              <p>
                <span className="terminal-key">focus:</span>
                <span className="terminal-value">
                  Java / Spring Boot / React
                </span>
              </p>

              <p>
                <span className="terminal-key">interest:</span>
                <span className="terminal-value">
                  AI + Software Engineering
                </span>
              </p>

              <p>
                <span className="terminal-key">status:</span>
                <span className="terminal-success">
                  Available for opportunities
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              I enjoy turning ideas into practical software solutions and
              continuously improving my development skills through projects
              and hands-on learning.
            </p>

            <p>
              My primary development experience includes Java, Spring Boot,
              React, .NET, SQL and modern development tools. I am particularly
              interested in backend development, APIs, distributed systems
              and AI-powered applications.
            </p>

            <p>
              My goal is to grow as a software engineer while working on
              real-world systems where I can combine strong programming
              fundamentals with modern technologies.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className="highlight-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                  >
                    <div className="highlight-icon">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

