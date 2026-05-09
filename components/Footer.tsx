"use client";

import { motion } from "framer-motion";
import { Code2, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/BrandIcons";

const footerLinks = {
  Navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ],
  Resources: [
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
    { label: "GitHub", href: "https://github.com/AkshaySharmagithub" },
  ],
};

const socials = [
  { icon: <GithubIcon size={17} />, href: "https://github.com/AkshaySharmagithub", label: "GitHub" },
  { icon: <LinkedinIcon size={17} />, href: "https://www.linkedin.com/in/akshay-sharma-959b7a290/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(8,13,25,0.9)",
      padding: "64px 24px 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 20px rgba(124,58,237,0.4)",
              }}>
                <Code2 size={20} color="white" />
              </div>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 25, color: "white" }}>
                Akshay<span style={{ color: "#9f67ff" }}></span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.8, maxWidth: 240, marginBottom: 24 }}>
              Full Stack Developer crafting beautiful, performant web experiences. Available for new projects.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "#64748b", textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.2)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#7c3aed";
                    (e.currentTarget as HTMLElement).style.color = "#9f67ff";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.color = "#64748b";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{
                fontSize: 12, fontWeight: 700, color: "#94a3b8",
                textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20,
                fontFamily: "'Space Grotesk', sans-serif",
              }}>
                {title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: 14, color: "#475569",
                        textDecoration: "none", transition: "color 0.3s",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#9f67ff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Status */}
          <div>
            <h4 style={{
              fontSize: 12, fontWeight: 700, color: "#94a3b8",
              textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              Status
            </h4>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.25)",
              borderRadius: 50, padding: "6px 14px",
            }}>
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981" }}
              />
              <span style={{ fontSize: 13, color: "#10b981", fontWeight: 600 }}>Available for Work</span>
            </div>
            <p style={{ fontSize: 13, color: "#475569", marginTop: 16, lineHeight: 1.7 }}>
              Open to full-time roles and interesting freelance projects.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: 28 }} />

        {/* Bottom */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 16,
          alignItems: "center", justifyContent: "space-between",
        }}>
          <p style={{ fontSize: 13, color: "#334155" }}>
            © 2024 Alex Carter. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: "#334155", display: "flex", alignItems: "center", gap: 5 }}>
            Built with <Heart size={13} fill="#7c3aed" color="#7c3aed" /> using Next.js & ShadCN UI
          </p>
        </div>
      </div>
    </footer>
  );
}
