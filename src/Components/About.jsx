import React from "react";
import { motion } from 'framer-motion';
import useInView from '../hooks/UseInView';

function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '80px', alignItems: 'center'
          }}
          className="about-grid"
        >
          {/* Left - Image placeholder */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '100%', aspectRatio: '4/5',
              background: 'var(--bg3)',
              borderRadius: '20px',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', position: 'relative'
            }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: '140px',
                fontWeight: 800, color: 'rgba(200,255,0,0.06)',
                userSelect: 'none', letterSpacing: '-8px'
              }}>RS</span>
              <div style={{
                position: 'absolute', bottom: '24px', left: '24px',
                background: 'var(--bg)', borderRadius: '12px', padding: '16px 20px',
                border: '1px solid var(--border)'
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '18px', color: 'var(--accent)'
                }}>Richy Shaji</div>
                <div style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '4px' }}>
                  Full-Stack Developer
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div style={{
              position: 'absolute', top: '-20px', right: '-20px',
              background: 'var(--accent)', color: '#000',
              borderRadius: '50%', width: '90px', height: '90px',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 800
            }}>
              <span style={{ fontSize: '20px' }}>2+</span>
              <span style={{ fontSize: '9px', letterSpacing: '1px' }}>YEARS</span>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Passionate Developer &<br />
              <span style={{ color: 'var(--accent)' }}>Problem Solver</span>
            </h2>
            <p style={{
              color: 'var(--muted)', lineHeight: 1.9, fontSize: '16px',
              marginBottom: '24px'
            }}>
              I'm a full-stack web developer from Kochi, India with hands-on experience
building scalable applications using the MERN stack. I also have a strong
interest in UI/UX design — crafting interfaces that are not just functional,
but visually engaging and user-friendly.
            </p>
            <p style={{
              color: 'var(--muted)', lineHeight: 1.9, fontSize: '16px',
              marginBottom: '40px'
            }}>
              Graduated in Computer Science from Srinivas Institute of Technology (VTU),
              and have since worked at Luminar Technolab and Codelab Systems, building
              real-world products with React, Node.js, MongoDB, and more.
            </p>

            {/* Info grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { label: 'Name', value: 'Richy Shaji' },
                { label: 'Location', value: 'Kochi, India' },
                { label: 'Email', value: 'richyellavoor2019@gmail.com' },
                { label: 'Phone', value: '+91 6282434979' },
              ].map(item => (
                <div key={item.label} style={{
                  background: 'var(--bg3)', borderRadius: '12px',
                  padding: '16px 20px', border: '1px solid var(--border)'
                }}>
                  <div style={{
                    fontSize: '11px', color: 'var(--accent)',
                    fontFamily: 'var(--font-display)', letterSpacing: '2px',
                    textTransform: 'uppercase', marginBottom: '4px'
                  }}>{item.label}</div>
                  <div style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500 }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

export default About;