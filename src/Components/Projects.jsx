const projects = [
  {
    title: 'WedVista',
    subtitle: 'Wedding Planning Platform',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    description: 'Full-stack wedding planning platform enabling couples to manage all wedding services end-to-end. Role-based dashboards for Admin, Vendors, and Customers with secure JWT auth.',
    tag: 'MERN Stack',
    icon: '💍',
  },
  {
    title: 'QuickBite',
    subtitle: 'Food Delivery Web App',
    stack: ['React.js', 'Node.js', 'MongoDB', 'REST API'],
    description: 'Full-stack food delivery platform with Admin and User roles. Dynamic restaurant listings, state management, and 40% improved page load via lazy loading.',
    tag: 'MERN Stack',
    icon: '🍔',
  },
  {
    title: 'CraftedCV',
    subtitle: 'Resume Builder App',
    stack: ['React.js', 'CSS3', 'jsPDF', 'LocalStorage'],
    description: 'A dynamic resume builder where users fill in their details and preview the resume in real time. Download-ready PDF export with a clean, modern template.',
    tag: 'React.js',
    icon: '📄',
  },
  {
    title: 'PageVault',
    subtitle: 'Online Bookstore Platform',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    description: 'A full-stack bookstore with book listings, search & filter, cart functionality, and order management. Includes an admin panel to manage the entire inventory.',
    tag: 'MERN Stack',
    icon: '📚',
  },
  {
    title: 'NeoBank',
    subtitle: 'Banking App',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    description: 'A secure digital banking application with account management, fund transfers, transaction history, and real-time balance tracking. JWT-secured with role-based access.',
    tag: 'MERN Stack',
    icon: '🏦',
  },
  {
    title: 'LoanLens',
    subtitle: 'EMI Calculator',
    stack: ['React.js', 'CSS3', 'JavaScript'],
    description: 'A smart EMI calculator that breaks down loan repayments into monthly installments. Features interactive sliders, amortization schedule, and instant visual charts.',
    tag: 'React.js',
    icon: '💰',
  },
  {
    title: 'StaffSync',
    subtitle: 'Employee Management System',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    description: 'A comprehensive employee management system for HR teams. Manage employee records, departments, attendance, and roles with a clean dashboard interface.',
    tag: 'MERN Stack',
    icon: '👥',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <p className="section-label">My Work</p>
        <h2 className="section-title">Featured Projects</h2>

        {/* Stats bar */}
        <div style={{
          display: 'flex', gap: '32px', flexWrap: 'wrap',
          marginTop: '24px', marginBottom: '56px',
          paddingBottom: '40px', borderBottom: '1px solid var(--border)'
        }}>
          {[
            { num: '7', label: 'Total Projects' },
            { num: '5', label: 'MERN Stack' },
            { num: '2', label: 'React.js' },
          ].map(s => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: '2rem', color: 'var(--accent)'
              }}>{s.num}</span>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Project Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {projects.map((p, i) => (
            <div
              key={p.title}
              style={{
                background: 'var(--bg3)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(200,255,0,0.35)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Card Header */}
              <div style={{
                padding: '32px 32px 24px',
                background: 'linear-gradient(135deg, rgba(200,255,0,0.05) 0%, transparent 60%)',
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', marginBottom: '16px'
                }}>
                  {/* Icon */}
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '14px',
                    background: 'rgba(200,255,0,0.1)',
                    border: '1px solid rgba(200,255,0,0.2)',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '22px'
                  }}>
                    {p.icon}
                  </div>
                  {/* Number */}
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: '42px',
                    fontWeight: 800, color: 'var(--text)',
                    opacity: 0.08, lineHeight: 1
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Tag */}
                <span style={{
                  background: p.tag === 'React.js'
                    ? 'rgba(255,107,53,0.1)' : 'rgba(200,255,0,0.1)',
                  color: p.tag === 'React.js' ? '#ff6b35' : 'var(--accent)',
                  border: `1px solid ${p.tag === 'React.js' ? 'rgba(255,107,53,0.25)' : 'rgba(200,255,0,0.2)'}`,
                  borderRadius: '50px', padding: '3px 12px',
                  fontSize: '10px', fontFamily: 'var(--font-display)',
                  fontWeight: 700, letterSpacing: '1px',
                  display: 'inline-block', marginBottom: '10px'
                }}>{p.tag}</span>

                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '22px', marginBottom: '4px', color: 'var(--text)'
                }}>{p.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '13px' }}>{p.subtitle}</p>
              </div>

              {/* Card Body */}
              <div style={{
                padding: '24px 32px 28px',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between', flex: 1
              }}>
                <p style={{
                  color: 'var(--muted)', lineHeight: 1.8,
                  fontSize: '13px', marginBottom: '20px'
                }}>{p.description}</p>

                {/* Tech Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {p.stack.map(tech => (
                    <span key={tech} style={{
                      background: 'var(--bg2)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px', padding: '3px 10px',
                      fontSize: '11px', color: 'var(--muted)',
                      fontFamily: 'var(--font-display)', fontWeight: 600
                    }}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}