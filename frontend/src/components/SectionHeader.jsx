import { Reveal } from "./Reveal";

export const SectionHeader = ({ number, title, dark = false }) => (
  <Reveal
    testId={`section-header-${number}`}
    className={`flex items-end gap-5 md:gap-8 pb-6 md:pb-8 mb-14 md:mb-20 border-b ${
      dark ? "border-paper/15" : "border-line"
    }`}
  >
    <span className="font-serif leading-[0.8] text-6xl md:text-8xl text-teal">
      {number}
    </span>
    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none pb-1 md:pb-2">
      {title}
    </h2>
  </Reveal>
);
