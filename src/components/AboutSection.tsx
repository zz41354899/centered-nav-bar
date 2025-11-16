import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        "py-32 px-6 opacity-0 transition-all duration-1000",
        isVisible && "opacity-100 animate-fade-in-up"
      )}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-heading font-bold mb-8 text-center"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          About Me
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}>
            I'm a UI designer driven by the belief that great design is invisible—it
            simply works. My approach combines minimalist aesthetics with functional
            clarity, creating interfaces that feel both premium and effortless.
          </p>

          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}>
            With a focus on motion, typography, and spatial rhythm, I craft digital
            experiences that prioritize user needs while maintaining visual elegance.
            Every project is an opportunity to refine, simplify, and elevate.
          </p>

          <div className="pt-8 border-t border-border">
            <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">
              Design Philosophy
            </h3>
            <p className="text-muted-foreground" style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}>
              Less is more. Clarity over complexity. Motion with purpose. Every
              element should earn its place, and every interaction should feel
              natural and refined.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
