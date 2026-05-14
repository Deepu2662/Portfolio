import Section from "@/components/ui/Section";
import { EXPERIENCE } from "@/data/experience";

const ACCENT = "#00ff88";
const ACCENT2 = "#00cfff";

export default function Experience() {
  return (
    <Section id="experience">
      <div style={{ paddingBottom: 80 }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: ACCENT, marginBottom: 8 }}>04. experience</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800 }}>Career Timeline</h2>
        </div>
        <div style={{ position: "relative", paddingLeft: 32 }}>
          <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 1, background: `linear-gradient(to bottom, ${ACCENT}, ${ACCENT2}20)` }} />
          {EXPERIENCE.map((e, i) => (
            <div key={i} style={{ position: "relative", marginBottom: 44, paddingLeft: 28 }}>
              <div style={{ position: "absolute", left: -28, top: 6, width: 12, height: 12, borderRadius: "50%", background: ACCENT, boxShadow: `0 0 0 4px ${ACCENT}20` }} />
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#475569", marginBottom: 6 }}>{e.period}</div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 2 }}>{e.role}</h3>
              <div style={{ color: ACCENT2, fontSize: 13, marginBottom: 14 }}>{e.company}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                {e.points.map((pt, j) => (
                  <li key={j} style={{ color: "#94a3b8", fontSize: 13, display: "flex", gap: 10 }}>
                    <span style={{ color: ACCENT, marginTop: 1 }}>→</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
