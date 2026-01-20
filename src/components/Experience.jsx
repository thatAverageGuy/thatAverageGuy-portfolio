import React, { useState } from "react";
import {
  Building,
  Calendar,
  ChevronDown,
  ChevronRight,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState(null);

  const experiences = [
    {
      id: 0,
      title: "Senior Software Engineer - ML and Agentic AI",
      company: "Randstad Digital - DocuSign",
      period: "August 2025 - Present",
      type: "Full-time Remote",
      description:
        "Architecting production-scale AI agent systems for DocuSign's sales operations and building comprehensive data infrastructure",
      highlights: [
        "Architected and deployed production-scale AI agent systems for DocuSign's sales outreach teams, implementing CrewAI-based multi-agent workflows for automated lead generation and personalized email campaigns",
        "Engineered end-to-end data infrastructure supporting AI operations, developing dbt transformation pipelines and Airflow DAGs for orchestrating complex data workflows across Snowflake and production databases",
        "Built and deployed PII anonymization microservices using Docker containerization and AWS ECS task deployment, ensuring compliance requirements for sensitive customer data in ML pipelines",
      ],
      technologies: [
        "CrewAI",
        "Multi-Agent Systems",
        "dbt",
        "Apache Airflow",
        "Snowflake",
        "Docker",
        "AWS ECS",
        "PII Anonymization",
        "Data Infrastructure",
      ],
    },
    {
      id: 1,
      title: "Senior Software Engineer - ML and Agentic AI",
      company: "Randstad Digital - CISCO",
      period: "August 2024 - August 2025",
      type: "Full-time Remote",
      description:
        "Led AI research initiatives and developed large-scale AIOps platforms for enhanced enterprise capabilities across diverse Cisco products",
      highlights: [
        "Architected and led implementation of large-scale AIOps platform providing enhanced Assurance capabilities across diverse Cisco products (ThousandEyes, Meraki, Catalyst Center) for enterprise customers",
        "Engineered and deployed production-grade Mixture of Experts (MoE) models, developing novel modular framework to convert standard LLMs into specialized MoE architectures, serving internal enterprise teams",
        "Spearheaded development of Network Root Cause Analysis (RCA) solution by generating synthetic reasoning datasets and training bespoke models; successfully deployed for enterprise-wide internal testing",
        "Led cross-functional collaboration with product teams to integrate AI capabilities into existing Cisco infrastructure",
      ],
      technologies: [
        "AIOps Platforms",
        "Mixture of Experts (MoE)",
        "LLMs",
        "Network Analysis",
        "ThousandEyes",
        "Meraki",
        "Catalyst Center",
        "Synthetic Data Generation",
        "Root Cause Analysis",
      ],
    },
    {
      id: 2,
      title: "Freelance Consultant - AI/ML",
      company: "Independent",
      period: "August 2023 - August 2024",
      type: "Consulting",
      description:
        "Delivered end-to-end AI solutions across various industries with focus on NLP, Computer Vision, and GenAI",
      highlights: [
        "Implemented end-to-end NL2SQL pipeline with Human-in-the-loop verification, labeling, training and validation loop with best MLOps principles for a Fortune 500 company",
        "Developed automated Video Tagging pipeline leveraging Computer Vision to identify and tag fashion items from product catalogs within videos",
        "Built AI Teaching Assistant agent using RAG and multimodal data processing (docs, videos, web) for automated generation of teaching materials and student evaluations",
        "Engineered multi-lingual ID document parsing system (passports, govt. IDs) extracting key entities from various file types",
        "Developed Computer Vision systems for vehicle detection and tracking in driving school analysis",
        "Architected advanced RAG applications incorporating query transformation and re-ranking, utilizing Vector Databases (ChromaDB, Qdrant)",
        "Fine-tuned LLMs (LLaMA-2, Mistral 7B) using PEFT, QLoRA, and applied advanced prompt engineering (CoT, ReAct)",
        "Utilized Quantization, Distillation, and Pruning in models to significantly enhance deployment efficiency in limited-resource settings",
      ],
      technologies: [
        "NL2SQL",
        "Computer Vision",
        "RAG Systems",
        "LLM Fine-tuning",
        "PEFT",
        "QLoRA",
        "ChromaDB",
        "Qdrant",
        "Model Optimization",
        "MLOps",
        "Prompt Engineering",
      ],
    },
    {
      id: 3,
      title: "Machine Learning Engineer",
      company: "Althea.AI (previously Wisteli Informatics)",
      period: "August 2021 - August 2023",
      type: "Full-time",
      description:
        "Led full lifecycle of ML projects for document intelligence and healthcare domain with team leadership experience",
      highlights: [
        "Led full lifecycle of 5 key Proofs-of-Concept, translating requirements into production-ready ML solutions for document intelligence and healthcare domain",
        "Developed and deployed multi-modal models for automated classification, layout detection and data extraction (LayoutLM) from complex documents (medical reports, invoices, KYC data)",
        "Implemented custom model + heuristics pipeline achieving 78% accuracy on challenging borderless table extraction tasks",
        "Improved overall pipeline accuracy by 20% through strategic application of YOLOv5 and advanced OpenCV image processing techniques",
        "Built and deployed ML models for insurance fraud/abuse detection",
        "Engineered and deployed scalable REST APIs (Flask) on AWS EC2 using Docker and RabbitMQ for asynchronous processing",
        "Developed specialized solutions including Tuberculosis detection pipeline (X-ray analysis) and image denoising engine (U-Net based autoencoder) improving OCR quality",
        "Implemented advanced image forgery detection techniques (RANSAC, Autoencoders, Noise Print)",
        "Managed team of 4 developers and mentored 7 interns, driving project execution and fostering technical growth",
      ],
      projects: [
        "Multi-modal Document AI for medical reports, invoices, and KYC processing",
        "Insurance fraud/abuse detection system",
        "Tuberculosis detection from chest X-rays using deep learning",
        "Image forgery detection engine for document verification",
        "Borderless table extraction with 78% accuracy",
      ],
    },
  ];

  const toggleMobileExpansion = (index) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  const ExperienceCard = ({ exp, index, isExpanded, onToggle }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
      {/* Header - Always visible */}
      <button
        onClick={() => onToggle(index)}
        className="w-full p-6 text-left hover:bg-slate-700/30 transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg">
              <Building className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
              <p className="text-blue-400 text-lg">{exp.company}</p>
              <div className="flex items-center space-x-4 text-gray-400 text-sm mt-1">
                <span className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </span>
                <span className="px-2 py-1 bg-green-400/20 text-green-400 rounded-full text-xs">
                  {exp.type}
                </span>
              </div>
            </div>
          </div>
          <ChevronDown
            className={`text-blue-400 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            size={24}
          />
        </div>
      </button>

      {/* Expandable content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6">
          <div className="border-t border-white/10 pt-6">
            <p className="text-gray-300 mb-6 text-lg">{exp.description}</p>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                <Target className="text-blue-400" size={18} />
                <span>Key Achievements</span>
              </h4>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <li
                    key={highlightIndex}
                    className="flex items-start space-x-3"
                  >
                    <ChevronRight
                      className="text-green-400 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies or Projects */}
            {exp.technologies && (
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                  <Lightbulb className="text-blue-400" size={18} />
                  <span>Technologies & Focus Areas</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {exp.projects && (
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                  <Target className="text-blue-400" size={18} />
                  <span>Major Projects</span>
                </h4>
                <ul className="space-y-2">
                  {exp.projects.map((project, projectIndex) => (
                    <li
                      key={projectIndex}
                      className="flex items-start space-x-3"
                    >
                      <ChevronRight
                        className="text-green-400 mt-0.5 flex-shrink-0"
                        size={16}
                      />
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
  );

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout - Accordion Style */}
          <div className="lg:hidden space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={index}
                isExpanded={expandedMobile === index}
                onToggle={toggleMobileExpansion}
              />
            ))}
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:flex gap-8">
            {/* Tab buttons */}
            <div className="w-1/3 space-y-4">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                    activeTab === index
                      ? "bg-gradient-to-r from-blue-500/20 to-green-400/20 border-blue-400/50"
                      : "bg-slate-800/50 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 text-sm mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-xs">{exp.period}</p>
                    </div>
                    <ChevronRight
                      className={`text-blue-400 transition-transform duration-300 ${
                        activeTab === index ? "rotate-90" : ""
                      }`}
                      size={20}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="w-2/3">
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
                    {experiences[activeTab].highlights.map(
                      (highlight, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <ChevronRight
                            className="text-green-400 mt-0.5 flex-shrink-0"
                            size={16}
                          />
                          <span className="text-gray-300">{highlight}</span>
                        </li>
                      )
                    )}
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
                      {experiences[activeTab].technologies.map(
                        (tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        )
                      )}
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
                          <ChevronRight
                            className="text-green-400 mt-0.5 flex-shrink-0"
                            size={16}
                          />
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
      </div>
    </section>
  );
};

export default Experience;