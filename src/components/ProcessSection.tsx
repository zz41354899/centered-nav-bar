import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

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

  return (
    <section
      id="process"
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        "py-32 px-6 bg-secondary/20 opacity-0 transition-all duration-1000",
        isVisible && "opacity-100 animate-fade-in-up"
      )}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-heading font-bold mb-4 text-center"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          My Process
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A structured approach to delivering exceptional design solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "relative group opacity-0",
                isVisible && "animate-fade-in"
              )}
              style={{
                animationDelay: isVisible ? `${index * 150}ms` : "0ms",
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="text-center">
                <div
                  className="inline-block mb-6 text-6xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300"
                  style={{
                    textShadow: "0 0 30px rgba(143, 255, 0, 0.2)",
                  }}
                >
                  {step.number}
                </div>

                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-primary/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
