import './About.css';

const aboutDetails = [
  { icon: '👤', label: 'Name', value: 'Fares Nedal Abu Elawn' },
  { icon: '📧', label: 'Email', value: 'nedalfares53@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+972592477978' },
  { icon: '📍', label: 'Location', value: 'Khanyounes, Gaza Strip' },
  { icon: '🎓', label: 'Degree', value: 'B.Sc. Computer Engineering' },
  { icon: '🌐', label: 'Languages', value: 'Arabic, English' },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Get to know me</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate computer engineer dedicated to creating impactful digital solutions
          </p>
        </div>

        <div className="about-content reveal">
          <div className="about-text">
            <p>
              I'm a <strong>Computer Engineer</strong> graduated from the Islamic University of Gaza 
              with an <strong>Excellent grade (90.1%)</strong>. I specialize in building full-stack web 
              applications using the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js).
            </p>
            <p>
              With over <strong>3 years of freelance experience</strong>, I have designed and developed 
              complete web applications, integrating frontend components with backend services, implementing 
              user authentication, file upload, and role-based access control systems. I've deployed 
              applications on cloud platforms like Render and Vercel.
            </p>
            <p>
              Beyond web development, I've volunteered as an <strong>IT specialist</strong> at the 
              Palestine Red Crescent Society, managing hospital networks and patient services. I'm 
              passionate about using technology to make a positive impact in my community.
            </p>
            <div className="about-cta">
              <a href="#contact" className="btn btn-primary">
                Let's Work Together
              </a>
              <a href="#projects" className="btn btn-outline">
                See My Work
              </a>
            </div>
          </div>

          <div className="about-details">
            <div className="details-grid">
              {aboutDetails.map(({ icon, label, value }) => (
                <div key={label} className="detail-card glass-card">
                  <span className="detail-icon">{icon}</span>
                  <div>
                    <span className="detail-label">{label}</span>
                    <span className="detail-value">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
