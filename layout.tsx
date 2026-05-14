import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Kumar | Full Stack & ML Engineer",
  description: "Portfolio of Alex Kumar — Full Stack Developer & ML Engineer based in Bangalore, India.",
  openGraph: {
    title: "Alex Kumar | Full Stack & ML Engineer",
    description: "Portfolio of Alex Kumar — Full Stack Developer & ML Engineer.",
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
