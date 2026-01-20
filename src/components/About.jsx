import React from "react";
import { Brain, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Enterprise AI Systems",
      description:
        "Architecting large-scale AIOps platforms and production-grade AI solutions for Fortune 500 companies",
    },
    {
      icon: Target,
      title: "Mixture of Experts",
      description:
        "Developed novel modular framework for converting standard LLMs into specialized MoE architectures",
    },
    {
      icon: Lightbulb,
      title: "Multi-Agent Systems",
      description:
        "Building production-scale AI agent workflows using CrewAI for automated enterprise operations",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description:
        "Led teams of 4+ developers and mentored 7 interns while driving ML best practices",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engineering Intelligence at Scale
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-300 space-y-6">
              <p>
                I'm a Senior Software Engineer specializing in ML and Agentic AI at Randstad Digital,
                currently working with DocuSign to architect production-scale AI agent systems. With nearly
                4.5 years of experience, I've built large-scale systems that transform how enterprises
                leverage artificial intelligence.
              </p>

              <p>
                My expertise spans the full AI/ML lifecycle - from architecting AIOps platforms for Cisco's
                enterprise customers to developing novel Mixture of Experts frameworks and deploying
                multi-agent workflows for automated sales operations. I specialize in transforming
                cutting-edge research into scalable, production-ready solutions.
              </p>

              <p>
                Throughout my career, I've led the development of 5 key proofs-of-concept from requirements
                to production, achieving remarkable results like 78% accuracy on borderless table extraction
                and 20% improvement in computer vision pipelines. I bridge the gap between academic research
                and practical business applications, ensuring AI solutions deliver measurable impact.
              </p>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-blue-500/10 to-green-400/10 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                Professional Philosophy
              </h3>
              <p className="text-gray-300 italic">
                "I believe in building AI systems that not only leverage the latest research but are
                architected for scale from day one. Every solution I develop - whether it's a
                multi-agent workflow or an AIOps platform - is designed to handle enterprise complexity
                while delivering measurable business value. My focus is on creating intelligent systems
                that enhance human capabilities and drive real operational efficiency."
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