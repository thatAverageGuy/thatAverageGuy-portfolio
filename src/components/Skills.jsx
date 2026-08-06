import React from "react";
import { Brain, Database, Eye, Code, Cloud, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Generative AI & LLMs",
      icon: Brain,
      skills: [
        "LLMs",
        "RAG Systems",
        "Mixture of Experts",
        "Prompt Engineering",
        "Reasoning Models",
        "Multi-Agent Systems",
      ],
    },
    {
      title: "AI Frameworks & Tools",
      icon: Cpu,
      skills: ["PyTorch", "Transformers", "CrewAI", "LangGraph", "DSPy", "Langfuse"],
    },
    {
      title: "Computer Vision & NLP",
      icon: Eye,
      skills: [
        "Object Detection",
        "Image Processing",
        "OCR",
        "Language Models",
        "NER",
        "Document Processing",
      ],
    },
    {
      title: "MLOps & Deployment",
      icon: Cloud,
      skills: ["Docker", "REST APIs (FastAPI)", "MLFlow", "RabbitMQ", "AWS ECS", "CI/CD Pipelines"],
    },
    {
      title: "Data Engineering",
      icon: Database,
      skills: ["dbt", "Apache Airflow", "Snowflake", "SQL", "Data Pipelines", "ETL/ELT"],
    },
    {
      title: "Programming & Tools",
      icon: Code,
      skills: ["Python", "C++", "JavaScript", "Git", "VS Code", "Jupyter"],
    },
  ];

  const stack = [
    {
      label: "Python Ecosystem",
      detail: "Primary language, extensive library depth",
    },
    {
      label: "AI/ML Frameworks",
      detail: "PyTorch, Transformers, CrewAI, LangGraph",
    },
    {
      label: "Production Deployment",
      detail: "Docker, FastAPI, MLOps pipelines, AWS",
    },
    {
      label: "Data Engineering",
      detail: "dbt, Airflow, Snowflake, ETL pipelines",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-term-surface border-t border-term-border">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <p className="font-mono text-sm text-term-accent mb-3">
            <span className="text-term-dim">$</span> cat skills.json
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-term-text mb-4">
            Technology stack
          </h2>
          <p className="text-term-muted max-w-2xl">
            No percentage bars — those are self-graded and nobody's rating themselves 62% at Python.
            Here's what I actually reach for, grouped by where it earns its keep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-term-bg rounded-lg p-6 border border-term-border hover:border-term-accent/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded bg-term-surface-hi border border-term-border flex items-center justify-center flex-shrink-0">
                  {React.createElement(category.icon, {
                    className: "text-term-accent",
                    size: 18,
                  })}
                </div>
                <h3 className="text-base font-semibold text-term-text">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1 bg-term-surface border border-term-border text-term-muted rounded text-xs font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Technologies Summary */}
        <div className="mt-16 max-w-6xl mx-auto">
          <p className="font-mono text-xs text-term-dim mb-6 text-center">
            // where it all runs in production
          </p>
          <div className="grid md:grid-cols-4 gap-5">
            {stack.map((item, index) => (
              <div
                key={index}
                className="bg-term-bg rounded-lg p-6 border border-term-border text-center"
              >
                <h4 className="text-term-accent font-mono text-sm font-semibold mb-2">
                  {item.label}
                </h4>
                <p className="text-term-muted text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
