import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { BLOGS } from "@/data/blog";

const ACCENT = "#00ff88";
const ACCENT2 = "#00cfff";

export default function Blog() {
  return (
    <Section id="blog">
      <div style={{ paddingBottom: 80 }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: ACCENT, marginBottom: 8 }}>05. blog</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800 }}>Writing</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {BLOGS.map((b, i) => (
            <a key={i} href={b.href || "#"}
              style={{ background: "#0d1117", border: "1px solid #ffffff0d", borderRadius: 12, padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", transition: "all 0.2s", textDecoration: "none" }}>
              <div>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8 }}>
                  <Tag label={b.tag} color={ACCENT2} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#475569" }}>{b.date}</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 500, color: "#e2e8f0" }}>{b.title}</h3>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0, marginLeft: 24 }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#475569" }}>{b.read}</span>
                <span style={{ color: "#475569", fontSize: 18 }}>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
