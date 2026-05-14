import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepu N | Data Analyst",
  description: "Portfolio of Deepu N — Aspiring Data Analyst in Chennai, India.",
  openGraph: {
    title: "Deepu N | Data Analyst",
    description: "Portfolio of Deepu N — Aspiring Data Analyst.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
