import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <footer
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 px-6 border-t border-border"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </div>

          <div className="flex gap-6">
            {["LinkedIn", "Dribbble", "Behance", "Twitter"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
