export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #ffffff08", padding: "24px", textAlign: "center" }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#334155" }}>
        Built with Next.js + TypeScript &nbsp;·&nbsp; &copy; {new Date().getFullYear()} Alex Kumar
      </span>
    </footer>
  );
}
