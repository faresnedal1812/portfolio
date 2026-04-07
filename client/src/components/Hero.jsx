import { useEffect, useState } from "react";
import "./Hero.css";

const roles = [
  "Full-Stack Developer",
  "MERN Stack Developer",
  "Computer Engineer",
  "Mobile Developer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(
        () => setDisplayed(currentRole.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="greeting-line" />
            <span className="greeting-text">Hello, I'm</span>
          </div>
          <h1 className="hero-name">
            Fares <span className="gradient-text">Abu Elawn</span>
          </h1>
          <div className="hero-role">
            <span className="role-prefix">I'm a </span>
            <span className="role-typed">{displayed}</span>
            <span className="role-cursor">|</span>
          </div>
          <p className="hero-description">
            Passionate about building full-stack web applications with the MERN
            stack. I create responsive, high-performance solutions that solve
            real-world problems and deliver exceptional user experiences.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Contact Me
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">90.1%</span>
              <span className="stat-label">GPA Excellent</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-avatar-wrapper">
            <div className="avatar-ring" />
            <div className="avatar-ring ring-2" />
            <div className="hero-avatar">
              <img
                src="/fares.jpg"
                alt="Fares Abu Elawn"
                className="avatar-image"
              />
            </div>
            <div className="floating-badge badge-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div className="floating-badge badge-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </div>
            <div className="floating-badge badge-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
