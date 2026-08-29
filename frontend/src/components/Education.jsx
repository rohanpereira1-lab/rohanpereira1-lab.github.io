import { BadgeCheck, GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const EDUCATION = [
  {
    year: "2000",
    title: "S.S.C. — Distinction (70%)",
    school: "St. Xavier's High School, Gujarat Board",
  },
  {
    year: "2001",
    title: "H.S.C. — Distinction (74%)",
    school: "St. Xavier's High School, Gujarat Board",
  },
  {
    year: "2004",
    title: "Bachelor of Commerce — Grade II",
    school: null,
  },
  {
    year: "2006",
    title: "Diploma in Financial Banking & Derivatives — A+",
    school: null,
  },
];

const CERTIFICATIONS = [
  {
    title: "Certified Recruitment Professional",
    org: "Ma Foi Management Ltd.",
  },
];

export const Education = () => (
  <section
    id="education"
    data-testid="education-section"
    className="px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40"
  >
    <SectionHeader number="04" title="Education & Certifications" />

    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-7" data-testid="education-list">
        <p className="text-xs uppercase tracking-[0.2em] text-teal font-bold mb-6 inline-flex items-center gap-2">
          <GraduationCap className="w-4 h-4" /> Education
        </p>
        {EDUCATION.map((e, i) => (
          <Reveal
            key={e.title}
            delay={i * 0.06}
            className="border-t border-line py-7 flex gap-6 md:gap-10 items-baseline"
            testId={`education-item-${i}`}
          >
            <span className="font-serif text-2xl md:text-3xl text-teal tracking-tight shrink-0 w-16 md:w-20">
              {e.year}
            </span>
            <div>
              <h3 className="font-serif text-xl md:text-2xl tracking-tight">
                {e.title}
              </h3>
              {e.school && (
                <p className="text-sm text-muted-foreground mt-1">{e.school}</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="lg:col-span-5" data-testid="certifications-list">
        <p className="text-xs uppercase tracking-[0.2em] text-teal font-bold mb-6 inline-flex items-center gap-2">
          <BadgeCheck className="w-4 h-4" /> Certifications
        </p>
        {CERTIFICATIONS.map((c, i) => (
          <Reveal
            key={c.title}
            delay={0.1 + i * 0.06}
            className="border border-line bg-surface p-8"
            testId={`certification-item-${i}`}
          >
            <h3 className="font-serif text-xl md:text-2xl tracking-tight">
              {c.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-2">{c.org}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
