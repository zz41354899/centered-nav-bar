import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
  const [userSelectedSection, setUserSelectedSection] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // If user recently selected a section, keep it active
      if (userSelectedSection) {
        return;
      }

      // Determine active section - check which section is most visible
      const sections = ["about", "work", "process", "contact"];
      let maxVisibility = 0;
      let currentSection = "";
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Calculate how much of the section is visible in the viewport
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(window.innerHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          // If this section is more visible than the current one, update
          if (visibleHeight > maxVisibility) {
            maxVisibility = visibleHeight;
            currentSection = section;
          }
        }
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [userSelectedSection]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    // Remove # from href if present
    const targetId = href.startsWith('#') ? href.slice(1) : href;
    
    // Immediately set active section and mark as user-selected
    setActiveSection(targetId);
    setUserSelectedSection(targetId);
    
    // Clear user selection after 1.5 seconds to allow auto-detection again
    setTimeout(() => {
      setUserSelectedSection(null);
    }, 1500);
    
    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(targetId);
      
      if (element) {
        const offset = 100; // Account for fixed nav height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        console.error(`Element with id "${targetId}" not found`);
        // Fallback: try with original href
        const fallbackElement = document.querySelector(href);
        if (fallbackElement) {
          const offset = 100;
          const elementPosition = fallbackElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }, 50); // 50ms delay
  };

  return (
    <>
      <motion.nav
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 md:px-8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative w-full max-w-2xl">
          {/* Glass-morphism pill with neon green border */}
          <motion.div
            className="flex flex-col gap-0 rounded-3xl border border-white/20 bg-black/40 backdrop-blur-2xl shadow-[0_0_20px_rgba(143,255,0,0.15),0_8px_32px_rgba(0,0,0,0.4)]"
          >
            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between gap-4 sm:gap-8 px-8 sm:px-16 md:px-20 py-4 rounded-t-3xl border-b border-white/10">
              {/* Logo/Name */}
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#hero");
                }}
                className="font-heading font-bold text-lg sm:text-lg tracking-tight text-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                Portfolio
              </a>

              {/* Mobile Hamburger */}
              <Button
                variant="ghost"
                size="icon"
                className="sm:hidden text-foreground hover:text-primary hover:bg-transparent flex-shrink-0"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>

              {/* Desktop Navigation */}
              <motion.div
                className="hidden sm:flex items-center gap-8 ml-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      "relative font-medium text-sm tracking-[0.05em] transition-all duration-200",
                      "hover:scale-105 hover:text-primary",
                      activeSection === item.href.slice(1)
                        ? "text-primary"
                        : "text-foreground"
                    )}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary shadow-[0_0_8px_rgba(143,255,0,0.6)]"
                        layoutId="underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                      />
                    )}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Mobile Menu - Extends Below */}
            {isMobile && mobileMenuOpen && (
              <motion.div
                className="flex flex-col gap-3 px-8 py-4 border-t border-white/10 rounded-b-3xl"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      "text-lg font-heading font-semibold transition-all duration-300 py-2 px-4 rounded-lg",
                      "hover:bg-white/20 hover:text-white hover:scale-105",
                      activeSection === item.href.slice(1) ? "text-primary" : "text-foreground"
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};
