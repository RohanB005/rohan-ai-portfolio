import {
  Mail,
  MapPin,
  GitBranch,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "rohanbarkade20@gmail.com",
      href: "mailto:rohanbarkade20@gmail.com",
    },
    {
      icon: GitBranch,
      label: "LINKEDIN",
      value: "linkedin.com/in/rohanbarkade",
      href: "https://www.linkedin.com/in/rohanbarkade",
    },
    {
      icon: GitBranch,
      label: "GITHUB",
      value: "github.com/RohanB005",
      href: "https://github.com/RohanB005",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Pune, Maharashtra, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">04 / CONTACT</span>

          <h2>
            Let&apos;s build something{" "}
            <span>great.</span>
          </h2>

          <p>
            Have an opportunity, project or idea? Feel free to get in touch.
            I&apos;m always interested in discussing software development and
            technology.
          </p>
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-status">
              <span className="contact-status-dot"></span>
              <span>COMMUNICATION CHANNEL READY</span>
            </div>

            <h3>Connect with me</h3>

            <p className="contact-intro">
              I&apos;m open to software development opportunities,
              collaborations and interesting technical projects.
            </p>

            <div className="contact-list">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="contact-item"
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                  >
                    <div className="contact-icon">
                      <Icon size={19} />
                    </div>

                    <div className="contact-item-text">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="contact-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="contact-panel-header">
              <div>
                <span className="panel-label">TRANSMISSION</span>
                <h3>Send a message</h3>
              </div>

              <Send size={20} />
            </div>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">NAME</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">EMAIL</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">SUBJECT</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">MESSAGE</label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                <span>TRANSMIT MESSAGE</span>
                <Send size={17} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

