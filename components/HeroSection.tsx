"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/BrandIcons";

const titles = [
  "Full Stack Developer React & Next.js.",
];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const socialLinks = [
    { href: "https://github.com/AkshaySharmagithub", icon: <GithubIcon size={20} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/akshay-sharma-959b7a290/", icon: <LinkedinIcon size={20} />, label: "LinkedIn" },
  ];

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >

      {/* Gradient orbs */}
      <div style={{
        position: "absolute", top: "20%", left: "15%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "20%", right: "15%",
        width: 350, height: 350, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 1,
        textAlign: "center", padding: "0 24px",
        maxWidth: 800, margin: "0 auto",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="section-label">👋 Welcome to my portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ fontSize: "clamp(1.5rem, 10vw, 2.2rem)", fontWeight: 400, marginBottom: 16, color: "white" }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Akshay Sharma</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            color: "#94a3b8",
            marginBottom: 24,
            minHeight: "2.4em",
          }}
        >
          <span style={{ color: "#9f67ff" }}>{displayed}</span>
          <span style={{
            display: "inline-block",
            width: 2, height: "1.2em",
            background: "#06b6d4",
            marginLeft: 2,
            animation: "blink 1s step-end infinite",
            verticalAlign: "middle",
          }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            fontSize: 17, color: "#64748b",
            maxWidth: 560, margin: "0 auto 40px",
            lineHeight: 1.8,
          }}
        >
          I craft beautiful, high-performance web applications with clean code and exceptional user experiences. Passionate about turning ideas into reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}
        >
          <a href="#projects">
            <button className="glow-btn" style={{ padding: "16px 36px", fontSize: 15, position: "relative", zIndex: 1 }}>
              <span style={{ position: "relative", zIndex: 1 }}>View Projects →</span>
            </button>
          </a>
          <a href="#contact">
            <button className="outline-btn" style={{ padding: "16px 36px", fontSize: 15 }}>
              Let&apos;s Talk
            </button>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{ display: "flex", gap: 16, justifyContent: "center" }}
        >
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 44, height: 44, borderRadius: 12,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#94a3b8",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.2)";
                (e.currentTarget as HTMLElement).style.borderColor = "#7c3aed";
                (e.currentTarget as HTMLElement).style.color = "#9f67ff";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(124,58,237,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{
          position: "absolute", bottom: 32,
          left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 8, color: "#475569",
          fontSize: 12, fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: "0.1em",
        }}
      >
        <span>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
