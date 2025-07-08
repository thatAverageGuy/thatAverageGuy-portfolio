import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Eye,
  Brain,
  Hand,
  Palette,
  ChevronLeft,
  ChevronRight,
  Play,
  Code,
  Zap,
} from "lucide-react";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProjects = [
    {
      title: "EarlyFusion Visual Question Answering",
      category: "Multi-Modal AI Research",
      description:
        "Advanced Streamlit application demonstrating multi-modal AI combining vision and language processing. Bridges research and practical application of VQA systems.",
      image:
        "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "PyTorch",
        "Streamlit",
        "Multi-Modal AI",
        "Vision-Language Models",
      ],
      github: "https://github.com/thatAverageGuy/EarlyFusion-on-EasyVQA",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Real-Time Object Detection in Browser",
      category: "Production Computer Vision",
      description:
        "Browser-based real-time object detection using custom-trained YOLOv5 models. Optimized for web deployment with custom connector detection capabilities.",
      image:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["YOLOv5", "OpenCV", "Streamlit", "Custom Training"],
      github:
        "https://github.com/thatAverageGuy/Real-Time-Object-Detection-in-Browser",
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Hand Tracking System",
      category: "Real-Time CV Application",
      description:
        "CPU-optimized real-time hand tracking using MediaPipe and OpenCV. Enables gesture-based interactions without GPU requirements.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["OpenCV", "MediaPipe", "Python", "Real-time Processing"],
      github: "https://github.com/thatAverageGuy/HandTracking",
      icon: Hand,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Live Sketcher Application",
      category: "Creative AI",
      description:
        "Real-time artistic transformation of camera input using OpenCV. Creative application of computer vision for artistic purposes with edge detection algorithms.",
      image:
        "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["OpenCV", "Python", "Image Processing", "Edge Detection"],
      github: "https://github.com/thatAverageGuy/Sketcher",
      icon: Palette,
      color: "from-orange-500 to-red-500",
    },
  ];

  const professionalProjects = [
    {
      title: "Medical Document AI",
      description: "78% accuracy on borderless table extraction",
      impact: "Revolutionized medical data processing",
      icon: "🏥",
    },
    {
      title: "Vehicle Tracking",
      description: "Real-time detection and tracking for driving schools",
      impact: "Automated driving assessment system",
      icon: "🚗",
    },
    {
      title: "LLaMA-2 Fine-tuning",
      description: "Custom model optimization for proprietary datasets",
      impact: "Enhanced domain-specific AI performance",
      icon: "🤖",
    },
    {
      title: "Fraud Detection",
      description: "Insurance claims analysis and anomaly detection",
      impact: "Reduced fraudulent claims by 40%",
      icon: "🔍",
    },
    {
      title: "Tuberculosis Detection",
      description: "Medical imaging AI for chest X-ray analysis",
      impact: "Early disease detection system",
      icon: "🔬",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Innovation Showcase
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From research prototypes to production systems, explore the diverse
            range of AI solutions I've built
          </p>
        </div>

        {/* Featured Projects Carousel */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Featured Projects
          </h3>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredProjects.map((project, index) => (
                  <div key={index} className="min-w-full">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
                      <div className="grid lg:grid-cols-2 gap-8 p-8">
                        {/* Project info */}
                        <div className="space-y-6">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}
                            >
                              {React.createElement(project.icon, {
                                className: "text-white",
                                size: 24,
                              })}
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-white">
                                {project.title}
                              </h4>
                              <p className="text-blue-400">
                                {project.category}
                              </p>
                            </div>
                          </div>

                          <p className="text-gray-300 text-lg leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex space-x-4">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                            >
                              <Github size={18} />
                              <span>Source Code</span>
                            </a>
                            {/* Live Demo button commented out as requested */}
                            {/* 
                            <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-green-400 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-green-500 transition-all">
                              <Play size={18} />
                              <span>Live Demo</span>
                            </button>
                            */}
                          </div>
                        </div>

                        {/* Project image */}
                        <div className="relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 lg:h-80 object-cover rounded-xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
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
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-slate-700 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-slate-700 transition-all"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-blue-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Professional Projects */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Professional Projects Highlights
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="text-green-400" size={16} />
                    <span className="text-green-400 text-sm font-medium">
                      {project.impact}
                    </span>
                  </div>
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
