"use client";
import { useTypewriter } from "@/hooks/useTypewriter";

const ACCENT = "#00ff88";
const ACCENT2 = "#00cfff";
const ROLES = ["Full Stack Engineer", "ML Enthusiast", "Open Source Builder", "Problem Solver"];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 60, alignItems: "center", width: "100%" }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: ACCENT, marginBottom: 16, letterSpacing: "0.1em" }}>
            {"// hello world"}
          </div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(42px, 5vw, 68px)", fontWeight: 800, lineHeight: 1.05, marginBottom: 16 }}>
            Alex<br />
            <span style={{ color: "#ffffff40" }}>Kumar</span>
          </h1>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(16px, 2vw, 22px)", color: ACCENT2, marginBottom: 24, minHeight: 32 }}>
            {typed}
            <span style={{ borderRight: `2px solid ${ACCENT2}`, marginLeft: 2, animation: "blink 1s step-end infinite" }}>&nbsp;</span>
          </div>
          <p style={{ color: "#94a3b8", lineHeight: 1.75, fontSize: 15, maxWidth: 520, marginBottom: 36 }}>
            Engineer who builds things end-to-end — from pixel-perfect UIs to ML pipelines.
            I care about clean architecture, fast systems, and solving real problems.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("projects")}
              style={{ background: ACCENT, color: "#080c10", border: "none", padding: "12px 28px", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 14, transition: "all 0.2s", fontFamily: "inherit" }}>
              View Projects
            </button>
            <button onClick={() => scrollTo("contact")}
              style={{ background: "transparent", color: "#e2e8f0", border: "1px solid #ffffff20", padding: "12px 28px", borderRadius: 8, cursor: "pointer", fontWeight: 500, fontSize: 14, transition: "all 0.2s", fontFamily: "inherit" }}>
              Get in Touch
            </button>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 40 }}>
            {[["GitHub", "↗", "#"], ["LinkedIn", "↗", "#"], ["Resume", "↓", "/resume.pdf"]].map(([label, icon, href]) => (
              <a key={label} href={href}
                style={{ color: "#64748b", fontSize: 13, textDecoration: "none", display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}>
                {label} <span style={{ fontSize: 10 }}>{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Stats Card */}
        <div style={{ background: "#0d1117", border: "1px solid #ffffff0d", borderRadius: 16, padding: 32, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, background: `${ACCENT}0a`, borderRadius: "50%", filter: "blur(40px)" }} />
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#475569", marginBottom: 20 }}>stats.json</div>
          {[["Projects Built", "12+"], ["Technologies", "20+"], ["Open Source", "5 repos"], ["Experience", "1.5 yrs"]].map(([label, val]) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #ffffff08", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: 13 }}>{label}</span>
              <span style={{ color: ACCENT, fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{val}</span>
            </div>
          ))}
          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 11, color: "#475569", fontFamily: "'JetBrains Mono', monospace", marginBottom: 8 }}>availability</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: ACCENT, display: "inline-block", boxShadow: `0 0 8px ${ACCENT}` }} />
              <span style={{ color: ACCENT, fontSize: 13 }}>Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
