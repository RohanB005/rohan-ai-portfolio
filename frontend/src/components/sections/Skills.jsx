import {
  Code2,
  Database,
  Cloud,
  Layers3,
  GitBranch,
  Container,
  Server,
  Braces,
} from "lucide-react";
import { motion } from "framer-motion";
import "./Skills.css";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "C++", level: "Intermediate" },
      { name: "C#", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
    ],
  },
  {
    title: "Frontend",
    icon: Layers3,
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "Responsive UI", level: "Intermediate" },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Spring Boot", level: "Intermediate" },
      { name: ".NET", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Cloud",
    icon: Cloud,
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "AWS", level: "Intermediate" },
      { name: "Maven", level: "Intermediate" },
    ],
  },
];

const techIcons = [
  { name: "Java", icon: Braces },
  { name: "Spring Boot", icon: Server },
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Container },
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">02 / CAPABILITIES</span>

          <h2>
            Technical <span>Skills</span>
          </h2>

          <p>
            Technologies and tools I use to design, build and
            deploy software solutions.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                className="skill-category"
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3>{category.title}</h3>
                    <span>
                      {String(category.skills.length).padStart(2, "0")}{" "}
                      technologies
                    </span>
                  </div>
                </div>

                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <span className="skill-name">{skill.name}</span>

                      <span className="skill-level">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="tech-strip"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="tech-strip-label">CORE STACK</span>

          <div className="tech-strip-items">
            {techIcons.map((tech) => {
              const Icon = tech.icon;

              return (
                <div className="tech-item" key={tech.name}>
                  <Icon size={17} />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;