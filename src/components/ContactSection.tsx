import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="font-heading font-bold mb-6"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          Let's Work Together
        </h2>

        <p
          className="text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto"
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
          }}
        >
          I'm currently available for freelance projects and collaborations.
          Whether you need a complete design system or a refined user interface,
          I'd love to hear about your vision.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-all duration-200 hover:scale-105"
            style={{
              boxShadow: "0 0 24px rgba(143, 255, 0, 0.3)",
            }}
          >
            Send Email
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 border-white/12 text-foreground hover:bg-white/5 font-medium transition-all duration-200 hover:scale-105"
          >
            View Resume
          </Button>
        </div>
      </div>
    </section>
  );
};
