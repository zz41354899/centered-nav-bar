export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </div>

          <div className="flex gap-6">
            {["LinkedIn", "Dribbble", "Behance", "Twitter"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
