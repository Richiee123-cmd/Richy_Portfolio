import React from "react";
import { motion } from "framer-motion";

// Animations
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
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

const projects = [
  {
    title: "WedVista",
    subtitle: "Wedding Planning Platform",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    description:
      "Full-stack wedding planning platform with role-based dashboards and secure authentication.",
    tag: "MERN Stack",
    github: "#",
  },
  {
    title: "QuickBite",
    subtitle: "Food Delivery Web App",
    stack: ["React.js", "Node.js", "MongoDB", "REST API"],
    description:
      "Food delivery platform with optimized performance and admin panel.",
    tag: "MERN Stack",
    github: "#",
  },
  {
    title: "CraftedCV",
    subtitle: "Resume Builder",
    stack: ["React.js", "CSS3", "jsPDF"],
    description:
      "Interactive resume builder with real-time preview and PDF export.",
    tag: "React.js",
    github: "#",
  },
  {
    title: "PageVault",
    subtitle: "Online Bookstore",
    stack: ["React.js", "Node.js", "MongoDB"],
    description:
      "Full-stack bookstore with cart, filters, and admin dashboard.",
    tag: "MERN Stack",
    github: "#",
  },
];

export default function Projects() {
  const cardBackgrounds = [
    "linear-gradient(145deg, #111216, #0d0e12)",
    "linear-gradient(145deg, #101418, #0b0f13)",
    "linear-gradient(145deg, #121212, #0a0a0a)",
    "linear-gradient(145deg, #0f1115, #090a0d)",
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <p style={styles.label}>Portfolio</p>
        <h2 style={styles.title}>Selected Work</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={styles.grid}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -12,
                scale: 1.02,
                boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
              }}
              style={{
                ...styles.card,
                background: cardBackgrounds[i % cardBackgrounds.length],
              }}
            >
              {/* Top */}
              <div style={styles.topRow}>
                <span style={styles.tag}>{p.tag}</span>
                <span style={styles.number}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <h3 style={styles.projectTitle}>{p.title}</h3>
              <p style={styles.subtitle}>{p.subtitle}</p>

              <p style={styles.desc}>{p.description}</p>

              {/* Stack */}
              <div style={styles.techContainer}>
                {p.stack.map((tech) => (
                  <span key={tech} style={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div style={styles.btnRow}>
                <a href={p.github} style={styles.singleBtn}>
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const styles = {
  section: {
    background: "#0b0c10",
    padding: "100px 20px",
    color: "white",
  },

  container: {
    maxWidth: "1200px",
    margin: "auto",
  },

  label: {
    color: "#888",
    fontSize: "13px",
    letterSpacing: "2px",
    marginBottom: "10px",
  },

  title: {
    fontSize: "40px",
    fontWeight: "800",
    marginBottom: "50px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
  },

  card: {
    borderRadius: "18px",
    padding: "30px",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "0.4s",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  tag: {
    fontSize: "11px",
    color: "#aaa",
  },

  number: {
    fontSize: "28px",
    color: "rgba(255,255,255,0.08)",
  },

  projectTitle: {
    fontSize: "22px",
    fontWeight: "700",
  },

  subtitle: {
    fontSize: "13px",
    color: "#777",
    marginBottom: "10px",
  },

  desc: {
    fontSize: "14px",
    color: "#bbb",
    marginBottom: "20px",
  },

  techContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "20px",
  },

  tech: {
    fontSize: "11px",
    padding: "4px 8px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "6px",
  },

  btnRow: {
    display: "flex",
  },

  singleBtn: {
    width: "100%",
    padding: "10px",
    textAlign: "center",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    textDecoration: "none",
  },
};