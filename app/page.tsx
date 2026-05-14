import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main style={{ background: "#080c10", color: "#e2e8f0", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
