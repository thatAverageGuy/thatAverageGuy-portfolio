import React, { useState } from 'react';
import { Building, Calendar, ChevronRight, Users, Target, Lightbulb } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      id: 0,
      title: "Senior Software Engineer - Machine Learning",
      company: "Randstad Digital - CISCO",
      period: "August 2024 - Present",
      type: "Full-time Remote",
      description: "Leading AI research initiatives and developing large-scale AIOps platforms for enhanced enterprise capabilities",
      highlights: [
        "Architected and leading the ongoing implementation of a large-scale AIOps platform to provide enhanced Assurance capabilities across diverse Cisco products (ThousandEyes, Meraki, Catalyst Center) for enterprise customers",
        "Engineered and deployed production-grade MoE (Mixture of Experts) models, including developing a novel modular framework to convert standard LLMs into specialized MoE architectures, serving internal enterprise teams",
        "Spearheaded the development of a Network Root Cause Analysis (RCA) solution by generating synthetic reasoning datasets and training bespoke models; successfully deployed for enterprise-wide internal testing",
        "Led cross-functional collaboration with product teams to integrate AI capabilities into existing Cisco infrastructure",
        "Research and evaluate emerging AI/ML technologies for enterprise applications"
      ],
      technologies: [
        "AIOps Platforms", "Mixture of Experts (MoE)", "LLMs", "Network Analysis", 
        "Enterprise AI", "Production ML Systems", "Cisco Products Integration"
      ]
    },
    {
      id: 1,
      title: "Freelance AI Consultant",
      company: "Independent",
      period: "August 2023 - Present",
      type: "Consulting",
      description: "Delivering end-to-end AI solutions across various industries with focus on GenAI and Computer Vision",
      highlights: [
        "Developed vehicle detection systems for automotive industry with real-time tracking capabilities",
        "Fine-tuned LLaMA-2 model using PEFT and QLoRA techniques for domain-specific applications",
        "Built advanced RAG systems with query transformation and re-ranking for improved retrieval accuracy",
        "Extensive work with OpenAI APIs and open-source LLMs for custom AI solutions",
        "Implemented comprehensive MLOps monitoring solutions for production deployments"
      ],
      technologies: [
        "Computer Vision", "LLM Fine-tuning", "RAG Systems", "MLOps",
        "Model Optimization", "Prompt Engineering", "Vehicle Detection"
      ]
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      company: "Wisteli, Noida",
      period: "August 2021 - August 2023",
      type: "Full-time",
      description: "Built production-ready ML solutions for healthcare and document processing with team leadership experience",
      highlights: [
        "Achieved 78% accuracy on borderless table extraction from medical documents using custom deep learning models",
        "Improved computer vision results by 20% using YOLOv5 optimization for real-time object detection",
        "Led a team of 4 developers and mentored 7 interns in ML best practices and production deployment",
        "Successfully delivered 5 POCs from requirements to production deployment on AWS infrastructure",
        "Deployed scalable ML models using Docker containerization and REST API frameworks"
      ],
      projects: [
        "Multi-modal Document AI for medical reports and KYC processing",
        "Healthcare fraud detection system with anomaly detection",
        "Tuberculosis detection from chest X-rays using deep learning",
        "Image tampering detection engine for document verification"
      ]
    }
  ];

  const companies = [
    { name: "VenaAI", role: "Co-Founder", period: "August 2023 - Present" },
    { name: "HireCube", role: "Founder", period: "December 2023 - Present" }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-8"></div>
        </div>

        {/* Experience tabs */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tab buttons */}
            <div className="lg:w-1/3 space-y-4">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-blue-500/20 to-green-400/20 border-blue-400/50'
                      : 'bg-slate-800/50 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 text-sm mb-1">{exp.company}</p>
                      <p className="text-gray-400 text-xs">{exp.period}</p>
                    </div>
                    <ChevronRight 
                      className={`text-blue-400 transition-transform duration-300 ${
                        activeTab === index ? 'rotate-90' : ''
                      }`} 
                      size={20} 
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="lg:w-2/3">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg">
                    <Building className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {experiences[activeTab].title}
                    </h3>
                    <p className="text-blue-400 text-lg">
                      {experiences[activeTab].company}
                    </p>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm mt-1">
                      <span className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{experiences[activeTab].period}</span>
                      </span>
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 rounded-full text-xs">
                        {experiences[activeTab].type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 text-lg">
                  {experiences[activeTab].description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                    <Target className="text-blue-400" size={18} />
                    <span>Key Achievements</span>
                  </h4>
                  <ul className="space-y-2">
                    {experiences[activeTab].highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <ChevronRight className="text-green-400 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies or Projects */}
                {experiences[activeTab].technologies && (
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                      <Lightbulb className="text-blue-400" size={18} />
                      <span>Technologies & Focus Areas</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeTab].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {experiences[activeTab].projects && (
                  <div>
                    <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                      <Target className="text-blue-400" size={18} />
                      <span>Major Projects</span>
                    </h4>
                    <ul className="space-y-2">
                      {experiences[activeTab].projects.map((project, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <ChevronRight className="text-green-400 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-300">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Entrepreneurial ventures */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Entrepreneurial Ventures
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-white">{company.name}</h4>
                  <span className="text-green-400 text-sm">{company.role}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{company.period}</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;