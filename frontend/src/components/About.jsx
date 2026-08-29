import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const STATS = [
  { value: "55 → 35", label: "Days Time-to-Fill" },
  { value: "78.5%", label: "Demand Fulfillment" },
  { value: "−25%", label: "Cost-per-Hire" },
  { value: "80%", label: "Quality-of-Hire" },
];

export const About = () => (
  <section
    id="about"
    data-testid="about-section"
    className="px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40"
  >
    <SectionHeader number="01" title="About" />

    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <Reveal className="lg:col-span-7" testId="about-summary">
        <p className="font-serif text-2xl md:text-3xl leading-snug tracking-tight text-ink">
          Global Talent Acquisition leader with 20+ years building and leading
          high-performing talent functions across India, North America, and
          Ethiopia.
        </p>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
          I partner with C-suite leaders to design scalable hiring strategies,
          establish Talent Acquisition Centers of Excellence, and build
          future-ready talent pipelines. My work sits at the intersection of
          analytics-driven decision-making and technology-enabled recruiting —
          measurably improving hiring quality, speed, and cost efficiency.
        </p>
      </Reveal>

      <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-line border border-line self-start" data-testid="about-stats">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className="bg-paper p-6 md:p-8"
            testId={`about-stat-${i}`}
          >
            <p className="font-serif text-3xl md:text-4xl text-teal tracking-tight">
              {s.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
