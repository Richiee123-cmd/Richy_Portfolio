import React from "react";

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
      "Food delivery platform with optimized performance, admin panel, and dynamic listings.",
    tag: "MERN Stack",
    github: "#",
  },
  {
    title: "CraftedCV",
    subtitle: "Resume Builder",
    stack: ["React.js", "CSS3", "jsPDF"],
    description:
      "Interactive resume builder with real-time preview and downloadable PDF.",
    tag: "React.js",
    github: "#",
  },
  {
    title: "PageVault",
    subtitle: "Online Bookstore",
    stack: ["React.js", "Node.js", "MongoDB"],
    description:
      "Full-stack bookstore with cart system, search filters, and admin dashboard.",
    tag: "MERN Stack",
    github: "#",
  },
];

export default function Projects() {

  // Premium backgrounds
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

        <div style={styles.grid}>
          {projects.map((p, i) => (
            <div
              key={i}
              style={{
                ...styles.card,
                background: cardBackgrounds[i % cardBackgrounds.length],
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px)";
                e.currentTarget.style.boxShadow =
                  "0 30px 80px rgba(0,0,0,0.7)";
                const glow = e.currentTarget.querySelector(".glow");
                if (glow) glow.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                const glow = e.currentTarget.querySelector(".glow");
                if (glow) glow.style.opacity = "0";
              }}
            >
              {/* Glow Effect */}
              <div style={styles.glow} className="glow"></div>

              {/* Top Row */}
              <div style={styles.topRow}>
                <span style={styles.tag}>{p.tag}</span>
                <span style={styles.number}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 style={styles.projectTitle}>{p.title}</h3>
              <p style={styles.subtitle}>{p.subtitle}</p>

              {/* Description */}
              <p style={styles.desc}>{p.description}</p>

              {/* Tech Stack */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= PREMIUM STYLES ================= */

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
    transition: "all 0.4s ease",
    position: "relative",
    overflow: "hidden",
  },

  glow: {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background:
      "radial-gradient(circle, rgba(255,255,255,0.08), transparent 60%)",
    opacity: 0,
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
    letterSpacing: "1px",
  },

  number: {
    fontSize: "28px",
    fontWeight: "700",
    color: "rgba(255,255,255,0.08)",
  },

  projectTitle: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "5px",
  },

  subtitle: {
    fontSize: "13px",
    color: "#777",
    marginBottom: "15px",
  },

  desc: {
    fontSize: "14px",
    color: "#bbb",
    lineHeight: "1.7",
    marginBottom: "20px",
  },

  techContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "25px",
  },

  tech: {
    fontSize: "11px",
    padding: "5px 10px",
    borderRadius: "6px",
    background: "rgba(255,255,255,0.05)",
    color: "#aaa",
  },

  btnRow: {
    display: "flex",
  },

  singleBtn: {
    width: "100%",
    padding: "12px",
    textAlign: "center",
    borderRadius: "8px",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    textDecoration: "none",
    transition: "0.3s",
  },
};