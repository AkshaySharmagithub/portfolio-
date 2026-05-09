"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

const projects = [
  {
    id: 1,
    title: "attendence-System",
    description: "A full-featured news platform with admin dashboard, real-time comments, authentication, and dynamic content management built with Next.js and MongoDB.",
    image: "🗞️",
    gradient: "linear-gradient(135deg, #7c3aed22, #06b6d422)",
    borderColor: "#7c3aed",
    tags: ["Next.js", "MongoDB", "TypeScript", "TailwindCSS"],
    github: "https://github.com/AkshaySharmagithub/attendence",
    featured: true,
  },
  {
    id: 3,
    title: "ecommerce-react-app",
    description: "A simple ecommerce website",
    image: "📋",
    gradient: "linear-gradient(135deg, #f59e0b22, #7c3aed22)",
    borderColor: "#f59e0b",
    tags: ["React", "HTML", "CSS", "TailwindCSS"],
    github: "https://github.com/AkshaySharmagithub/ecommerce-react-app",
    live: "https://imaginative-treacle-adcb09.netlify.app/",

    featured: false,
  },
  {
    id: 4,
    title: "Hand-gesture-cdetection",
    image: "💎",
    gradient: "linear-gradient(135deg, #06b6d422, #10b98122)",
    borderColor: "#10b981",
    tags: ["python, NLP,Deep Learning"],
    github: "https://github.com/AkshaySharmagithub/Hand-gesture-cdetection",
    featured: false,
  },
  {
    id: 6,
    title: "Weather-App",
    description: "Beautiful weather app with hourly and 7-day forecasts, location detection, interactive maps, and animated weather conditions.",
    image: "🌤️",
    gradient: "linear-gradient(135deg, #3b82f622, #06b6d422)",
    borderColor: "#3b82f6",
    tags: ["React", "OpenWeather API", "Mapbox", "Framer Motion"],
    github: "https://github.com/AkshaySharmagithub/Weather-App",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: project.gradient,
        border: `1px solid ${hovered ? project.borderColor : "rgba(255,255,255,0.07)"}`,
        borderRadius: 20,
        padding: 28,
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 60px ${project.borderColor}33` : "none",
        backdropFilter: "blur(16px)",
        cursor: "pointer",
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div style={{
          position: "absolute", top: 16, right: 16,
          background: "rgba(124,58,237,0.2)",
          border: "1px solid rgba(124,58,237,0.4)",
          borderRadius: 50, padding: "3px 10px",
          fontSize: 11, fontWeight: 600, color: "#9f67ff",
          letterSpacing: "0.05em",
        }}>
          ✦ FEATURED
        </div>
      )}

      {/* Project emoji icon */}
      <div style={{
        fontSize: 40, marginBottom: 20,
        width: 68, height: 68, borderRadius: 16,
        background: "rgba(255,255,255,0.06)",
        display: "flex", alignItems: "center", justifyContent: "center",
        border: `1px solid ${project.borderColor}44`,
      }}>
        {project.image}
      </div>

      <h3 style={{
        fontSize: "1.15rem", fontWeight: 700, color: "white",
        fontFamily: "'Space Grotesk', sans-serif", marginBottom: 10,
      }}>
        {project.title}
      </h3>

      <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: 20, minHeight: 64 }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: 11, fontWeight: 600, color: "#94a3b8",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 50, padding: "3px 10px",
            letterSpacing: "0.03em",
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 12 }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 13, fontWeight: 600, color: "#94a3b8",
              textDecoration: "none", transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
          >
            <GithubIcon size={15} /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 13, fontWeight: 600,
              color: project.borderColor,
              textDecoration: "none", transition: "opacity 0.3s",
            }}
          >
          </a>
        </div>
      </div>
    </motion.div>
  );
}
export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white" }}>
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: "#64748b", marginTop: 16, maxWidth: 520, margin: "16px auto 0", fontSize: 15 }}>
            A selection of projects I&apos;ve built — from complex full-stack apps to elegant user interfaces.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: 48 }}
        >
          <a href="https://github.com/AkshaySharmagithub" target="_blank" rel="noopener noreferrer">
            <button className="outline-btn" style={{ padding: "14px 32px", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>
              <GithubIcon size={16} /> View All on GitHub
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
