import React from "react";
import { Brain, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Research & Development",
      description:
        "Researching cutting-edge AI/ML tools and frameworks at Cisco to identify optimal enterprise solutions",
    },
    {
      icon: Target,
      title: "Enterprise Solutions",
      description:
        "Designing scalable AI solutions that integrate seamlessly with existing infrastructure",
    },
    {
      icon: Lightbulb,
      title: "Innovation Pipeline",
      description:
        "Contributing to Cisco's AI innovation initiatives through research-driven development",
    },
    {
      icon: Users,
      title: "Leadership & Mentoring",
      description:
        "Led teams of 4+ developers and mentored 7 interns in ML best practices",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engineering Intelligence, Delivering Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-300 space-y-6">
              <p>
                I'm a Senior Machine Learning Engineer at Cisco, where I
                research and develop AI solutions that transform how enterprises
                work. My role involves evaluating cutting-edge ML tools,
                designing intelligent automation systems, and building solutions
                that make complex workflows more efficient and accessible.
              </p>

              <p>
                Parallel to my corporate role, I run successful consulting
                practice and co-founded two AI companies - VenaAI and HireCube.
                This unique combination of enterprise experience and
                entrepreneurial ventures gives me a comprehensive understanding
                of both large-scale corporate AI needs and agile startup
                innovation.
              </p>

              <p>
                My journey spans from implementing borderless table extraction
                achieving 78% accuracy on medical documents to researching
                enterprise AI tools at one of the world's leading technology
                companies. I specialize in bridging the gap between cutting-edge
                research and practical business applications.
              </p>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-blue-500/10 to-green-400/10 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                Professional Philosophy
              </h3>
              <p className="text-gray-300 italic">
                "At Cisco, I'm constantly exploring how AI can make enterprise
                workflows smarter and more intuitive. I believe the future of
                work lies in intelligent automation that empowers employees
                rather than replaces them. Every tool I research, every solution
                I build, is designed to enhance human productivity and create
                more meaningful work experiences."
              </p>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg mb-4">
                  {React.createElement(highlight.icon, {
                    className: "text-white",
                    size: 24,
                  })}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
