import React, { useState } from "react";
import {
  Building,
  Calendar,
  ChevronDown,
  ChevronRight,
  Target,
  Lightbulb,
} from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState(null);

  const experiences = [
    {
      id: 0,
      title: "Lead AI Engineer",
      company: "Freecharge (by Axis Bank)",
      period: "May 2026 - Present",
      type: "Full-time On-site",
      description:
        "Part of the Vision Extract platform team, leading its Document AI division — extracting structured data from real-world documents, including handwritten ones, for banking workflows where 'the model looked confident' isn't an acceptable QA bar.",
      highlights: [
        "Leading the Document AI division within the Vision Extract platform, focused on handwritten and printed OCR extraction for banking and financial documents",
        "Owning model accuracy and reliability for handwriting recognition — the one CV problem that laughs at your validation set",
        "Working with the broader platform team on pipeline decisions for scaling document extraction across high-volume, compliance-sensitive workflows",
      ],
      technologies: [
        "OCR",
        "Handwriting Recognition",
        "Document Intelligence",
        "Computer Vision",
        "Vision Extract Platform",
      ],
    },
    {
      id: 1,
      title: "Senior Software Engineer - ML and Agentic AI",
      company: "Randstad Digital - DocuSign",
      period: "August 2025 - May 2026",
      type: "Full-time Remote",
      description:
        "Architecting production-scale AI agent systems for DocuSign's sales operations and the data infrastructure they run on.",
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
      id: 2,
      title: "Senior Software Engineer - ML and Agentic AI",
      company: "Randstad Digital - CISCO",
      period: "August 2024 - August 2025",
      type: "Full-time Remote",
      description:
        "Led AI research initiatives and built large-scale AIOps platforms across Cisco's product line — the kind of scale where a bad deploy is everyone's problem by lunch.",
      highlights: [
        "Architected and led implementation of large-scale AIOps platform providing enhanced Assurance capabilities across diverse Cisco products (ThousandEyes, Meraki, Catalyst Center) for enterprise customers",
        "Engineered and deployed production-grade Mixture of Experts (MoE) models, developing a novel modular framework to convert standard LLMs into specialized MoE architectures, serving internal enterprise teams",
        "Spearheaded development of a Network Root Cause Analysis (RCA) solution by generating synthetic reasoning datasets and training bespoke models; deployed for enterprise-wide internal testing",
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
      id: 3,
      title: "Freelance Consultant - AI/ML",
      company: "Independent",
      period: "August 2023 - August 2024",
      type: "Consulting",
      description:
        "Delivered end-to-end AI solutions across industries — NLP, Computer Vision, GenAI — for clients who all wanted it done yesterday.",
      highlights: [
        "Implemented end-to-end NL2SQL pipeline with human-in-the-loop verification, labeling, training, and validation loop following MLOps best practices for a Fortune 500 company",
        "Developed an automated video tagging pipeline leveraging computer vision to identify and tag fashion items from product catalogs within videos",
        "Built an AI teaching assistant agent using RAG and multimodal data processing (docs, videos, web) for automated generation of teaching materials and student evaluations",
        "Engineered a multi-lingual ID document parsing system (passports, government IDs) extracting key entities from various file types",
        "Developed computer vision systems for vehicle detection and tracking in driving school analysis",
        "Architected advanced RAG applications incorporating query transformation and re-ranking, using vector databases (ChromaDB, Qdrant)",
        "Fine-tuned LLMs (LLaMA-2, Mistral 7B) using PEFT and QLoRA, and applied advanced prompt engineering (CoT, ReAct)",
        "Applied quantization, distillation, and pruning to significantly improve deployment efficiency in limited-resource settings",
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
      id: 4,
      title: "Machine Learning Engineer",
      company: "Althea.AI (previously Wisteli Informatics)",
      period: "August 2021 - August 2023",
      type: "Full-time",
      description:
        "Owned the full lifecycle of ML projects in document intelligence and healthcare — where 'good enough' accuracy still isn't good enough.",
      highlights: [
        "Led the full lifecycle of 5 key proofs-of-concept, translating requirements into production-ready ML solutions for document intelligence and healthcare",
        "Developed and deployed multi-modal models for automated classification, layout detection, and data extraction (LayoutLM) from complex documents (medical reports, invoices, KYC data)",
        "Implemented a custom model + heuristics pipeline achieving 78% accuracy on challenging borderless table extraction tasks",
        "Improved overall pipeline accuracy by 20% through strategic application of YOLOv5 and advanced OpenCV image processing techniques",
        "Built and deployed ML models for insurance fraud/abuse detection",
        "Engineered and deployed scalable REST APIs (Flask) on AWS EC2 using Docker and RabbitMQ for asynchronous processing",
        "Developed specialized solutions including a tuberculosis detection pipeline (X-ray analysis) and an image denoising engine (U-Net based autoencoder) that improved OCR quality",
        "Implemented advanced image forgery detection techniques (RANSAC, autoencoders, noise print)",
        "Managed a team of 4 developers and mentored 7 interns, driving project execution and technical growth",
      ],
      projects: [
        "Multi-modal document AI for medical reports, invoices, and KYC processing",
        "Insurance fraud/abuse detection system",
        "Tuberculosis detection from chest X-rays using deep learning",
        "Image forgery detection engine for document verification",
        "Borderless table extraction at 78% accuracy",
      ],
    },
  ];

  const toggleMobileExpansion = (index) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  const ExperienceCard = ({ exp, index, isExpanded, onToggle }) => (
    <div className="bg-term-surface rounded-lg border border-term-border overflow-hidden">
      <button
        onClick={() => onToggle(index)}
        className="w-full p-6 text-left hover:bg-term-surface-hi transition-all duration-300"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded bg-term-bg border border-term-border flex-shrink-0">
              <Building className="text-term-accent" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-term-text mb-1">{exp.title}</h3>
              <p className="text-term-accent text-sm font-mono">{exp.company}</p>
              <div className="flex items-center flex-wrap gap-3 text-term-dim text-xs mt-1.5 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </span>
                <span className="px-2 py-0.5 border border-term-border text-term-muted rounded">
                  {exp.type}
                </span>
              </div>
            </div>
          </div>
          <ChevronDown
            className={`text-term-accent transition-transform duration-300 flex-shrink-0 ${
              isExpanded ? "rotate-180" : ""
            }`}
            size={20}
          />
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6">
          <div className="border-t border-term-border pt-6">
            <p className="text-term-muted mb-6">{exp.description}</p>

            <div className="mb-6">
              <h4 className="text-term-text font-mono text-sm font-semibold mb-4 flex items-center gap-2">
                <Target className="text-term-accent" size={16} />
                <span>key achievements</span>
              </h4>
              <ul className="space-y-2.5">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-start gap-3">
                    <ChevronRight className="text-term-accent mt-1 flex-shrink-0" size={14} />
                    <span className="text-term-muted text-sm leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {exp.technologies && (
              <div className="mb-2">
                <h4 className="text-term-text font-mono text-sm font-semibold mb-4 flex items-center gap-2">
                  <Lightbulb className="text-term-accent" size={16} />
                  <span>stack</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-term-bg border border-term-border text-term-muted rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {exp.projects && (
              <div>
                <h4 className="text-term-text font-mono text-sm font-semibold mb-4 flex items-center gap-2">
                  <Target className="text-term-accent" size={16} />
                  <span>major projects</span>
                </h4>
                <ul className="space-y-2.5">
                  {exp.projects.map((project, projectIndex) => (
                    <li key={projectIndex} className="flex items-start gap-3">
                      <ChevronRight className="text-term-accent mt-1 flex-shrink-0" size={14} />
                      <span className="text-term-muted text-sm leading-relaxed">{project}</span>
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
    <section id="experience" className="py-20 bg-term-bg border-t border-term-border">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <p className="font-mono text-sm text-term-accent mb-3">
            <span className="text-term-dim">$</span> git log --oneline --all
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-term-text">
            Professional journey
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout - Accordion Style */}
          <div className="lg:hidden space-y-5">
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
            <div className="w-1/3 space-y-3">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-5 rounded-lg border transition-all duration-300 ${
                    activeTab === index
                      ? "bg-term-surface border-term-accent/50"
                      : "bg-term-surface/50 border-term-border hover:border-term-border"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-term-text mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-term-accent text-sm font-mono mb-1">
                        {exp.company}
                      </p>
                      <p className="text-term-dim text-xs font-mono">{exp.period}</p>
                    </div>
                    <ChevronRight
                      className={`text-term-accent transition-transform duration-300 flex-shrink-0 ${
                        activeTab === index ? "rotate-90" : ""
                      }`}
                      size={18}
                    />
                  </div>
                </button>
              ))}
            </div>

            <div className="w-2/3">
              <div className="bg-term-surface rounded-lg p-8 border border-term-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded bg-term-bg border border-term-border flex-shrink-0">
                    <Building className="text-term-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-term-text">
                      {experiences[activeTab].title}
                    </h3>
                    <p className="text-term-accent font-mono">
                      {experiences[activeTab].company}
                    </p>
                    <div className="flex items-center gap-4 text-term-dim text-xs mt-1.5 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{experiences[activeTab].period}</span>
                      </span>
                      <span className="px-2 py-0.5 border border-term-border text-term-muted rounded">
                        {experiences[activeTab].type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-term-muted mb-6">
                  {experiences[activeTab].description}
                </p>

                <div className="mb-6">
                  <h4 className="text-term-text font-mono text-sm font-semibold mb-4 flex items-center gap-2">
                    <Target className="text-term-accent" size={16} />
                    <span>key achievements</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {experiences[activeTab].highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ChevronRight className="text-term-accent mt-1 flex-shrink-0" size={14} />
                        <span className="text-term-muted text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {experiences[activeTab].technologies && (
                  <div className="mb-2">
                    <h4 className="text-term-text font-mono text-sm font-semibold mb-4 flex items-center gap-2">
                      <Lightbulb className="text-term-accent" size={16} />
                      <span>stack</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeTab].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-term-bg border border-term-border text-term-muted rounded text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {experiences[activeTab].projects && (
                  <div>
                    <h4 className="text-term-text font-mono text-sm font-semibold mb-4 flex items-center gap-2">
                      <Target className="text-term-accent" size={16} />
                      <span>major projects</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {experiences[activeTab].projects.map((project, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ChevronRight className="text-term-accent mt-1 flex-shrink-0" size={14} />
                          <span className="text-term-muted text-sm leading-relaxed">{project}</span>
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
