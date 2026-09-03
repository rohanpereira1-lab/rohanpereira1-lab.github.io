import { ArrowUpRight, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export const Contact = () => (
  <section
    id="contact"
    data-testid="contact-section"
    className="bg-ink text-paper px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40"
  >
    <SectionHeader number="06" title="Contact" dark />

    <Reveal testId="contact-intro">
      <p className="text-xs uppercase tracking-[0.25em] text-teal font-semibold">
        Say hello
      </p>
      <a
        data-testid="contact-email-link"
        href="mailto:rohan.pereira1@gmail.com"
        className="group mt-6 inline-flex items-center gap-3 md:gap-5 font-serif text-[clamp(1.7rem,4.5vw,3.75rem)] leading-tight tracking-tight hover:text-teal transition-colors duration-300 break-all"
      >
        rohan.pereira1@gmail.com
        <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-teal shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </Reveal>

    <div className="mt-16 md:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-paper/15 pt-12">
      <Reveal testId="contact-phone" delay={0.05}>
        <p className="text-xs uppercase tracking-[0.2em] text-paper/50 mb-3 inline-flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-teal" /> Phone
        </p>
        <a
          href="tel:+919601649627"
          className="font-serif text-xl hover:text-teal transition-colors duration-300"
        >
          +91 96016 49627
        </a>
      </Reveal>

      <Reveal testId="contact-location" delay={0.1}>
        <p className="text-xs uppercase tracking-[0.2em] text-paper/50 mb-3 inline-flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-teal" /> Location
        </p>
        <p className="font-serif text-xl">Ahmedabad, India</p>
      </Reveal>

      <Reveal testId="contact-linkedin" delay={0.15}>
        <p className="text-xs uppercase tracking-[0.2em] text-paper/50 mb-3 inline-flex items-center gap-2">
          <Linkedin className="w-3.5 h-3.5 text-teal" /> LinkedIn
        </p>
        <a
          data-testid="contact-linkedin-link"
          href="https://linkedin.com/in/pereirapeterson"
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-xl hover:text-teal transition-colors duration-300"
        >
          /in/pereirapeterson
        </a>
      </Reveal>

      <Reveal testId="contact-github" delay={0.2}>
        <p className="text-xs uppercase tracking-[0.2em] text-paper/50 mb-3 inline-flex items-center gap-2">
          <Github className="w-3.5 h-3.5 text-teal" /> GitHub
        </p>
        <a
          data-testid="contact-github-link"
          href="https://github.com/rohanpereira1-lab"
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-xl hover:text-teal transition-colors duration-300"
        >
          /rohanpereira1-lab
        </a>
      </Reveal>
    </div>

    <div className="mt-20 md:mt-28 border-t border-paper/15 pt-8 flex flex-col md:flex-row justify-between gap-3 text-xs tracking-wide text-paper/40">
      <p data-testid="footer-copyright">© 2026 Peterson Pereira</p>
      <p>Global Talent Acquisition · Talent Strategy · Workforce Planning</p>
    </div>
  </section>
);
