import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Eye,
  Brain,
  ChevronLeft,
  ChevronRight,
  Code,
  Zap,
  Cpu,
  Terminal,
  Stethoscope,
  Car,
  ShieldAlert,
  Activity,
} from "lucide-react";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProjects = [
    {
      title: "EarlyFusion Visual Question Answering",
      category: "Multi-Modal AI Research",
      description:
        "A Streamlit application demonstrating multi-modal AI combining vision and language processing. Built to bridge research and practical application of VQA systems — not just cite the paper.",
      technologies: ["PyTorch", "Streamlit", "Multi-Modal AI", "Vision-Language Models"],
      github: "https://github.com/thatAverageGuy/EarlyFusion-on-EasyVQA",
      icon: Brain,
    },
    {
      title: "Real-Time Object Detection in Browser",
      category: "Production Computer Vision",
      description:
        "Browser-based real-time object detection using custom-trained YOLOv5 models, optimized for web deployment with custom connector detection.",
      technologies: ["YOLOv5", "OpenCV", "Streamlit", "Custom Training"],
      github: "https://github.com/thatAverageGuy/Real-Time-Object-Detection-in-Browser",
      icon: Eye,
    },
    {
      title: "Custom Unix Shell in Rust",
      category: "Systems Programming",
      description:
        "A POSIX-like command-line shell built from scratch in Rust for the CodeCrafters challenge — REPL, built-ins, PATH resolution, and process management, to understand how real shells actually work.",
      technologies: ["Rust", "Systems Programming", "CLI", "Process Management"],
      github: "https://github.com/thatAverageGuy/codecrafters-shell-rust",
      icon: Terminal,
    },
    {
      title: "Configurable Agents Framework",
      category: "LLM Agent Development",
      description:
        "A flexible framework for building configurable LLM agents with swappable tools, prompts, and behaviors — for when hardcoding one more agent by hand stops being fun.",
      technologies: ["LLMs", "Agent Architecture", "Python", "Tool Integration"],
      github: "https://github.com/thatAverageGuy/configurable-agents",
      icon: Code,
    },
    {
      title: "Mono-Quant",
      category: "Model Optimization",
      description:
        "A model quantization framework for deploying large models in resource-constrained environments, optimizing inference without giving up accuracy.",
      technologies: ["Quantization", "PyTorch", "Model Optimization", "ONNX"],
      github: "https://github.com/thatAverageGuy/mono-quant",
      icon: Cpu,
    },
  ];

  const openSourceProjects = [
    {
      title: "Configurable Agents Framework",
      description:
        "Production-ready framework for building LLM agents with customizable tools, prompts, and behaviors. Modular architecture for rapid agent development and deployment.",
      technologies: ["LLMs", "Python", "Agent Architecture", "CrewAI"],
      github: "https://github.com/thatAverageGuy/configurable-agents",
    },
    {
      title: "Mono-Quant",
      description:
        "Efficient model quantization framework for deploying large models in resource-constrained environments through advanced quantization techniques.",
      technologies: ["Quantization", "PyTorch", "Model Optimization", "ONNX"],
      github: "https://github.com/thatAverageGuy/mono-quant",
    },
  ];

  const professionalProjects = [
    {
      title: "Medical Document AI",
      description: "78% accuracy on borderless table extraction",
      impact: "Cut manual medical data entry down to a review step",
      icon: Stethoscope,
    },
    {
      title: "Vehicle Tracking",
      description: "Real-time detection and tracking for driving schools",
      impact: "Automated a driving assessment that used to be a clipboard",
      icon: Car,
    },
    {
      title: "LLaMA-2 Fine-tuning",
      description: "Custom model optimization for proprietary datasets",
      impact: "Domain-specific accuracy, generic-model cost",
      icon: Brain,
    },
    {
      title: "Fraud Detection",
      description: "Insurance claims analysis and anomaly detection",
      impact: "Reduced fraudulent claims by 40%",
      icon: ShieldAlert,
    },
    {
      title: "Tuberculosis Detection",
      description: "Medical imaging AI for chest X-ray analysis",
      impact: "Earlier detection, faster triage",
      icon: Activity,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section id="projects" className="py-20 bg-term-bg border-t border-term-border">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <p className="font-mono text-sm text-term-accent mb-3">
            <span className="text-term-dim">$</span> ls -la projects/
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-term-text mb-4">
            Things I've built
          </h2>
          <p className="text-term-muted max-w-2xl">
            From research prototypes to production systems — the ones that shipped, and a couple
            I just built because I was curious how they'd break.
          </p>
        </div>

        {/* Featured Projects Carousel */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="font-mono text-sm text-term-dim mb-6">// featured</h3>

          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredProjects.map((project, index) => (
                  <div key={index} className="min-w-full">
                    <div className="bg-term-surface rounded-lg overflow-hidden border border-term-border">
                      <div className="grid lg:grid-cols-2 gap-8 p-8">
                        {/* Project info */}
                        <div className="space-y-6 order-2 lg:order-1">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-term-bg border border-term-border flex items-center justify-center flex-shrink-0">
                              {React.createElement(project.icon, {
                                className: "text-term-accent",
                                size: 20,
                              })}
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-term-text">
                                {project.title}
                              </h4>
                              <p className="text-term-accent text-sm font-mono">
                                {project.category}
                              </p>
                            </div>
                          </div>

                          <p className="text-term-muted leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2.5 py-1 bg-term-bg border border-term-border text-term-muted rounded text-xs font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border border-term-border text-term-text px-4 py-2 rounded hover:border-term-accent hover:text-term-accent transition-colors font-mono text-sm"
                          >
                            <Github size={16} />
                            <span>source code</span>
                          </a>
                        </div>

                        {/* Terminal-style panel */}
                        <div className="order-1 lg:order-2 bg-term-bg rounded-lg border border-term-border overflow-hidden">
                          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-term-border">
                            <span className="w-2.5 h-2.5 rounded-full bg-term-border"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-term-border"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-term-border"></span>
                            <span className="ml-2 text-term-dim text-xs font-mono">readme.md</span>
                          </div>
                          <div className="p-5 font-mono text-xs leading-relaxed">
                            <p className="text-term-dim">$ git log -1 --format="%s"</p>
                            <p className="text-term-text mt-1"># {project.title}</p>
                            <p className="text-term-muted mt-3">$ cat topics.txt</p>
                            <p className="text-term-accent mt-1">{project.category}</p>
                            <p className="text-term-muted mt-3">$ ls stack/</p>
                            <p className="text-term-text mt-1">
                              {project.technologies.join("  ")}
                            </p>
                            <p className="text-term-dim mt-4">
                              $ <span className="cursor-blink">_</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 bg-term-surface border border-term-border text-term-text p-2.5 rounded-full hover:border-term-accent transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 bg-term-surface border border-term-border text-term-text p-2.5 rounded-full hover:border-term-accent transition-all"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>

            {/* Slide indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-term-accent w-6" : "bg-term-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Open Source Initiatives */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="font-mono text-sm text-term-dim mb-6">// open source</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {openSourceProjects.map((project, index) => (
              <div
                key={index}
                className="bg-term-surface rounded-lg p-8 border border-term-border hover:border-term-accent/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded bg-term-bg border border-term-border flex items-center justify-center">
                    <Code className="text-term-accent" size={22} />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-term-text mb-3">
                  {project.title}
                </h4>

                <p className="text-term-muted mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-term-bg border border-term-border text-term-muted rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-term-border text-term-text px-4 py-2.5 rounded hover:border-term-accent hover:text-term-accent transition-all font-mono text-sm"
                >
                  <Github size={16} />
                  <span>view on github</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Projects */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-mono text-sm text-term-dim mb-6">// professional highlights</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {professionalProjects.map((project, index) => (
              <div
                key={index}
                className="bg-term-surface rounded-lg p-6 border border-term-border hover:border-term-accent/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded bg-term-bg border border-term-border flex items-center justify-center mb-4">
                  {React.createElement(project.icon, {
                    className: "text-term-accent",
                    size: 20,
                  })}
                </div>
                <h4 className="text-term-text font-semibold mb-2">{project.title}</h4>
                <p className="text-term-muted text-sm mb-4">{project.description}</p>
                <div className="flex items-start gap-2">
                  <Zap className="text-term-accent mt-0.5 flex-shrink-0" size={14} />
                  <span className="text-term-accent text-xs leading-relaxed">
                    {project.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
