import './Education.css';

const education = [
  {
    period: '2020 – 2025',
    title: 'Bachelor of Computer Engineering',
    institution: 'Islamic University of Gaza',
    description: 'Graduated with an Excellent grade (GPA: 90.1%). Completed a comprehensive program focused on software development, computer networks, and embedded systems. Developed advanced skills in full-stack web development using the MERN stack.',
    grade: '90.1% — Excellent',
    icon: '🎓',
    color: '#4f8fff',
  },
  {
    period: '2023',
    title: 'CCNA & CCNB Certification',
    institution: 'Gaza Sky Geeks',
    description: 'Completed professional training in CCNA and CCNB Networking. Gained strong knowledge in computer network fundamentals, routing and switching, network configuration, and troubleshooting.',
    grade: 'Certified',
    icon: '📜',
    color: '#8b5cf6',
  },
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">My journey</span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            Academic achievements and professional certifications
          </p>
        </div>

        <div className="education-grid">
          {education.map((edu, idx) => (
            <div key={idx} className="education-card glass-card reveal">
              <div className="edu-icon-wrapper" style={{ background: `${edu.color}15` }}>
                <span className="edu-icon">{edu.icon}</span>
              </div>
              <div className="edu-content">
                <span className="edu-period" style={{ color: edu.color }}>{edu.period}</span>
                <h3 className="edu-title">{edu.title}</h3>
                <span className="edu-institution">{edu.institution}</span>
                <p className="edu-description">{edu.description}</p>
                <div className="edu-grade" style={{ borderColor: `${edu.color}30`, color: edu.color }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  {edu.grade}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
