import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Research & Discovery",
    description:
      "Understanding user needs, business goals, and market context to inform design decisions.",
  },
  {
    number: "02",
    title: "Design & Iteration",
    description:
      "Creating high-fidelity mockups, prototypes, and motion studies through multiple refinement cycles.",
  },
  {
    number: "03",
    title: "Delivery & Support",
    description:
      "Providing detailed specifications, assets, and ongoing collaboration for seamless implementation.",
  },
];

export const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      id="process"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 px-6 bg-secondary/20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading font-bold mb-4 text-center"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          My Process
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A structured approach to delivering exceptional design solutions
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group text-center"
              variants={itemVariants}
            >
              <div className="mb-6">
                <div
                  className="inline-block text-6xl font-heading font-bold text-primary"
                >
                  {step.number}
                </div>
              </div>

              <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">
                {step.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
