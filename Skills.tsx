import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { SKILLS, CERTIFICATIONS } from "@/data/skills";

const ACCENT = "#00ff88";

export default function Skills() {
  return (
    <Section id="skills">
      <div style={{ paddingBottom: 80 }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: ACCENT, marginBottom: 8 }}>02. skills</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800 }}>Tech Stack &amp; Certs</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginBottom: 48 }}>
          {Object.entries(SKILLS).map(([cat, skills]) => (
            <div key={cat} style={{ background: "#0d1117", border: "1px solid #ffffff0d", borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 12, color: ACCENT, fontFamily: "'JetBrains Mono', monospace", marginBottom: 16, letterSpacing: "0.08em" }}>
                {cat.toUpperCase()}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skills.map((s) => (
                  <span key={s}
                    style={{ background: "#ffffff08", border: "1px solid #ffffff12", color: "#cbd5e1", padding: "5px 12px", borderRadius: 6, fontSize: 12, transition: "all 0.2s", fontFamily: "inherit" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 14, color: "#64748b", marginBottom: 16 }}>Certifications</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {CERTIFICATIONS.map((c) => (
              <div key={c}
                style={{ borderLeft: "2px solid #ffffff15", paddingLeft: 16, paddingTop: 8, paddingBottom: 8, fontSize: 13, color: "#94a3b8", transition: "all 0.2s" }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
