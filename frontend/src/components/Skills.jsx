import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const CATEGORIES = [
  {
    name: "Talent Leadership",
    items: [
      "Global TA Strategy",
      "Workforce Planning",
      "Executive Search",
      "Succession Planning",
      "Employer Branding",
      "Diversity, Equity & Inclusion",
      "Change Management",
      "HR Business Partnering",
    ],
  },
  {
    name: "Platforms & Systems",
    items: [
      "Workday",
      "Greenhouse",
      "Taleo",
      "Zoho Recruit",
      "Naukri RMS",
      "Hiresome",
    ],
  },
  {
    name: "Sourcing & Talent Intelligence",
    items: [
      "LinkedIn Recruiter",
      "LinkedIn Talent Insights",
      "TalentBin",
      "AI-Based Assessments",
      "AI-Driven Recruiting",
    ],
  },
  {
    name: "Analytics & Reporting",
    items: [
      "Power BI",
      "Advanced Excel",
      "Recruitment Analytics",
      "Workforce Analytics",
      "People Analytics",
      "Talent Intelligence Dashboards",
    ],
  },
];

export const Skills = () => (
  <section
    id="skills"
    data-testid="skills-section"
    className="px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40"
  >
    <SectionHeader number="03" title="Skills" />

    <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
      {CATEGORIES.map((c, i) => (
        <Reveal
          key={c.name}
          delay={i * 0.08}
          className="border-t border-line pt-8"
          testId={`skills-category-${i}`}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-teal font-bold">
            {c.name}
          </p>
          <p className="mt-4 font-serif text-xl md:text-2xl leading-relaxed tracking-tight text-ink/90">
            {c.items.join("  ·  ")}
          </p>
        </Reveal>
      ))}
    </div>
  </section>
);
