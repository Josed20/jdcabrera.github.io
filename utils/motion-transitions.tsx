// utils/motion-transitions.ts
import type { Variants } from "framer-motion";

/** Overlay que entra desde la derecha, útil para transiciones de página */
export const transitionVariantsPage: Variants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "100%",     // si querías que se “encoga”, cambia a "0%"
    transition: { duration: 0.6, ease: [0.25, 0.6, 0.3, 0.8] },
  },
  exit: {
    x: "100%",
    width: "100%",
    transition: { duration: 0.6, ease: [0.25, 0.6, 0.3, 0.8] },
  },
};

/** Aparición tipo “sobre mí”: sube desde abajo con fade */
export const motionTransitionsAbout: Variants = {
  hidden: {
    opacity: 0,
    y: 200, // en vez de bottom/transform
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.3,
      type: "tween",
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

/** Fade + desplazamiento desde 'right' o 'bottom' */
export const fadeIn = (position: "right" | "bottom"): Variants => ({
  hidden: {
    opacity: 0,
    x: position === "right" ? 80 : 0,
    y: position === "bottom" ? 80 : 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.0,
      ease: [0.25, 0.25, 0.25, 0.25],
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "tween",
      duration: 1.4,
      delay: 0.1,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});
