import Marquee from "react-fast-marquee";
import { Asterisk } from "lucide-react";

const WORDS = [
  "Talent Acquisition",
  "Leadership",
  "Culture",
  "Workforce Planning",
  "Employer Branding",
  "Talent Intelligence",
];

export const MarqueeBand = () => (
  <section
    data-testid="marquee-band"
    className="border-y border-line bg-surface py-8 md:py-10 overflow-hidden"
  >
    <Marquee speed={35} gradient={false} pauseOnHover>
      {WORDS.map((w) => (
        <span key={w} className="flex items-center">
          <span className="font-serif text-3xl md:text-5xl text-ink/80 tracking-tight px-8 md:px-14">
            {w}
          </span>
          <Asterisk className="w-6 h-6 text-teal shrink-0" />
        </span>
      ))}
    </Marquee>
  </section>
);
