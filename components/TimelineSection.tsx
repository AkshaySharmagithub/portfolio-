"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Ecoplug Energy India Limited",
    location: "Alwar, Rajasthan",
    period: "2025 – Present",
    description: "Led development of a SaaS platform serving 50K+ users. Architected microservices infrastructure, reduced load time by 60%, and mentored a team of 4 junior developers.",
    tags: ["Next.js", "TypeScript", "React", "TailwindCss", "MongoDB",],
    color: "#7c3aed",
  },
  {
    type: "education",
    title: "BTech, Computer Science",
    college: "Modern Institute of Technology and Research Centre,",
    location: "Alwar, Rajasthan",
    period: "2023 – Present",
    description: "Computer Science (CGPA-9.33) Focused on algorithms, distributed systems, and software engineering. Active member of the Web Development Club.",
    tags: ["Data Structures", "Algorithms", "OS", "Networks", "Object Oriented Programming",],
    color: "#10b981",
  },
];

export default function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      style={{
        padding: "120px 24px",
        background: "rgba(13, 20, 40, 0.5)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <span className="section-label">Journey</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white" }}>
            Experience &{" "}
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: 24,
            top: 0,
            bottom: 0,
            width: 2,
            background: "linear-gradient(to bottom, #7c3aed, #06b6d4, #10b981, transparent)",
          }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              style={{
                position: "relative",
                paddingLeft: 70,
                paddingBottom: i < experiences.length - 1 ? 48 : 0,
              }}
            >
              {/* Dot */}
              <div style={{
                position: "absolute",
                left: 16,
                top: 6,
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: exp.color,
                border: "3px solid #0a0f1e",
                boxShadow: `0 0 20px ${exp.color}77`,
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 1,
              }} />

              {/* Card */}
              <div
                className="glass"
                style={{
                  padding: 28,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = exp.color + "77";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${exp.color}22`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: `${exp.color}22`,
                      border: `1px solid ${exp.color}44`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: exp.color,
                      flexShrink: 0,
                    }}>
                      {exp.type === "work" ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: "1rem", fontWeight: 700, color: "white",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}>
                        {exp.title}
                      </h3>
                      <p style={{ fontSize: 13, color: exp.color, fontWeight: 600 }}>
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                  </div>
                  <span style={{
                    fontSize: 12, fontWeight: 500, color: "#475569",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 50, padding: "4px 12px",
                    whiteSpace: "nowrap",
                  }}>
                    {exp.period}
                  </span>
                </div>

                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8, margin: "12px 0 16px" }}>
                  {exp.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: 11, fontWeight: 600,
                      color: exp.color,
                      background: `${exp.color}15`,
                      border: `1px solid ${exp.color}33`,
                      borderRadius: 50, padding: "3px 10px",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
