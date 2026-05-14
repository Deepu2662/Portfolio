interface TagProps {
  label: string;
  color?: string;
}

export default function Tag({ label, color = "#00ff88" }: TagProps) {
  return (
    <span
      style={{
        border: `1px solid ${color}33`,
        color,
        background: `${color}11`,
      }}
      className="text-xs px-2 py-0.5 rounded-full font-mono tracking-wide"
    >
      {label}
    </span>
  );
}
