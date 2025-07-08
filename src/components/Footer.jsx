import React from "react";
import {
  Heart,
  Code,
  Coffee,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/thatAverageGuy",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yogi893/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:yogesh.singh893@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <span className="text-white font-bold text-xl">
                Yogesh Kumar Singh
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Senior ML Engineer at Cisco & AI Entrepreneur. Transforming ideas
              into intelligent solutions through cutting-edge AI research and
              practical applications.
            </p>

            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="text-red-400" size={16} />
              <span>and</span>
              <Code className="text-blue-400" size={16} />
              <span>powered by</span>
              <Coffee className="text-yellow-400" size={16} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-6">Let's Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-green-400 transition-all duration-200"
                    aria-label={social.label}
                  >
                    {React.createElement(social.icon, { size: 20 })}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">Current Status</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">
                  Available for consulting
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Yogesh Kumar Singh. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">
              Built with React, JavaScript & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-2 rounded-lg hover:from-blue-600 hover:to-green-500 transition-all duration-200"
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
