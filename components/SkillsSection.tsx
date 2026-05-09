"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    color: "#7c3aed",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend",
    color: "#06b6d4",
    skills: [
      { name: "Node.js / Express", level: 70 },
      { name: "MongoDB", level: 78 },
      { name: "REACT-JS", level: 80 },

    ],
  },
];

const techPills = [
  "React", "Next.js",  "Node.js", "MongoDB", "Python",
  "Tailwind CSS", "Git", 
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 500, color: "#e2e8f0" }}>{name}</span>
        <span style={{ fontSize: 13, color: "#64748b", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>{level}%</span>
      </div>
      <div className="progress-track">
        <motion.div
          className="progress-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)`, boxShadow: `0 0 12px ${color}44` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      style={{
        padding: "120px 24px",
        background: "rgba(13, 20, 40, 0.5)",
        position: "relative",
      }}
    >
      {/* Decorative blur */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600, height: 400,
        background: "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <span className="section-label">My Expertise</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white" }}>
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p style={{ color: "#64748b", marginTop: 16, maxWidth: 520, margin: "16px auto 0", fontSize: 15 }}>
            Technologies I use to build fast, scalable, and beautiful web applications.
          </p>
        </motion.div>

        {/* Skill bar cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, marginBottom: 60 }}>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="glass"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              style={{ padding: 32 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <div style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: cat.color,
                  boxShadow: `0 0 12px ${cat.color}`,
                }} />
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", fontFamily: "'Space Grotesk', sans-serif" }}>
                  {cat.title}
                </h3>
              </div>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={0.3 + ci * 0.1 + si * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <p style={{ color: "#64748b", fontSize: 13, marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Also familiar with
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {techPills.map((tech, i) => (
              <motion.span
                key={tech}
                className="skill-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.04 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
