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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
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
      "https://drive.google.com/file/d/1Z6njFFFAJyvZzV2Lp1y05hcWcIltTawn/view?usp=drive_link";
    window.open(resumeUrl, "_blank");
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
            : "bg-slate-900/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <span className="text-white font-bold text-xl">
                Yogesh Kumar Singh
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleResumeDownload}
                className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-green-500 transition-all duration-200 flex items-center space-x-2"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white z-60 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
            <nav className="p-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium text-left py-2 px-2 rounded-lg hover:bg-slate-800/50"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={handleResumeDownload}
                  className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-4 py-3 rounded-lg hover:from-blue-600 hover:to-green-500 transition-all duration-200 flex items-center justify-center space-x-2 mt-4"
                >
                  <Download size={16} />
                  <span>Resume</span>
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
