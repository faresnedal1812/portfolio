import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Voice of Gaza",
    category: "fullstack",
    description:
      "A MERN Stack application to amplify unheard voices and deliver the message of the people of Gaza. Users can publish posts, engage in discussions, and explore categorized content.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://voice-of-gaza-yf8z.onrender.com",
    githubUrl: "https://github.com/faresnedal1812",
    color: "#4f8fff",
  },
  {
    title: "E-Commerce",
    category: "fullstack",
    description:
      "Full-stack e-commerce platform with user authentication, product management, shopping cart, order processing, and responsive UI built with the MERN stack.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://e-commerce-w0kh.onrender.com",
    githubUrl: "https://github.com/faresnedal1812",
    color: "#8b5cf6",
  },
  {
    title: "Authora",
    category: "fullstack",
    description:
      "Full-stack web app focused on advanced authentication — email verification, automated welcome emails, secure password reset, and protected user flows.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    liveUrl: "https://authora.onrender.com",
    githubUrl: "https://github.com/faresnedal1812",
    color: "#06d6a0",
  },
  {
    title: "Chat-Zone",
    category: "fullstack",
    description:
      "Real-time chat application using Socket.IO for instant bidirectional communication and Zustand for global state management. Supports live messaging and active user sessions.",
    tags: ["React", "Socket.IO", "Zustand", "Node.js"],
    liveUrl: "https://chat-zone-nkan9.sevalla.app/",
    githubUrl: "https://github.com/faresnedal1812",
    color: "#f472b6",
  },
  {
    title: "Real-Estate",
    category: "fullstack",
    description:
      "Full-stack real estate platform with React, Vite, and Tailwind CSS. Browse property listings, view detailed information, and interact with a responsive, high-performance UI.",
    tags: ["React", "Vite", "Tailwind", "Node.js"],
    liveUrl: null,
    githubUrl: "https://github.com/faresnedal1812/real-estate",
    color: "#4f8fff",
  },
  {
    title: "Talent-Meet",
    category: "fullstack",
    description:
      "Modern full-stack technical interview platform. Interactive coding assessments powered by Monaco Editor, event-driven background workflows with Inngest, and scalable MongoDB backend.",
    tags: ["React", "Monaco Editor", "Inngest", "MongoDB"],
    liveUrl: "https://talent-meet-n1ea.onrender.com",
    githubUrl: "https://github.com/faresnedal1812",
    color: "#8b5cf6",
  },
  {
    title: "Hospital Bot",
    category: "backend",
    description:
      "WhatsApp automation bot for hospital departments — manages daily statistics, automates responses, and displays department-level analytics through a conversational interface.",
    tags: ["Node.js", "WhatsApp API", "Automation"],
    liveUrl: null,
    githubUrl: "https://github.com/faresnedal1812/hospital-bot",
    color: "#06d6a0",
  },
  {
    title: "X Clone RN",
    category: "mobile",
    description:
      "Mobile social media app inspired by X (Twitter), built with React Native. Users can authenticate, create posts, interact through likes and comments, and browse a dynamic feed.",
    tags: ["React Native", "Mobile", "REST API"],
    liveUrl: null,
    githubUrl: "https://github.com/faresnedal1812/x-clone-rn",
    color: "#f472b6",
  },
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Full Stack" },
  { key: "backend", label: "Backend" },
  { key: "mobile", label: "Mobile" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">My work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of applications I've designed and developed
          </p>
        </div>

        <div className="project-filters reveal">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              className={`filter-btn ${activeFilter === key ? "active" : ""}`}
              onClick={() => setActiveFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.title}
              className="project-card glass-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div
                className="project-card-top"
                style={{
                  background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                }}
              >
                <div className="project-icon" style={{ color: project.color }}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
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
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
