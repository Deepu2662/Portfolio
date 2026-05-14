interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

const ACCENT = "#00ff88";

export default function Button({ children, onClick, variant = "primary", className = "" }: ButtonProps) {
  const styles: Record<string, React.CSSProperties> = {
    primary: { background: ACCENT, color: "#080c10", border: "none" },
    outline: { background: "transparent", color: "#e2e8f0", border: "1px solid #ffffff20" },
    ghost: { background: "transparent", color: ACCENT, border: `1px solid ${ACCENT}` },
  };

  return (
    <button
      onClick={onClick}
      style={{ ...styles[variant], padding: "12px 28px", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 14, transition: "all 0.2s", fontFamily: "inherit" }}
      className={`hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </button>
  );
}
