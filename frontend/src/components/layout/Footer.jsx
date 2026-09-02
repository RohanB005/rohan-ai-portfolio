import { ArrowUp, GitBranch } from "lucide-react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span>&lt;</span>
              RB
              <span>/&gt;</span>
            </a>

            <p>
              AI-enabled software developer building modern applications
              with Java, Spring Boot, React and AI technologies.
            </p>
          </div>

          <div className="footer-links">
            <span className="footer-label">CONNECT</span>

            <div className="footer-socials">
              <a
                href="https://github.com/RohanB005"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitBranch size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/rohanbarkade"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <GitBranch size={18} />
              </a>
            </div>
          </div>

          <a href="#home" className="footer-top-button">
            <span>BACK TO TOP</span>
            <ArrowUp size={16} />
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} Rohan Barkade</span>

          <span className="footer-status">
            <span className="footer-status-dot"></span>
            SYSTEM ONLINE
          </span>

          <span>BUILT WITH REACT</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;