import { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '20px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.4s ease',
      }}>
        {/* Logo */}
        <a href="#home" style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: '22px', color: 'var(--text)', textDecoration: 'none',
          letterSpacing: '-0.5px'
        }}>
          Richy<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop Links */}
        <ul style={{
          display: 'flex', gap: '36px', listStyle: 'none',
          margin: 0, padding: 0
        }} className="nav-links">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} style={{
                color: 'var(--muted)', textDecoration: 'none',
                fontFamily: 'var(--font-display)', fontSize: '13px',
                fontWeight: 600, letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'color 0.3s',
              }}
                onMouseOver={e => e.target.style.color = 'var(--accent)'}
                onMouseOut={e => e.target.style.color = 'var(--muted)'}
              >{link}</a>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
    <a  href="/Richy_Shaji_Resume.pdf"
  download="Richy_Shaji_Resume.pdf"
  className="btn btn-outline"
  style={{
    fontSize: '12px', padding: '10px 20px',
    borderColor: 'var(--accent)', color: 'var(--accent)'
  }}
  onMouseOver={e => {
    e.currentTarget.style.background = 'var(--accent)';
    e.currentTarget.style.color = '#000';
  }}
  onMouseOut={e => {
    e.currentTarget.style.background = 'transparent';
    e.currentTarget.style.color = 'var(--accent)';
  }}
>
  CV ↓
</a>
<a href="#contact" className="btn btn-primary"
  style={{ fontSize: '12px', padding: '10px 24px' }}>
  Hire Me ↗
</a>


        {/* Hamburger - mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none',
          color: 'var(--text)', fontSize: '24px', cursor: 'pointer'
        }} className="hamburger">☰</button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(10,10,10,0.98)',
          zIndex: 999, display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center', gap: '36px'
        }}>
          <button onClick={() => setMenuOpen(false)} style={{
            position: 'absolute', top: '24px', right: '40px',
            background: 'none', border: 'none', color: 'var(--text)',
            fontSize: '32px', cursor: 'pointer'
          }}>✕</button>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)', fontSize: '36px',
                fontWeight: 800, color: 'var(--text)', textDecoration: 'none',
                transition: 'color 0.3s'
              }}
              onMouseOver={e => e.target.style.color = 'var(--accent)'}
              onMouseOut={e => e.target.style.color = 'var(--text)'}
            >{link}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
          nav a.btn { display: none; }
        }
      `}</style>
    </>
  );
}