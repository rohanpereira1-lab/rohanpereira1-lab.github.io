import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const HERO_IMG = "/peterson-pereira.png";

const maskLine = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1.1, delay: 0.2 + i * 0.14, ease: [0.76, 0, 0.24, 1] },
  }),
};

const MaskedLine = ({ index, className, children, testId }) => (
  <span className="block overflow-hidden">
    <motion.span
      className={`block ${className}`}
      data-testid={testId}
      variants={maskLine}
      initial="hidden"
      animate="show"
      custom={index}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  return (
    <section
      id="hero"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      <div className="w-full px-6 md:px-12 lg:px-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center py-16 md:py-20">
        <div className="lg:col-span-7">
          <MaskedLine index={0} testId="hero-overline">
            <span className="text-xs uppercase tracking-[0.25em] text-teal font-semibold">
              Global Talent Acquisition Leader
            </span>
          </MaskedLine>

          <h1
            data-testid="hero-name"
            className="font-serif font-medium text-ink leading-[0.9] tracking-tighter text-[clamp(3rem,8vw,5.5rem)] mt-6"
          >
            <MaskedLine index={1}>Peterson</MaskedLine>
            <MaskedLine index={2}>
              Pereira<span className="text-teal">.</span>
            </MaskedLine>
          </h1>

          <MaskedLine index={3} className="mt-8" testId="hero-headline">
            <span className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed block">
              Global Head — Talent Acquisition · Talent Strategy · Workforce
              Planning · Recruitment Transformation
            </span>
          </MaskedLine>

          <MaskedLine index={4} className="mt-4" testId="hero-tagline">
            <span className="font-serif italic text-lg md:text-xl text-ink/80 block">
              Building future-ready teams across India, North America, and
              Ethiopia.
            </span>
          </MaskedLine>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease: [0.76, 0, 0.24, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-experience-button"
              onClick={() => scrollToSection("#experience")}
              className="group inline-flex items-center gap-2 border border-ink px-6 py-3 text-sm tracking-wide hover:bg-ink hover:text-paper transition-colors duration-300"
            >
              View Experience
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              data-testid="hero-contact-button"
              onClick={() => scrollToSection("#contact")}
              className="bg-teal text-paper px-6 py-3 text-sm tracking-wide hover:bg-teal-dark transition-colors duration-300"
            >
              Get in Touch
            </button>
            <a
              data-testid="hero-resume-download"
              href="/Peterson-Pereira-Resume.pdf"
              download="Peterson-Pereira-Resume.pdf"
              className="group inline-flex items-center gap-2 px-2 py-3 text-sm tracking-wide text-muted-foreground hover:text-ink transition-colors duration-300"
            >
              <Download className="w-4 h-4 text-teal transition-transform duration-300 group-hover:translate-y-0.5" />
              Download Résumé
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
            data-testid="hero-meta"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-teal" /> Ahmedabad, India
            </span>
            <span>20+ Years</span>
            <span>3 Regions</span>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div style={{ y, opacity }} className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border border-teal/40 pointer-events-none" aria-hidden="true" />
              <div
                className="relative border border-line overflow-hidden aspect-[4/5] bg-surface"
                data-testid="hero-image-frame"
              >
                <img
                  src={HERO_IMG}
                  alt="Peterson Pereira — Global Talent Acquisition Leader"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-6 md:left-12 lg:left-24 flex items-center gap-3"
        data-testid="hero-scroll-cue"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-teal" />
        </motion.span>
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};
