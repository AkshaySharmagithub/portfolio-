"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/BrandIcons";

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "akshaysharma6911@gmail.com",
    color: "#7c3aed",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 7297961547",
    color: "#06b6d4",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Alwar, Rajasthan, India ",
    href: "#",
    color: "#f59e0b",
  },
];

const socials = [
  { icon: <GithubIcon size={18} />, href: "https://github.com/AkshaySharmagithub", label: "GitHub" },
  { icon: <LinkedinIcon size={18} />, href: "https://www.linkedin.com/in/akshay-sharma-959b7a290/", label: "LinkedIn" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <span className="section-label">Contact</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white" }}>
            Let&apos;s{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p style={{ color: "#64748b", marginTop: 16, maxWidth: 480, margin: "16px auto 0", fontSize: 15 }}>
            Have a project in mind or just want to chat? I&apos;m always open to new opportunities.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48 }}>
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", fontFamily: "'Space Grotesk',sans-serif", marginBottom: 12 }}>
              Get In Touch
            </h3>
            <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8, marginBottom: 36 }}>
              I&apos;m currently available for freelance work and full-time positions. If you have a project that needs some creative thinking and engineering excellence, let&apos;s talk!
            </p>

            {/* Contact Info cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    whileHover={{ x: 6 }}
                    style={{
                      display: "flex", alignItems: "center", gap: 16,
                      padding: "16px 20px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 14,
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = item.color + "55";
                      (e.currentTarget as HTMLElement).style.background = item.color + "10";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                    }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: item.color + "20",
                      border: `1px solid ${item.color}44`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: item.color, flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: 11, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: 14, color: "#e2e8f0", fontWeight: 500 }}>{item.value}</p>
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p style={{ fontSize: 12, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                Find me on
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {socials.map((s) => (
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
                      color: "#64748b", textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.2)";
                      (e.currentTarget as HTMLElement).style.borderColor = "#7c3aed";
                      (e.currentTarget as HTMLElement).style.color = "#9f67ff";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.color = "#64748b";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass"
            style={{ padding: 36 }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, color: "#94a3b8", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Name
                  </label>
                  <input
                    className="contact-input"
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, color: "#94a3b8", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Email
                  </label>
                  <input
                    className="contact-input"
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, color: "#94a3b8", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Subject
                </label>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                />
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "block", fontSize: 12, color: "#94a3b8", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Message
                </label>
                <textarea
                  className="contact-input"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  style={{ resize: "vertical", minHeight: 120 }}
                />
              </div>

              <button
                type="submit"
                className="glow-btn"
                disabled={sending || sent}
                style={{
                  width: "100%", padding: "15px 24px", fontSize: 15,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  position: "relative", zIndex: 1,
                  opacity: sending ? 0.8 : 1,
                }}
              >
                <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 8 }}>
                  {sent ? (
                    <>✅ Message Sent!</>
                  ) : sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{ width: 16, height: 16, border: "2px solid white", borderTopColor: "transparent", borderRadius: "50%" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
