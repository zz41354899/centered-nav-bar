import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const DynamicIslandNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ["about", "work", "process", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out",
        scrolled && "scale-95 opacity-90"
      )}
    >
      <div className="relative">
        {/* Glass-morphism pill with neon green border */}
        <div
          className="flex items-center gap-8 px-8 py-4 rounded-full backdrop-blur-xl bg-black/55 border border-white/12"
          style={{
            boxShadow: "0 0 20px rgba(143, 255, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Logo/Name */}
          <a
            href="#hero"
            className="font-heading font-bold text-lg tracking-tight text-foreground hover:text-primary transition-colors duration-200"
          >
            Portfolio
          </a>

          {/* Navigation Items */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "relative font-medium text-sm tracking-wide transition-all duration-200",
                  "hover:scale-105 hover:text-primary",
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-foreground/90"
                )}
                style={{
                  letterSpacing: "0.05em",
                }}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    style={{
                      boxShadow: "0 0 8px rgba(143, 255, 0, 0.6)",
                    }}
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
