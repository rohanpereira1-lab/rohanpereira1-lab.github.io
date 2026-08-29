export const scrollToSection = (target) => {
  const el = document.querySelector(target);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -70, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
