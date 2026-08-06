import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: "#home", label: "home" },
    { href: "#about", label: "about" },
    { href: "#experience", label: "experience" },
    { href: "#skills", label: "skills" },
    { href: "#projects", label: "projects" },
    { href: "#contact", label: "contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1CQ42Huf09wpwGEvzCFdOq-hSwpHU7n--/view?usp=sharing";
    window.open(resumeUrl, "_blank");
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-term-bg/95 backdrop-blur-md border-term-border"
            : "bg-term-bg/80 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-2 font-mono text-lg"
            >
              <span className="text-term-text font-semibold">yks</span>
              <span className="text-term-accent">.dev</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-term-muted hover:text-term-accent transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleResumeDownload}
                className="flex items-center gap-2 border border-term-border text-term-text px-4 py-2 rounded hover:border-term-accent hover:text-term-accent transition-all duration-200"
              >
                <Download size={14} />
                <span>resume.pdf</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-term-text z-60 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="absolute top-20 left-4 right-4 bg-term-surface border border-term-border rounded-lg shadow-2xl font-mono">
            <nav className="p-6">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-term-muted hover:text-term-accent transition-colors duration-200 text-left py-2.5 px-3 rounded hover:bg-term-surface-hi flex items-center gap-2"
                  >
                    <span className="text-term-dim">$</span>
                    <span>cd {item.label}</span>
                  </button>
                ))}
                <button
                  onClick={handleResumeDownload}
                  className="flex items-center justify-center gap-2 border border-term-border text-term-text px-4 py-3 rounded hover:border-term-accent hover:text-term-accent transition-all duration-200 mt-4"
                >
                  <Download size={14} />
                  <span>resume.pdf</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
