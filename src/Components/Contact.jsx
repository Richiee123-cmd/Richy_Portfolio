import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// 🔴 REPLACE THESE WITH YOUR ACTUAL IDS FROM EMAILJS
const SERVICE_ID = 'service_3g1d7ob';
const TEMPLATE_ID = 'template_aaxpzmc';
const PUBLIC_KEY = 'crnmZC3cR3DRRJuTf';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" style={{ background: 'var(--bg2)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 64px' }}>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Let's Work<br />
            <span style={{ color: 'var(--accent)' }}>Together</span>
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '16px' }}>
            I'm currently open to full-time roles and freelance opportunities.
            Have a project in mind? Drop me a message below!
          </p>
        </div>

        {/* Two column layout */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr',
          gap: '48px', alignItems: 'start'
        }} className="contact-grid">

          {/* LEFT — Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  {[
    { label: 'Email', value: 'richyellavoor2019@gmail.com', href: 'https://mail.google.com/mail/?view=cm&to=richyellavoor2019@gmail.com' },
    { label: 'Phone', value: '+91 6282434979', href: 'tel:+916282434979' },
    { label: 'Location', value: 'Kochi, Kerala, India', href: null },
  ].map(item => (
    <div
      key={item.label}
      style={{
        background: 'var(--bg3)',
        border: '1px solid var(--border)',
        borderLeft: '3px solid var(--accent)', // premium touch
        borderRadius: '12px',
        padding: '18px 20px',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderLeft = '3px solid #fff';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderLeft = '3px solid var(--accent)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{
        fontSize: '11px',
        color: 'var(--accent)',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginBottom: '6px'
      }}>
        {item.label}
      </div>

      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          style={{
            color: 'var(--text)',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 500
          }}
        >
          {item.value}
        </a>
      ) : (
        <div style={{
          fontSize: '15px',
          fontWeight: 500,
          color: 'var(--text)'
        }}>
          {item.value}
        </div>
      )}
    </div>
  ))}

  {/* SOCIAL BUTTONS */}
  <div style={{ display: 'flex', gap: '12px', marginTop: '10px', flexWrap: 'wrap' }}>
    
    <a
      href="https://www.linkedin.com/in/richy-shaji"
      target="_blank"
      rel="noreferrer"
      style={{
        flex: 1,
        textAlign: 'center',
        fontSize: '13px',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.2)',
        color: '#fff',
        textDecoration: 'none',
        transition: '0.3s'
      }}
      onMouseOver={e => {
        e.currentTarget.style.background = '#fff';
        e.currentTarget.style.color = '#000';
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = '#fff';
      }}
    >
      LinkedIn →
    </a>

    <a
      href="https://github.com/Richiee123-cmd"
      target="_blank"
      rel="noreferrer"
      style={{
        flex: 1,
        textAlign: 'center',
        fontSize: '13px',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.2)',
        color: '#fff',
        textDecoration: 'none',
        transition: '0.3s'
      }}
      onMouseOver={e => {
        e.currentTarget.style.background = '#fff';
        e.currentTarget.style.color = '#000';
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = '#fff';
      }}
    >
      GitHub →
    </a>

  </div>
</div>

          {/* RIGHT — Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} style={{
            background: 'var(--bg3)', borderRadius: '20px',
            border: '1px solid var(--border)', padding: '40px',
            display: 'flex', flexDirection: 'column', gap: '20px'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '20px', color: 'var(--text)', marginBottom: '4px'
            }}>Send a Message</h3>

            {/* Name */}
            <div>
              <label style={{
                display: 'block', fontSize: '12px', color: 'var(--accent)',
                fontFamily: 'var(--font-display)', letterSpacing: '2px',
                textTransform: 'uppercase', marginBottom: '8px'
              }}>Your Name</label>
              <input
                type="text"
                name="from_name"
               value={form.from_name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                style={{
                  width: '100%', padding: '14px 18px',
                  background: 'var(--bg2)', border: '1px solid var(--border)',
                  borderRadius: '10px', color: 'var(--text)',
                  fontFamily: 'var(--font-body)', fontSize: '14px',
                  outline: 'none', transition: 'border-color 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{
                display: 'block', fontSize: '12px', color: 'var(--accent)',
                fontFamily: 'var(--font-display)', letterSpacing: '2px',
                textTransform: 'uppercase', marginBottom: '8px'
              }}>Your Email</label>
              <input
                type="email"
                name="from_email"
               value={form.from_email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                style={{
                  width: '100%', padding: '14px 18px',
                  background: 'var(--bg2)', border: '1px solid var(--border)',
                  borderRadius: '10px', color: 'var(--text)',
                  fontFamily: 'var(--font-body)', fontSize: '14px',
                  outline: 'none', transition: 'border-color 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
              />
            </div>

            {/* Message */}
            <div>
              <label style={{
                display: 'block', fontSize: '12px', color: 'var(--accent)',
                fontFamily: 'var(--font-display)', letterSpacing: '2px',
                textTransform: 'uppercase', marginBottom: '8px'
              }}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Message"
                style={{
                  width: '100%', padding: '14px 18px',
                  background: 'var(--bg2)', border: '1px solid var(--border)',
                  borderRadius: '10px', color: 'var(--text)',
                  fontFamily: 'var(--font-body)', fontSize: '14px',
                  outline: 'none', transition: 'border-color 0.3s',
                  resize: 'vertical', boxSizing: 'border-box'
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn btn-primary"
              style={{
                width: '100%', justifyContent: 'center',
                opacity: status === 'sending' ? 0.7 : 1,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                fontSize: '14px'
              }}
            >
              {status === 'sending' ? '⏳ Sending...' : 'Send Message ✉'}
            </button>

            {/* Success message */}
            {status === 'success' && (
              <div style={{
                background: 'rgba(200,255,0,0.1)',
                border: '1px solid rgba(200,255,0,0.3)',
                borderRadius: '10px', padding: '14px 18px',
                color: 'var(--accent)', fontSize: '14px',
                fontFamily: 'var(--font-display)', textAlign: 'center'
              }}>
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}

            {/* Error message */}
            {status === 'error' && (
              <div style={{
                background: 'rgba(255,50,50,0.1)',
                border: '1px solid rgba(255,50,50,0.3)',
                borderRadius: '10px', padding: '14px 18px',
                color: '#ff6b6b', fontSize: '14px',
                fontFamily: 'var(--font-display)', textAlign: 'center'
              }}>
                ❌ Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>

        {/* Footer */}
        <div style={{
          borderTop: '1px solid var(--border)', marginTop: '80px',
          paddingTop: '32px', textAlign: 'center',
          color: 'var(--muted)', fontSize: '13px',
          fontFamily: 'var(--font-display)'
        }}>
          Designed & Built by Richy Shaji © 2026
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: #555; }
      `}</style>
    </section>
  );
}