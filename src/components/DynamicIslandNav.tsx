import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const DynamicIslandNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out",
          scrolled && "scale-95 opacity-90"
        )}
      >
        <div className="relative">
          {/* Glass-morphism pill with neon green border */}
          <div
            className="flex items-center gap-8 px-6 md:px-8 py-4 rounded-full backdrop-blur-xl bg-black/55 border border-white/12"
            style={{
              boxShadow: "0 0 20px rgba(143, 255, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.4)",
            }}
          >
            {/* Logo/Name */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="font-heading font-bold text-lg tracking-tight text-foreground hover:text-primary transition-colors duration-200"
            >
              Portfolio
            </a>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
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

            {/* Mobile Hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:text-primary hover:bg-transparent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 z-40 bg-black/90 backdrop-blur-xl transition-all duration-300",
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-6">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  "text-3xl font-heading font-semibold transition-all duration-300",
                  "hover:text-primary hover:scale-110",
                  activeSection === item.href.slice(1) ? "text-primary" : "text-foreground",
                  mobileMenuOpen && "animate-fade-in"
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
