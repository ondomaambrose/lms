// src/lib/animations.ts
import type { Variants } from "framer-motion";

export const animations = {
  // GLIDE: For the Sidebar (No stagger, just smooth movement)
  sidebar: {
    open: {
      width: 256,
      transition: { type: "tween", ease: "easeInOut", duration: 0.1 },
    },
    closed: {
      width: 0,
      transition: { type: "tween", ease: "easeInOut", duration: 0.1 },
    },
  } as Variants,

  // SLIDE: For the Status Bar
  header: {
    hidden: { y: -64, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "tween", ease: "easeOut", duration: 0.3 },
    },
  } as Variants,

  pageContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }, // Very fast stagger
    },
  } as Variants,

  pageItem: {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  } as Variants,
};
