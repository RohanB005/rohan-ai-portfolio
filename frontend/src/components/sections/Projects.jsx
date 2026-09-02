import { GitBranch, ExternalLink, ShieldCheck, Activity } from "lucide-react";
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Bank Management System",
      subtitle: "Fraud Detection & AI",
      description:
        "A full-stack banking application designed with a microservice-based architecture, featuring secure authentication, account and transaction management, fraud detection and AI-powered assistance.",
      features: [
        "Bank authentication and user management",
        "Account and transaction management",
        "Fraud detection service",
        "AI-powered banking assistance",
        "RESTful microservice architecture",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Java",
        "Spring Boot",
        "ASP.NET",
        "MySQL",
        "Gemini API",
      ],
      icon: ShieldCheck,
      github: "https://github.com/RohanB005",
      demo: "#",
    },

    {
      title: "Predictive Healthcare",
      subtitle: "Analytics using Machine Learning",
      description:
        "A machine learning-based healthcare analytics project focused on predicting health outcomes using patient-related data and comparing multiple classification algorithms.",
      features: [
        "Healthcare data preprocessing",
        "Machine learning model comparison",
        "Random Forest classification",
        "Support Vector Machine",
        "Logistic Regression",
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "Random Forest",
        "SVM",
        "Logistic Regression",
      ],
      icon: Activity,
      github: "https://github.com/RohanB005",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">03 / PROJECTS</span>

          <h2>
            Systems I&apos;ve{" "}
            <span>built.</span>
          </h2>

          <p>
            A selection of projects that demonstrate my experience across
            software development, backend engineering, databases and AI.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                <div className="project-card-top">
                  <div className="project-icon">
                    <Icon size={26} />
                  </div>

                  <div className="project-number">
                    0{index + 1}
                  </div>
                </div>

                <div className="project-title">
                  <h3>{project.title}</h3>
                  <span>{project.subtitle}</span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-features">
                  <span className="project-label">KEY FEATURES</span>

                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-button primary"
                  >
                    <GitBranch size={17} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="project-button secondary"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;

