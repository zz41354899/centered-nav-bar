import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax effect: elements move at different speeds
  const parallaxOffset = scrollY * 0.5;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Parallax gradient overlay */}
      <div
        className="absolute inset-0 opacity-30 transition-transform duration-100"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          background:
            "radial-gradient(circle at 50% 50%, rgba(143, 255, 0, 0.08) 0%, transparent 50%)",
        }}
      />

      {/* Secondary parallax layer */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${parallaxOffset * 0.3}px)`,
          background:
            "radial-gradient(circle at 30% 70%, rgba(143, 255, 0, 0.05) 0%, transparent 40%)",
        }}
      />

      <div
        className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in"
        style={{
          transform: `translateY(${parallaxOffset * -0.2}px)`,
        }}
      >
        <h1
          className="font-heading font-bold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
          }}
        >
          Crafting Digital
          <br />
          <span className="text-primary">Experiences</span>
        </h1>

        <p
          className="text-muted-foreground mb-12 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            maxWidth: "720px",
            margin: "0 auto 3rem",
          }}
        >
          UI Designer specializing in minimalist aesthetics, fluid motion, and
          user-centered design principles.
        </p>

        <div className="flex flex-wrap gap-4 justify-center w-full">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-all duration-200 hover:scale-105 sm:w-auto w-full"
            style={{
              boxShadow: "0 0 24px rgba(143, 255, 0, 0.3)",
            }}
            onClick={() => {
              const element = document.getElementById("work");
              if (element) {
                const offset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 border-white/12 text-foreground hover:bg-white/20 hover:text-white font-medium transition-all duration-200 hover:scale-105 sm:w-auto w-full"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                const offset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
