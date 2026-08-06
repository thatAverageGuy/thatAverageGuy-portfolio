import React from "react";
import { Brain, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Enterprise AI Systems",
      description:
        "Architecting large-scale AIOps platforms and production-grade AI solutions for Fortune 500 companies.",
    },
    {
      icon: Target,
      title: "Mixture of Experts",
      description:
        "Built a modular framework for converting standard LLMs into specialized MoE architectures.",
    },
    {
      icon: Lightbulb,
      title: "Multi-Agent Systems",
      description:
        "Deployed production-scale AI agent workflows using CrewAI for automated enterprise operations.",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description:
        "Led a team of 4+ developers and mentored 7 interns while enforcing ML best practices nobody asked for but everyone needed.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-term-surface border-t border-term-border">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <p className="font-mono text-sm text-term-accent mb-3">
            <span className="text-term-dim">$</span> cat about.md
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-term-text">
            Engineering intelligence at scale
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-5 text-term-muted leading-relaxed">
              <p>
                I'm a Lead AI Engineer at Freecharge (by Axis Bank), currently leading the Document
                AI division within the larger Vision Extract platform — turning messy real-world
                documents, including handwritten ones, into structured data a bank can actually
                trust. Nearly 5 years in, I've built large-scale systems that change how enterprises
                actually use artificial intelligence — not just talk about it in a slide deck.
              </p>

              <p>
                My work spans the full AI/ML lifecycle: architecting AIOps platforms for Cisco's
                enterprise customers, building production-scale AI agent systems for DocuSign at
                Randstad Digital, developing Mixture of Experts frameworks from scratch, and now
                pushing OCR and document intelligence to handle handwriting that occasionally
                defeats other humans too.
              </p>

              <p>
                I've led 5 proofs-of-concept from a vague Slack message to production, including
                78% accuracy on borderless table extraction and a 20% lift in a computer vision
                pipeline. I bridge academic research and business reality — and I've learned the
                hard way which parts of that bridge tend to collapse first.
              </p>
            </div>

            {/* Philosophy */}
            <div className="bg-term-bg rounded-lg p-6 border border-term-border">
              <p className="font-mono text-xs text-term-dim mb-3">// philosophy.txt</p>
              <p className="text-term-text italic leading-relaxed">
                "I build AI systems that are architected for scale from day one, not bolted on after
                the first outage. Every solution I ship — whether it's a multi-agent workflow or an
                AIOps platform — is meant to handle enterprise complexity and deliver measurable
                value. And no, I don't test in production. Mostly."
              </p>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-term-bg rounded-lg p-6 border border-term-border hover:border-term-accent/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded bg-term-surface-hi border border-term-border mb-4">
                  {React.createElement(highlight.icon, {
                    className: "text-term-accent",
                    size: 20,
                  })}
                </div>
                <h4 className="text-term-text font-semibold mb-2">
                  {highlight.title}
                </h4>
                <p className="text-term-muted text-sm leading-relaxed">
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
