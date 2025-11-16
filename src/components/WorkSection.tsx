import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern shopping experience with fluid animations",
    category: "Web Design",
    image: "https://via.placeholder.com/500x300/CCCCCC/808080?text=E-Commerce",
  },
  {
    title: "Mobile Banking App",
    description: "Intuitive financial management interface",
    category: "App Design",
    image: "https://via.placeholder.com/500x300/CCCCCC/808080?text=Banking+App",
  },
  {
    title: "SaaS Dashboard",
    description: "Data visualization with clarity and precision",
    category: "UI/UX",
    image: "https://via.placeholder.com/500x300/CCCCCC/808080?text=Dashboard",
  },
  {
    title: "Brand Identity",
    description: "Complete visual system for tech startup",
    category: "Branding",
    image: "https://via.placeholder.com/500x300/CCCCCC/808080?text=Brand+Identity",
  },
  {
    title: "Portfolio Website",
    description: "Minimalist showcase with dynamic interactions",
    category: "Web Design",
    image: "https://via.placeholder.com/500x300/CCCCCC/808080?text=Portfolio",
  },
  {
    title: "Design System",
    description: "Scalable component library for enterprise",
    category: "Systems",
    image: "https://via.placeholder.com/500x300/CCCCCC/808080?text=Design+System",
  },
];

export const WorkSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="work"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-heading font-bold mb-4 text-center text-3xl sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A collection of recent projects showcasing my approach to digital design
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group bg-card border-border hover:border-primary/30 transition-all duration-300 overflow-hidden cursor-pointer">
                {/* Thumbnail placeholder */}
                <div
                  className="aspect-video bg-secondary/50 group-hover:bg-secondary/70 transition-all duration-300 relative overflow-hidden"
                  style={{
                    background: `url('${project.image}') center/cover no-repeat`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shadow-[0_0_24px_rgba(143,255,0,0.4)]"
                    >
                      <span className="text-primary text-2xl">→</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-medium text-primary mb-2 tracking-wide">
                    {project.category}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
