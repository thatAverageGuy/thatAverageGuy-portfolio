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
    { icon: Briefcase, label: "4+ Years ML Experience", value: "4+" },
    {
      icon: Target,
      label: "78% Accuracy on Document Extraction",
      value: "78%",
    },
    { icon: Trophy, label: "5 POCs Cracked & Deployed", value: "5" },
    { icon: Building, label: "2 Companies Founded", value: "2" },
    { icon: Users, label: "7 Interns Mentored", value: "7" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-green-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-blue-600 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main content */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Yogesh Kumar Singh
              </h1>
              <p className="text-xl md:text-2xl text-blue-300 mb-4 font-medium">
                Senior Software Engineer (Machine Learning) & AI Entrepreneur
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Researching & Building AI Solutions to Transform Enterprise
                Workflows
              </p>
            </div>

            {/* Current status */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
              <p className="text-green-400 font-semibold mb-2">Currently</p>
              <p className="text-white text-lg">
                Senior ML Engineer at Cisco (via Randstad) | Co-Founder at
                VenaAI & HireCube
              </p>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-gray-300 text-lg leading-relaxed">
                With 4+ years of experience building data-intensive
                applications, I specialize in developing and deploying classical
                Computer Vision, NLP, and GenAI solutions. From fine-tuning
                LLaMA-2 models to deploying real-time object detection systems,
                I bridge the gap between cutting-edge research and practical
                business applications.
              </p>
            </div>

            {/* Metrics ticker */}
            <div className="bg-gradient-to-r from-blue-500/20 to-green-400/20 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/20">
              <div className="flex items-center justify-center space-x-4">
                {React.createElement(metrics[currentMetric].icon, {
                  className: "text-blue-400",
                  size: 32,
                })}
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">
                    {metrics[currentMetric].value}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {metrics[currentMetric].label}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={scrollToNext}
                className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-green-500 transition-all duration-200 transform hover:scale-105"
              >
                Explore My Work
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-200 transform hover:scale-105"
              >
                Let's Connect
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
