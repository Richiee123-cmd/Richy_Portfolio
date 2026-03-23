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
        <h2 className="section-title" style={{ color: 'var(--text)' }}>My Tech Stack</h2>

        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr',
          gap: '60px', marginTop: '48px'
        }} className="skills-grid">

          {/* ---- LEFT: Skill Bars ---- */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {skills.map(skill => (
              <div key={skill.name}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', marginBottom: '10px'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600,
                    fontSize: '14px', color: 'var(--text)'
                  }}>{skill.name}</span>
                  <span style={{
                    color: 'var(--accent)', fontFamily: 'var(--font-display)',
                    fontSize: '13px', fontWeight: 700
                  }}>{skill.level}%</span>
                </div>
                <div style={{
                  height: '6px', background: 'var(--bg3)',
                  borderRadius: '4px', overflow: 'hidden',
                  border: '1px solid var(--border)'
                }}>
                  <div style={{
                    height: '100%', width: `${skill.level}%`,
                    background: 'linear-gradient(90deg, var(--accent), #a8e63d)',
                    borderRadius: '4px', transition: 'width 1s ease'
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* ---- RIGHT: Tools + Certifications + UI/UX ---- */}
          <div>

            {/* Tools */}
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '20px', marginBottom: '20px', color: 'var(--text)'
            }}>Tools & Platforms</h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
              {tools.map(tool => (
                <span key={tool} style={{
                  background: 'var(--bg3)', border: '1px solid var(--border)',
                  borderRadius: '50px', padding: '8px 18px',
                  fontFamily: 'var(--font-display)', fontSize: '13px',
                  fontWeight: 600, cursor: 'default', color: 'var(--text)',
                  transition: 'all 0.3s'
                }}
                  onMouseOver={e => {
                    e.target.style.borderColor = 'var(--accent)';
                    e.target.style.color = 'var(--accent)';
                  }}
                  onMouseOut={e => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.07)';
                    e.target.style.color = 'var(--text)';
                  }}
                >{tool}</span>
              ))}
            </div>

            {/* Certifications */}
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '20px', marginBottom: '20px', color: 'var(--text)'
            }}>Certifications</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
              {[
                'Front End Development — CSS (Great Learning)',
                'OOP with Java (Coursera)',
                'Internet of Things — IoT (Ethnotech)',
              ].map(cert => (
                <div key={cert} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  background: 'var(--bg3)', borderRadius: '12px',
                  padding: '14px 18px', border: '1px solid var(--border)'
                }}>
                  <span style={{
                    color: 'var(--accent)', fontSize: '16px',
                    marginTop: '1px', flexShrink: 0
                  }}>✦</span>
                  <span style={{ color: 'var(--text)', fontSize: '14px', lineHeight: 1.5 }}>
                    {cert}
                  </span>
                </div>
              ))}
            </div>

            {/* UI/UX Design */}
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '20px', marginBottom: '20px', color: 'var(--text)'
            }}>UI / UX Design</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {uiux.map(skill => (
                <div key={skill.name}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', marginBottom: '10px'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-display)', fontWeight: 600,
                      fontSize: '14px', color: 'var(--text)'
                    }}>{skill.name}</span>
                    <span style={{
                      color: '#ff6b35', fontFamily: 'var(--font-display)',
                      fontSize: '13px', fontWeight: 700
                    }}>{skill.level}%</span>
                  </div>
                  <div style={{
                    height: '6px', background: 'var(--bg3)',
                    borderRadius: '4px', overflow: 'hidden',
                    border: '1px solid var(--border)'
                  }}>
                    <div style={{
                      height: '100%', width: `${skill.level}%`,
                      background: 'linear-gradient(90deg, #ff6b35, #ffaa00)',
                      borderRadius: '4px', transition: 'width 1s ease'
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* UI/UX Note */}
            <div style={{
              marginTop: '20px', padding: '16px 20px',
              background: 'rgba(255,107,53,0.08)',
              border: '1px solid rgba(255,107,53,0.2)',
              borderRadius: '12px',
              display: 'flex', gap: '12px', alignItems: 'flex-start'
            }}>
              <span style={{ fontSize: '18px', flexShrink: 0 }}>🎨</span>
              <span style={{ color: 'var(--text)', fontSize: '13px', lineHeight: 1.6 }}>
                Passionate about UI/UX design — I enjoy bridging the gap between
                great design and functional code using Figma and Webflow.
              </span>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}