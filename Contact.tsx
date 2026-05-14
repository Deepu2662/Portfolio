"use client";
import { useState } from "react";
import Section from "@/components/ui/Section";

const ACCENT = "#00ff88";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <Section id="contact">
      <div style={{ paddingBottom: 100 }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: ACCENT, marginBottom: 8 }}>06. contact</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800 }}>Let&apos;s Work Together</h2>
          <p style={{ color: "#64748b", fontSize: 14, marginTop: 12 }}>Open to full-time roles, freelance projects, and interesting collaborations.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div>
            {sent ? (
              <div style={{ background: `${ACCENT}10`, border: `1px solid ${ACCENT}30`, borderRadius: 12, padding: 32, textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
                <div style={{ color: ACCENT, fontWeight: 500 }}>Message sent! I&apos;ll get back to you soon.</div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {(["name", "email"] as const).map((key) => (
                  <input key={key} type={key === "email" ? "email" : "text"}
                    placeholder={key === "name" ? "Your Name" : "Your Email"}
                    value={formData[key]}
                    onChange={(e) => setFormData((f) => ({ ...f, [key]: e.target.value }))}
                    style={{ background: "#0d1117", border: "1px solid #ffffff12", borderRadius: 8, padding: "14px 16px", color: "#e2e8f0", fontSize: 14, transition: "all 0.2s", fontFamily: "inherit" }} />
                ))}
                <textarea placeholder="Your Message" rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                  style={{ background: "#0d1117", border: "1px solid #ffffff12", borderRadius: 8, padding: "14px 16px", color: "#e2e8f0", fontSize: 14, resize: "vertical", transition: "all 0.2s", fontFamily: "inherit" }} />
                <button onClick={handleSubmit}
                  style={{ background: ACCENT, color: "#080c10", border: "none", padding: "14px 28px", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 14, transition: "all 0.2s", fontFamily: "inherit", alignSelf: "flex-start" }}>
                  Send Message →
                </button>
              </div>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              ["Email", "alex.kumar@email.com", ACCENT],
              ["LinkedIn", "linkedin.com/in/alexkumar", "#00cfff"],
              ["GitHub", "github.com/alexkumar", "#a78bfa"],
              ["Location", "Bangalore, India", "#f97316"],
            ].map(([label, val, color]) => (
              <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: `${color}15`, border: `1px solid ${color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 14, color }}>◈</span>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#475569", fontFamily: "'JetBrains Mono', monospace", marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 13, color: "#94a3b8" }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
