import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Briefcase,
  Users,
  Trophy,
  Building,
  Target,
} from "lucide-react";

const Hero = () => {
  const [currentMetric, setCurrentMetric] = useState(0);

  const metrics = [
    {
      icon: Briefcase,
      value: "5+",
      label: "years turning tea into inference pipelines",
    },
    {
      icon: Target,
      value: "78%",
      label: "accuracy on document extraction — the other 22% keeps me humble",
    },
    {
      icon: Trophy,
      value: "5",
      label: "POCs that survived contact with production",
    },
    {
      icon: Building,
      value: "100%",
      label: "enterprise-grade, zero stray notebooks in prod",
    },
    {
      icon: Users,
      value: "11+",
      label: "engineers who now over-explain their PRs because of me",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-term-bg"
    >
      {/* faint grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#e8e4d9 1px, transparent 1px), linear-gradient(90deg, #e8e4d9 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-term-accent/30 to-transparent" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-sm text-term-accent mb-6">
              <span className="text-term-dim">$</span> whoami
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-term-text mb-4 leading-tight">
              Yogesh Kumar Singh
            </h1>
            <p className="font-mono text-base md:text-lg text-term-muted mb-3">
              Senior Software Engineer — ML &amp; <span className="text-term-accent">Agentic AI</span>
            </p>
            <p className="text-term-dim mb-10">
              Architecting large-scale AI systems for enterprise, one production incident at a time.
            </p>

            {/* status line */}
            <div className="bg-term-surface rounded-lg p-5 mb-6 border border-term-border text-left font-mono text-sm">
              <p className="text-term-dim mb-2">$ cat status.txt</p>
              <p className="text-term-text">
                <span className="text-term-ok">●</span> Currently at{" "}
                <span className="text-term-accent">Freecharge (Axis Bank)</span> as Lead AI
                Engineer — leading the Document AI division of the Vision Extract platform,
                teaching machines to read doctors' handwriting. Wish me luck.
              </p>
            </div>

            {/* description */}
            <div className="max-w-2xl mx-auto mb-10">
              <p className="text-term-muted leading-relaxed">
                Nearly 5 years in machine learning, spent architecting AIOps platforms,
                shipping production-grade Mixture of Experts models, and turning cutting-edge
                research into systems that actually hold up under real traffic —
                not just in a Jupyter notebook demo.
              </p>
            </div>

            {/* metrics ticker */}
            <div className="bg-term-surface rounded-lg p-6 mb-10 border border-term-border">
              <div className="flex items-center justify-center gap-4">
                {React.createElement(metrics[currentMetric].icon, {
                  className: "text-term-accent flex-shrink-0",
                  size: 28,
                })}
                <div className="text-left">
                  <div className="text-2xl font-mono font-bold text-term-text">
                    {metrics[currentMetric].value}
                  </div>
                  <div className="text-term-muted text-sm">
                    {metrics[currentMetric].label}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center font-mono text-sm">
              <button
                onClick={scrollToNext}
                className="bg-term-accent text-term-bg px-8 py-3 rounded font-semibold hover:bg-term-accent/90 transition-all duration-200"
              >
                ./view-projects.sh
              </button>
              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="border border-term-border text-term-text px-8 py-3 rounded hover:border-term-accent hover:text-term-accent transition-all duration-200"
              >
                ./get-in-touch.sh
              </button>
            </div>
          </div>

          <button
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-term-dim hover:text-term-accent transition-colors animate-bounce"
          >
            <ChevronDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
