"use client";
import { useEffect, useState } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Blog", "Contact"];
const ACCENT = "#00ff88";

export default function Navbar() {
  const [active, setActive] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      NAV_LINKS.forEach((n) => {
        const sec = document.getElementById(n.toLowerCase());
        if (sec && scrollY >= sec.offsetTop) setActive(n);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "#080c10ee", backdropFilter: "blur(12px)", borderBottom: "1px solid #ffffff0a" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, color: ACCENT }}>
          {"<Alex />"}
        </span>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {NAV_LINKS.map((n) => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              style={{
                background: "none", border: "none",
                color: active === n ? ACCENT : "#94a3b8",
                cursor: "pointer", fontSize: 13, fontWeight: 500,
                letterSpacing: "0.02em", transition: "color 0.2s", fontFamily: "inherit",
              }}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            style={{ background: "transparent", border: `1px solid ${ACCENT}`, color: ACCENT, padding: "7px 18px", borderRadius: 6, cursor: "pointer", fontSize: 13, fontWeight: 500, transition: "all 0.2s", fontFamily: "inherit" }}
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
