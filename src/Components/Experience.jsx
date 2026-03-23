import React from "react";




const experiences = [
  {
    role: 'Full-Stack Web Development Intern',
    company: 'Luminar Technolab',
    location: 'Kochi, India',
    period: 'July 2025 – Feb 2026',
    points: [
      'Hands-on training in MERN stack — MongoDB, Express.js, React.js, Angular, Next.js, Node.js.',
      'Developed responsive UIs with React.js, improving usability across devices by 35%.',
      'Designed RESTful APIs with CRUD operations, reducing manual data handling by 40%.',
      'Applied JWT-based authentication and authorization for secure user access.',
    ],
  },
  {
    role: 'MERN Stack Development Intern',
    company: 'Codelab Systems',
    location: 'Mangalore, India',
    period: 'July 2024 – October 2024',
    points: [
      'Built and optimized RESTful APIs using Node.js and Express.js (30% backend efficiency boost).',
      'Enhanced reusable React.js components to improve UI performance.',
      'Applied complete CRUD functionality using MongoDB.',
      'Collaborated on real-world projects following best practices in Git/GitHub.',
    ],
  },
];

 function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <p className="section-label">My Resume</p>
        <h2 className="section-title">Experience &<br />
          <span style={{ color: 'var(--accent)' }}>Education</span>
        </h2>

        <div style={{ marginTop: '56px', position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: '28px', top: 0, bottom: 0,
            width: '2px', background: 'var(--border)'
          }} />

          {experiences.map((exp, i) => (
            <div key={i} style={{
              paddingLeft: '80px', marginBottom: '56px',
              position: 'relative'
            }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '20px', top: '4px',
                width: '18px', height: '18px', borderRadius: '50%',
                background: 'var(--accent)', boxShadow: '0 0 0 4px rgba(200,255,0,0.2)'
              }} />

              {/* Card */}
              <div style={{
                background: 'var(--bg3)', borderRadius: '16px',
                border: '1px solid var(--border)', padding: '32px 36px'
              }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px',
                  marginBottom: '16px'
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontWeight: 800,
                      fontSize: '20px', marginBottom: '4px'
                    }}>{exp.role}</h3>
                    <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '15px' }}>
                      {exp.company} — {exp.location}
                    </p>
                  </div>
                  <span style={{
                    background: 'var(--bg)', border: '1px solid var(--border)',
                    borderRadius: '50px', padding: '6px 16px',
                    fontFamily: 'var(--font-display)', fontSize: '12px',
                    color: 'var(--muted)', whiteSpace: 'nowrap'
                  }}>{exp.period}</span>
                </div>
                <ul style={{ paddingLeft: '0', listStyle: 'none' }}>
                  {exp.points.map((point, j) => (
                    <li key={j} style={{
                      display: 'flex', gap: '12px',
                      color: 'var(--muted)', fontSize: '14px',
                      lineHeight: 1.7, marginBottom: '8px'
                    }}>
                      <span style={{ color: 'var(--accent)', marginTop: '2px' }}>→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Education */}
          <div style={{ paddingLeft: '80px', position: 'relative' }}>
            <div style={{
              position: 'absolute', left: '20px', top: '4px',
              width: '18px', height: '18px', borderRadius: '50%',
              background: 'var(--bg3)', border: '2px solid var(--accent)'
            }} />
            <div style={{
              background: 'var(--bg3)', borderRadius: '16px',
              border: '1px solid var(--border)', padding: '32px 36px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: '20px', marginBottom: '4px'
                  }}>Bachelor of Engineering — Computer Science</h3>
                  <p style={{ color: 'var(--accent)', fontWeight: 600 }}>
                    Srinivas Institute of Technology, Mangalore (VTU)
                  </p>
                </div>
                <span style={{
                  background: 'var(--bg)', border: '1px solid var(--border)',
                  borderRadius: '50px', padding: '6px 16px',
                  fontFamily: 'var(--font-display)', fontSize: '12px',
                  color: 'var(--muted)', whiteSpace: 'nowrap', height: 'fit-content'
                }}>Jan 2021 – Mar 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience