import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={handleNavClick}>
          <span className="logo-bracket">&lt;</span>
          <span>RB</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar-link"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar-cta">
          Let's Connect
        </a>

        <button
          className="navbar-menu-button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;