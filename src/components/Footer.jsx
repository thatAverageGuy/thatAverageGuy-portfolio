import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/thatAverageGuy", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yogi893/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:yogesh.singh893@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "about", href: "#about" },
    { name: "experience", href: "#experience" },
    { name: "skills", href: "#skills" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-term-bg border-t border-term-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand and Description */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 font-mono text-lg">
              <span className="text-term-text font-semibold">yks</span>
              <span className="text-term-accent">.dev</span>
            </div>

            <p className="text-term-muted leading-relaxed text-sm">
              Senior Software Engineer — ML &amp; Agentic AI. Turning tea into commits,
              and prompts into systems that hold up in production.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-xs text-term-dim mb-5">// navigate</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-term-muted hover:text-term-accent transition-colors duration-200 font-mono text-sm"
                  >
                    cd {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="font-mono text-xs text-term-dim mb-5">// connect</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-term-surface border border-term-border rounded-lg flex items-center justify-center text-term-muted hover:text-term-accent hover:border-term-accent/50 transition-all duration-200"
                    aria-label={social.label}
                  >
                    {React.createElement(social.icon, { size: 18 })}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="w-2 h-2 bg-term-ok rounded-full animate-pulse"></span>
                <span className="text-term-ok">available for consulting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-term-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-term-dim text-sm font-mono">
            © {currentYear} Yogesh Kumar Singh — all rights reserved
          </p>

          <div className="flex items-center gap-6">
            <span className="text-term-dim text-xs font-mono hidden sm:inline">
              built with React &amp; Tailwind, not vibes alone
            </span>
            <button
              onClick={scrollToTop}
              className="bg-term-surface border border-term-border text-term-text p-2 rounded-lg hover:border-term-accent hover:text-term-accent transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
