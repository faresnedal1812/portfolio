import './Experience.css';

const experiences = [
  {
    period: '2022 – 2025',
    type: 'Freelancer',
    title: 'Full-Stack Developer',
    org: 'Freelance',
    description:
      'Designed and developed complete web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Built RESTful APIs, integrated frontend with backend services, implemented user authentication, file upload, and role-based access control. Deployed on cloud platforms like Render and Vercel while managing version control through Git and GitHub.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs'],
    color: '#4f8fff',
  },
  {
    period: '2023 – 2025',
    type: 'Volunteer',
    title: 'IT Volunteer',
    org: 'Palestine Red Crescent Society',
    description:
      'Worked in the hospital network management department and patient services unit. Managed and maintained the hospital\'s computer network, troubleshot technical issues, and organized patient data to ensure smooth digital operations and service efficiency.',
    tags: ['Networking', 'IT Support', 'Troubleshooting', 'Data Management'],
    color: '#8b5cf6',
  },
  {
    period: '2025',
    type: 'Volunteer',
    title: 'Field Enumerator / Data Collector',
    org: 'ARD EL INSAN',
    description:
      'Collected field data from beneficiaries using paper-based and digital tools within humanitarian programs. Supported beneficiary registration and verification processes, ensured accurate data entry, and maintained strict confidentiality when handling sensitive information.',
    tags: ['Data Collection', 'Field Work', 'Humanitarian Aid'],
    color: '#06d6a0',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Where I've worked</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and contributions
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item reveal">
              <div className="timeline-marker" style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}40` }} />
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div>
                    <span className="timeline-period" style={{ color: exp.color }}>{exp.period}</span>
                    <span className="timeline-type">{exp.type}</span>
                  </div>
                </div>
                <h3 className="timeline-title">{exp.title}</h3>
                <span className="timeline-org">{exp.org}</span>
                <p className="timeline-desc">{exp.description}</p>
                <div className="timeline-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag" style={{ borderColor: `${exp.color}30`, color: exp.color }}>
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

export default Experience;
