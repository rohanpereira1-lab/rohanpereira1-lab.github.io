import { useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const LINKS = [
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "education", label: "Education", href: "#education" },
  { id: "highlights", label: "Highlights", href: "#highlights" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const go = (href) => {
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      data-testid="navbar"
      className="fixed top-0 inset-x-0 z-40 border-b border-line bg-[#F4F4F0]/90 backdrop-blur-xl"
    >
      <div className="px-6 md:px-12 lg:px-24 h-16 md:h-20 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => go("#hero")}
          className="font-serif text-xl md:text-2xl tracking-tight"
        >
          Peterson Pereira<span className="text-teal">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.href)}
              className="group relative text-sm tracking-wide text-muted-foreground hover:text-ink transition-colors duration-300"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-full bg-teal scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </button>
          ))}
          <button
            data-testid="nav-contact-button"
            onClick={() => go("#contact")}
            className="bg-teal text-paper px-5 py-2.5 text-sm tracking-wide hover:bg-teal-dark transition-colors duration-300"
          >
            Get in Touch
          </button>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="md:hidden border-t border-line bg-paper px-6 py-6 flex flex-col gap-5"
        >
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-mobile-link-${l.id}`}
              onClick={() => go(l.href)}
              className="text-left font-serif text-2xl tracking-tight"
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="nav-mobile-contact-button"
            onClick={() => go("#contact")}
            className="bg-teal text-paper px-5 py-3 text-sm tracking-wide mt-2 self-start"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
};
