"use client";
import { motion } from "framer-motion";

export const transitionMotion = {
  transition: {
    duration: 3,
    type: "spring",
  },
  initial: {
    opacity: 0,
    botton: "5rem",
    transform: "transalateY(200px)",
  },
  whileInView: {
    opacity: 1,
    transform: "translateY(0px)",
  },
};

export function MotionTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      transition={transitionMotion.transition}
      initial={transitionMotion.initial}
      whileInView={transitionMotion.whileInView}
    >
      {children}
    </motion.section>
  );
}
