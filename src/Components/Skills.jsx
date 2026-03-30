const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Express.js', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'JavaScript (ES6+)', level: 88 },
  { name: 'Tailwind CSS', level: 82 },
  { name: 'Next.js', level: 70 },
  { name: 'MySQL', level: 72 },
];

const uiux = [
  { name: 'Figma', level: 78 },
  { name: 'Webflow', level: 72 },
];

const tools = ['Git', 'GitHub', 'Postman', 'VS Code', 'Figma', 'Webflow', 'Angular'];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <p className="section-label">Technical Skills</p>
        <h2 className="section-title" style={{ color: 'var(--text)' }}>
          My Tech Stack
        </h2>

        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '60px',
            marginTop: '48px',
          }}
        >

          {/* LEFT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {skills.map(skill => (
              <div key={skill.name}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px'
                }}>
                  <span style={{ fontSize: '14px', color: 'var(--text)' }}>
                    {skill.name}
                  </span>
                  <span style={{ color: 'var(--accent)', fontSize: '13px' }}>
                    {skill.level}%
                  </span>
                </div>

                <div style={{
                  height: '6px',
                  background: 'var(--bg3)',
                  borderRadius: '4px',
                  border: '1px solid var(--border)'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${skill.level}%`,
                    background: 'linear-gradient(90deg, var(--accent), #a8e63d)',
                    borderRadius: '4px'
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div>

            {/* Tools */}
            <h3 style={titleStyle}>Tools & Platforms</h3>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '40px'
            }}>
              {tools.map(tool => (
                <span key={tool} style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  borderRadius: '50px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  color: 'var(--text)'
                }}>
                  {tool}
                </span>
              ))}
            </div>

            {/* Certifications */}
            <h3 style={titleStyle}>Certifications</h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              marginBottom: '40px'
            }}>
              {[
                'Front End Development — CSS (Great Learning)',
                'OOP with Java (Coursera)',
                'Internet of Things — IoT (Ethnotech)',
              ].map(cert => (
                <div key={cert} style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  borderLeft: '3px solid var(--accent)',
                  borderRadius: '12px',
                  padding: '14px 18px'
                }}>
                  <span style={{ color: 'var(--text)', fontSize: '14px' }}>
                    {cert}
                  </span>
                </div>
              ))}
            </div>

            {/* UI/UX */}
            <h3 style={titleStyle}>UI / UX Design</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {uiux.map(skill => (
                <div key={skill.name}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px'
                  }}>
                    <span style={{ fontSize: '14px', color: 'var(--text)' }}>
                      {skill.name}
                    </span>
                    <span style={{ color: '#ff6b35', fontSize: '13px' }}>
                      {skill.level}%
                    </span>
                  </div>

                  <div style={{
                    height: '6px',
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    borderRadius: '4px'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${skill.level}%`,
                      background: 'linear-gradient(90deg, #ff6b35, #ffaa00)'
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div style={{
              marginTop: '20px',
              padding: '16px 20px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border)',
              borderLeft: '3px solid #ff6b35',
              borderRadius: '12px'
            }}>
              <span style={{ color: 'var(--text)', fontSize: '13px' }}>
                Passionate about UI/UX design — I enjoy bridging the gap between
                great design and functional code using Figma and Webflow.
              </span>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const titleStyle = {
  fontSize: '20px',
  marginBottom: '20px',
  color: 'var(--text)'
};