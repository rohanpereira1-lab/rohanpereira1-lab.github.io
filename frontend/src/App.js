import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeBand } from "@/components/MarqueeBand";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Highlights } from "@/components/Highlights";
import { Contact } from "@/components/Contact";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink font-sans antialiased">
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBand />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Highlights />
        <Contact />
      </main>
    </div>
  );
}

export default App;
