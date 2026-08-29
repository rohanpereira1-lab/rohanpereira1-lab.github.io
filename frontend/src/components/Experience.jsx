import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const ROLES = [
  {
    dates: "Nov 2021 — Present",
    role: "Associate Vice President — Resource Management & Global Talent Acquisition",
    company: "Relevance Lab Technologies (formerly CIGNEX Technologies)",
    bullets: [
      "Lead global talent acquisition across India, North America, and Ethiopia — cut Time-to-Fill by 30% and hiring costs by 18%.",
      "Raised Demand Fulfillment to 85% and grew qualified inbound talent 40% through employer branding and AI-driven sourcing.",
    ],
  },
  {
    dates: "Oct 2015 — Oct 2021",
    role: "Senior Human Resources Manager",
    company: "CIGNEX Datamatics Technologies Pvt. Ltd.",
    bullets: [
      "Led talent acquisition, workforce planning, talent management, employee engagement, and leadership development.",
      "Established campus hiring programs and talent pipelines supporting long-term organizational growth.",
    ],
  },
  {
    dates: "Apr 2010 — Sep 2015",
    role: "Human Resources Manager",
    company: "CIGNEX Datamatics Technologies Pvt. Ltd.",
    bullets: [
      "Directed workforce planning, staffing, resource utilization, and internal mobility programs.",
      "Deployed workforce analytics frameworks that improved productivity, utilization, and project profitability.",
    ],
  },
  {
    dates: "May 2007 — Oct 2009",
    role: "Talent Acquisition Consultant",
    company: "Ma Foi Management Consultants (Randstad India)",
    bullets: [
      "Delivered executive search and market mapping across Technology, Telecom, and BFSI sectors.",
      "Closed 200+ professional and leadership positions at 90%+ client satisfaction.",
    ],
  },
  {
    dates: "Sep 2005 — May 2007",
    role: "Team Lead — Talent Acquisition",
    company: "Interactive Manpower Solutions",
    bullets: [
      "Led recruitment teams on mid- and senior-level hiring mandates across multiple industries.",
      "Built recruiter capability development and performance management programs.",
    ],
  },
];

export const Experience = () => (
  <section
    id="experience"
    data-testid="experience-section"
    className="px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40 bg-surface border-y border-line"
  >
    <SectionHeader number="02" title="Experience" />

    <div
      className="relative border-l border-line ml-1 md:ml-4 space-y-16 md:space-y-20"
      data-testid="experience-timeline"
    >
      {ROLES.map((r, i) => (
        <Reveal
          key={r.role}
          delay={0.05 * i}
          className="relative pl-10 md:pl-14"
          testId={`experience-item-${i}`}
        >
          <span
            className="absolute -left-[5px] top-2.5 w-[9px] h-[9px] bg-teal"
            aria-hidden="true"
          />
          <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">
            {r.dates}
          </p>
          <h3 className="font-serif text-2xl md:text-3xl tracking-tight mt-2 max-w-3xl">
            {r.role}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{r.company}</p>
          <ul className="mt-5 space-y-2.5 max-w-2xl">
            {r.bullets.map((b) => (
              <li
                key={b}
                className="flex gap-3 text-base leading-relaxed text-muted-foreground"
              >
                <span className="text-teal shrink-0">—</span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </section>
);
