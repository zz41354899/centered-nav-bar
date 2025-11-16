import { useRef } from "react";
import { useInView } from "framer-motion";

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return { ref, isVisible };
};
