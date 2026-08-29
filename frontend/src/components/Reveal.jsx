import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", testId }) => (
  <motion.div
    className={className}
    data-testid={testId}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] }}
  >
    {children}
  </motion.div>
);
