"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Coffee } from "lucide-react";

const stats = [
  { value: "6months", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "1months", label: "learn DSA" },

];

const facts = [
  { icon: <MapPin size={16} />, text: "Based in Alwar, Rajasthan" },
  { icon: <Calendar size={16} />, text: "Web Developer" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <span className="section-label">About Me</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white" }}>
            {" "}
            <span className="gradient-text">About Us</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 60, alignItems: "center" }}>
          {/* Left — Avatar + decoration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative", width: 300, height: 300 }}>
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute", inset: -12,
                  borderRadius: "50%",
                  background: "conic-gradient(from 0deg, #7c3aed, #06b6d4, #7c3aed)",
                  padding: 3,
                  zIndex: 0,
                }}
              >
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#0a0f1e" }} />
              </motion.div>

              {/* Avatar */}
              <div style={{
                position: "relative", zIndex: 1,
                width: "100%", height: "100%",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed22, #06b6d422)",
                border: "3px solid rgba(124,58,237,0.4)",
                overflow: "hidden",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  fontSize: 80,
                  userSelect: "none",
                  lineHeight: 1,
                }}>
                  👨‍💻
                </div>
              </div>

              {/* Floating badge */}
              {/* <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", bottom: -10, right: -20, zIndex: 2,
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  borderRadius: 14, padding: "8px 16px",
                  fontSize: 13, fontWeight: 700, color: "white",
                  fontFamily: "'Space Grotesk', sans-serif",
                  boxShadow: "0 8px 32px rgba(124,58,237,0.5)",
                  whiteSpace: "nowrap",
                }}
              >
                ✦ Open to Work
              </motion.div> */}
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, color: "white", marginBottom: 16 }}>
              Full Stack Developer &{" "}
            </h3>

            <p style={{ color: "#94a3b8", lineHeight: 1.9, marginBottom: 16, fontSize: 15 }}>
              I&apos;m a passionate full-stack developer with over 6months of experience building scalable web applications. I love solving complex problems and turning ideas into elegant, user-friendly solutions.
            </p>
            <p style={{ color: "#94a3b8", lineHeight: 1.9, marginBottom: 28, fontSize: 15 }}>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee while reading about design systems.
            </p>

            {/* Facts */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {facts.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, color: "#64748b", fontSize: 14 }}>
                  <span style={{ color: "#7c3aed" }}>{f.icon}</span>
                  {f.text}
                </div>
              ))}
            </div>

            <a href="#contact">
              <button className="glow-btn" style={{ padding: "14px 32px", fontSize: 14, position: "relative", zIndex: 1 }}>
                <span style={{ position: "relative", zIndex: 1 }}>Get In Touch</span>
              </button>
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 24, marginTop: 80,
        }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="glass"
              style={{ padding: "32px 24px", textAlign: "center" }}
            >
              <div style={{
                fontSize: "2.5rem", fontWeight: 800,
                fontFamily: "'Space Grotesk', sans-serif",
                background: "linear-gradient(135deg, #9f67ff, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: 8,
              }}>
                {s.value}
              </div>
              <div style={{ color: "#64748b", fontSize: 13, fontWeight: 500 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
