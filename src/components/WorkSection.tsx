import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern shopping experience with fluid animations",
    category: "Web Design",
  },
  {
    title: "Mobile Banking App",
    description: "Intuitive financial management interface",
    category: "App Design",
  },
  {
    title: "SaaS Dashboard",
    description: "Data visualization with clarity and precision",
    category: "UI/UX",
  },
  {
    title: "Brand Identity",
    description: "Complete visual system for tech startup",
    category: "Branding",
  },
  {
    title: "Portfolio Website",
    description: "Minimalist showcase with dynamic interactions",
    category: "Web Design",
  },
  {
    title: "Design System",
    description: "Scalable component library for enterprise",
    category: "Systems",
  },
];

export const WorkSection = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-heading font-bold mb-4 text-center"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          Selected Work
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A collection of recent projects showcasing my approach to digital design
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/30 transition-all duration-300 overflow-hidden cursor-pointer"
              style={{
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Thumbnail placeholder */}
              <div
                className="aspect-video bg-secondary/50 group-hover:bg-secondary/70 transition-all duration-300 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(143, 255, 0, 0.05) 0%, rgba(0, 0, 0, 0.3) 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center"
                    style={{
                      boxShadow: "0 0 24px rgba(143, 255, 0, 0.4)",
                    }}
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
          ))}
        </div>
      </div>
    </section>
  );
};
