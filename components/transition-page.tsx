"use client"

import { transitionVariantsPage } from "@/utils/motion-transitions";
import { AnimatePresence,motion } from "framer-motion";


const TransitionPage = () => {
  return (
    <AnimatePresence mode = "wait">
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        variants={transitionVariantsPage}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.5 , duration: 0.6, ease: "easeInOut"}}
      ></motion.div>
    </AnimatePresence>
  );
};

export default TransitionPage;
