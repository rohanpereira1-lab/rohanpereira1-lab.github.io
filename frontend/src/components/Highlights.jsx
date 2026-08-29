import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  {
    title: "Recruitment Transformation",
    metric: "55 → 35",
    metricLabel: "days Time-to-Fill",
    body: "Led a global TA transformation that cut Time-to-Fill by 30%, reduced hiring costs by 18%, and lifted Demand Fulfillment to 85%.",
    featured: true,
  },
  {
    title: "Talent Acquisition Excellence Award",
    body: "Winner — recognized for excellence in talent acquisition leadership and hiring innovation.",
  },
  {
    title: "Enterprise Platform Rollout",
    body: "Implemented LinkedIn Recruiter and TalentBin enterprise platforms across global recruiting teams.",
  },
  {
    title: "Quality & Employer Brand",
    body: "Raised Quality-of-Hire from 65% to 80% and grew qualified inbound applications 40% through employer branding.",
  },
  {
    title: "Global TA Capability",
    body: "Built distributed talent acquisition teams across India, the USA, and Ethiopia — cutting vendor dependency by 35%.",
  },
  {
    title: "Governance & Analytics",
    body: "Established hiring governance frameworks, recruitment KPIs, workforce analytics, and executive dashboards.",
  },
];

export const Highlights = () => (
  <section
    id="highlights"
    data-testid="highlights-section"
    className="px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40 bg-surface border-y border-line"
  >
    <SectionHeader number="05" title="Highlights" />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
      {ITEMS.map((item, i) => (
        <Reveal
          key={item.title}
          delay={i * 0.06}
          className={item.featured ? "md:col-span-2" : ""}
          testId={`highlight-card-${i}`}
        >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="h-full bg-paper p-8 md:p-10 group"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </p>
            {item.featured && (
              <div className="mt-6 flex items-baseline gap-4">
                <span className="font-serif text-5xl md:text-7xl text-teal tracking-tighter">
                  {item.metric}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {item.metricLabel}
                </span>
              </div>
            )}
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight mt-6 group-hover:text-teal transition-colors duration-300">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground max-w-xl">
              {item.body}
            </p>
          </motion.div>
        </Reveal>
      ))}
    </div>
  </section>
);
