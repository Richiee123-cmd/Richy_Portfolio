import { motion } from "framer-motion";

// Animations
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

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

        <motion.div
          className="skills-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '60px',
            marginTop: '48px',
          }}
        >

          {/* LEFT */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {skills.map(skill => (
              <motion.div key={skill.name} variants={fadeUp}>
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
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, var(--accent), #a8e63d)',
                      borderRadius: '4px'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={fadeUp}>

            {/* Tools */}
            <h3 style={titleStyle}>Tools & Platforms</h3>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '40px'
            }}>
              {tools.map(tool => (
                <motion.span
                  key={tool}
                  whileHover={{ y: -3, borderColor: 'var(--accent)' }}
                  style={{
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    borderRadius: '50px',
                    padding: '8px 16px',
                    fontSize: '13px',
                    color: 'var(--text)'
                  }}
                >
                  {tool}
                </motion.span>
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
                <motion.div
                  key={cert}
                  variants={fadeUp}
                  whileHover={{ x: 5 }}
                  style={{
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    borderLeft: '3px solid var(--accent)',
                    borderRadius: '12px',
                    padding: '14px 18px'
                  }}
                >
                  <span style={{ color: 'var(--text)', fontSize: '14px' }}>
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* UI/UX */}
            <h3 style={titleStyle}>UI / UX Design</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {uiux.map(skill => (
                <motion.div key={skill.name} variants={fadeUp}>
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
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #ff6b35, #ffaa00)'
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.div
              variants={fadeUp}
              style={{
                marginTop: '20px',
                padding: '16px 20px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border)',
                borderLeft: '3px solid #ff6b35',
                borderRadius: '12px'
              }}
            >
              <span style={{ color: 'var(--text)', fontSize: '13px' }}>
                Passionate about UI/UX design — I enjoy bridging the gap between
                great design and functional code using Figma and Webflow.
              </span>
            </motion.div>

          </motion.div>
        </motion.div>
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