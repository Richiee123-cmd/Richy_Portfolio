import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const codeLines = [
  { text: 'const developer = {', color: '#f0f0f0' },
  { text: '  name: "Richy Shaji",', color: '#c8ff00' },
  { text: '  role: "Full-Stack Dev",', color: '#c8ff00' },
  { text: '  location: "Kochi, India",', color: '#c8ff00' },
  { text: '  stack: [', color: '#f0f0f0' },
  { text: '    "React.js",', color: '#ff6b35' },
  { text: '    "Node.js",', color: '#ff6b35' },
  { text: '    "Express.js",', color: '#ff6b35' },
  { text: '    "MongoDB",', color: '#ff6b35' },
  { text: '  ],', color: '#f0f0f0' },
  { text: '  uiux: ["Figma", "Webflow"],', color: '#a78bfa' },
  { text: '  available: true,', color: '#34d399' },
  { text: '};', color: '#f0f0f0' },
  { text: '', color: '' },
  { text: 'developer.buildSomething();', color: '#60a5fa' },
];

export default function Hero() {
  const typedRef = useRef(null);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full-Stack Developer',
        'MERN Stack Engineer',
        'React.js Specialist',
        'UI/UX Enthusiast',
        'Node.js Developer',
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  // Animate code lines one by one
  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines(v => v + 1);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'var(--bg)',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '20%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,255,0,0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ paddingTop: '30px', width: '100%' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '60px', alignItems: 'center'
        }} className="hero-grid">

          {/* ---- LEFT: Text Content ---- */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'var(--bg3)', border: '1px solid var(--border)',
                borderRadius: '50px', padding: '6px 16px', marginBottom: '32px'
              }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: 'var(--accent)', display: 'inline-block',
                animation: 'pulse 2s infinite'
              }} />
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: '12px',
                color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase'
              }}>Available for Work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                lineHeight: 1.0, marginBottom: '12px', letterSpacing: '-2px'
              }}>
              Richy<br />
              <span style={{
                WebkitTextStroke: '2px rgba(255,255,255,0.15)',
                color: 'transparent'
              }}>Shaji</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                color: 'var(--accent)', fontWeight: 600,
                letterSpacing: '1px', marginBottom: '24px', minHeight: '36px'
              }}>
              <span ref={typedRef} />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                color: 'var(--muted)', fontSize: '17px', lineHeight: 1.8,
                maxWidth: '460px', marginBottom: '40px'
              }}>
              Building high-performance web applications with React, Node.js & MongoDB.
              Based in Kochi, India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary">View My Work ↓</a>
<a href="#contact" className="btn btn-outline">Let's Talk →</a>
<a href="/Richy_Shaji_resume.pdf"
  download="Richy_Shaji_resume.pdf"
  className="btn btn-outline"
  style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
  onMouseOver={e => {
    e.currentTarget.style.background = 'var(--accent)';
    e.currentTarget.style.color = '#000';
  }}
  onMouseOut={e => {
    e.currentTarget.style.background = 'transparent';
    e.currentTarget.style.color = 'var(--accent)';
  }}
>
  Download CV ↓
</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                display: 'flex', gap: '40px', marginTop: '56px',
                paddingTop: '40px', borderTop: '1px solid var(--border)', flexWrap: 'wrap'
              }}>
              {[
                { num: '2+', label: 'Years Learning' },
                { num: '7+', label: 'Projects Built' },
                { num: 'MERN', label: 'Stack Expert' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '2.2rem',
                    fontWeight: 800, color: 'var(--accent)', lineHeight: 1
                  }}>{stat.num}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '12px', marginTop: '6px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ---- RIGHT: Animated Code Block ---- */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ position: 'relative' }}
          >
            {/* Glow behind card */}
            <div style={{
              position: 'absolute', inset: '-20px',
              background: 'radial-gradient(ellipse at center, rgba(200,255,0,0.08) 0%, transparent 70%)',
              borderRadius: '24px', pointerEvents: 'none'
            }} />

            {/* Code card */}
            <div style={{
              background: '#0d1117',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              position: 'relative'
            }}>
              {/* Window bar */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '14px 20px',
                background: '#161b22',
                borderBottom: '1px solid rgba(255,255,255,0.06)'
              }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
                <span style={{
                  marginLeft: '12px', color: '#666', fontSize: '12px',
                  fontFamily: 'monospace'
                }}>developer.js</span>
              </div>

              {/* Code content */}
              <div style={{
                padding: '24px 28px',
                fontFamily: '"Fira Code", "Cascadia Code", monospace',
                fontSize: '13.5px', lineHeight: '1.9',
                minHeight: '340px'
              }}>
                {codeLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px' }}>
                    {/* Line number */}
                    <span style={{
                      color: '#444', userSelect: 'none',
                      minWidth: '20px', textAlign: 'right', fontSize: '12px'
                    }}>{i + 1}</span>
                    {/* Code text */}
                    <span style={{ color: line.color || '#f0f0f0' }}>
                      {line.text}
                      {/* Blinking cursor on last visible line */}
                      {i === visibleLines - 1 && visibleLines < codeLines.length && (
                        <span style={{ animation: 'blink 1s infinite', color: 'var(--accent)' }}>▋</span>
                      )}
                    </span>
                  </div>
                ))}

                {/* Cursor after all lines done */}
                {visibleLines >= codeLines.length && (
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <span style={{ color: '#444', minWidth: '20px', textAlign: 'right', fontSize: '12px' }}>
                      {codeLines.length + 1}
                    </span>
                    <span style={{ animation: 'blink 1s infinite', color: 'var(--accent)' }}>▋</span>
                  </div>
                )}
              </div>

              {/* Bottom status bar */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '8px 20px',
                background: '#161b22',
                borderTop: '1px solid rgba(255,255,255,0.06)'
              }}>
                <span style={{ color: '#34d399', fontSize: '11px', fontFamily: 'monospace' }}>
                  ● JavaScript
                </span>
                <span style={{ color: '#666', fontSize: '11px', fontFamily: 'monospace' }}>
                  Ln {visibleLines}, Col 1
                </span>
                <span style={{ color: '#c8ff00', fontSize: '11px', fontFamily: 'monospace' }}>
                  UTF-8
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}