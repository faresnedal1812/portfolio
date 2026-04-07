import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#4f8fff',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'React Native', level: 78 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Vite', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#8b5cf6',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 90 },
      { name: 'MongoDB', level: 88 },
      { name: 'Mongoose', level: 87 },
      { name: 'REST APIs', level: 92 },
      { name: 'Socket.IO', level: 75 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    color: '#06d6a0',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'WordPress', level: 75 },
      { name: 'Microsoft Excel', level: 80 },
      { name: 'Networking (CCNA)', level: 78 },
      { name: 'Data Analysis', level: 72 },
      { name: 'Render / Vercel', level: 82 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What I do best</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, catIdx) => (
            <div key={cat.title} className="skill-category glass-card reveal" style={{ animationDelay: `${catIdx * 0.15}s` }}>
              <div className="skill-category-header">
                <span className="skill-category-icon">{cat.icon}</span>
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>
              <div className="skill-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
