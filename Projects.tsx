import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { PROJECTS } from "@/data/projects";

const ACCENT = "#00ff88";
const ACCENT2 = "#00cfff";

export default function Projects() {
  return (
    <Section id="projects">
      <div style={{ paddingBottom: 80 }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: ACCENT, marginBottom: 8 }}>03. projects</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800 }}>Things I&apos;ve Built</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {PROJECTS.map((p) => (
            <div key={p.title}
              style={{ background: "#0a0f14", border: "1px solid #ffffff0d", borderRadius: 12, padding: 28, transition: "all 0.25s", cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                <Tag label={p.tag} color={ACCENT} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#475569" }}>{p.year}</span>
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 10, color: "#f1f5f9" }}>{p.title}</h3>
              <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.65, marginBottom: 18 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.stack.map((s) => (
                  <span key={s} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: ACCENT2, background: `${ACCENT2}10`, padding: "3px 8px", borderRadius: 4 }}>{s}</span>
                ))}
              </div>
              <div style={{ marginTop: 20, display: "flex", gap: 16 }}>
                <a href={p.github || "#"} style={{ fontSize: 12, color: "#475569", textDecoration: "none", transition: "color 0.2s" }}>GitHub ↗</a>
                <a href={p.demo || "#"} style={{ fontSize: 12, color: "#475569", textDecoration: "none", transition: "color 0.2s" }}>Live Demo ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
