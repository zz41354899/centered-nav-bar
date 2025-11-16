import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-heading font-bold mb-8 text-center text-3xl sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="space-y-6 text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-base sm:text-lg md:text-xl">
            I'm a UI designer driven by the belief that great design is invisible—it
            simply works. My approach combines minimalist aesthetics with functional
            clarity, creating interfaces that feel both premium and effortless.
          </p>

          <p className="text-base sm:text-lg md:text-xl">
            With a focus on motion, typography, and spatial rhythm, I craft digital
            experiences that prioritize user needs while maintaining visual elegance.
            Every project is an opportunity to refine, simplify, and elevate.
          </p>

          <div className="pt-8 border-t border-border">
            <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">
              Design Philosophy
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
              Less is more. Clarity over complexity. Motion with purpose. Every
              element should earn its place, and every interaction should feel
              natural and refined.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
