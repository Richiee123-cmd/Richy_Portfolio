import React from "react";
import { motion } from "framer-motion";

// Animations
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const experiences = [
  {
    role: 'Full-Stack Web Development Intern',
    company: 'Luminar Technolab',
    location: 'Kochi, India',
    period: 'July 2025 – Feb 2026',
    points: [
      'Hands-on training in MERN stack — MongoDB, Express.js, React.js, Angular, Next.js, Node.js.',
      'Developed responsive UIs with React.js, improving usability across devices.',
      'Designed RESTful APIs with CRUD operations.',
      'Applied JWT-based authentication and authorization.',
    ],
  },
  {
    role: 'MERN Stack Development Intern',
    company: 'Codelab Systems',
    location: 'Mangalore, India',
    period: 'July 2024 – October 2024',
    points: [
      'Built and optimized RESTful APIs using Node.js and Express.js.',
      'Enhanced reusable React.js components.',
      'Applied complete CRUD functionality using MongoDB.',
      'Collaborated using Git/GitHub.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <p className="section-label">My Resume</p>
        <h2 className="section-title">
          Experience &<br />
          <span style={{ color: 'var(--accent)' }}>Education</span>
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ marginTop: '56px', position: 'relative' }}
        >

          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'var(--border)'
          }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{
                paddingLeft: '80px',
                marginBottom: '56px',
                position: 'relative'
              }}
            >

              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '20px',
                top: '6px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--accent)'
              }} />

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -6,
                  borderColor: "var(--accent)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.4)"
                }}
                style={{
                  background: 'var(--bg3)',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  padding: '28px 32px',
                  transition: '0.3s'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '14px'
                }}>
                  <div>
                   <h3 style={{
  fontWeight: 700,
  fontSize: '18px',
  marginBottom: '4px',
  color: 'var(--text)'   // ✅ FIX
}}>
                      {exp.role}
                    </h3>

                    <p style={{
                      color: 'var(--accent)',
                      fontSize: '14px'
                    }}>
                      {exp.company} — {exp.location}
                    </p>
                  </div>

                  <span style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '50px',
                    padding: '6px 14px',
                    fontSize: '11px',
                    color: 'var(--muted)'
                  }}>
                    {exp.period}
                  </span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {exp.points.map((point, j) => (
                    <li key={j} style={{
                      color: 'var(--muted)',
                      fontSize: '14px',
                      lineHeight: 1.7,
                      marginBottom: '6px'
                    }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}

          {/* Education */}
          <motion.div
            variants={fadeUp}
            style={{ paddingLeft: '80px', position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              left: '20px',
              top: '6px',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              border: '2px solid var(--accent)'
            }} />

            <motion.div
              whileHover={{
                y: -6,
                borderColor: "var(--accent)"
              }}
              style={{
                background: 'var(--bg3)',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                padding: '28px 32px'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <div>
                  <h3 style={{fontWeight: 700,
  fontSize: '18px',
  marginBottom: '4px',
  color: 'var(--text)' }}>
                    Bachelor of Engineering — Computer Science
                  </h3>
                  <p style={{ color: 'var(--accent)', fontSize: '14px' }}>
                    Srinivas Institute of Technology, Mangalore
                  </p>
                </div>

                <span style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '50px',
                  padding: '6px 14px',
                  fontSize: '11px',
                  color: 'var(--muted)'
                }}>
                  Jan 2021 – Mar 2024
                </span>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          section div[style*="paddingLeft: 80px"] {
            padding-left: 50px !important;
          }
        }
      `}</style>
    </section>
  );
}