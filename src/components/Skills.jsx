import React from "react";
import {
  Brain,
  Database,
  Eye,
  Code,
  Cloud,
  Settings,
  Cpu,
  Zap,
  Target,
  Layers,
  Globe,
  Server,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Generative AI & LLMs",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "LLMs", level: 95, icon: "🤖" },
        { name: "RAG Systems", level: 92, icon: "🔍" },
        { name: "Mixture of Experts", level: 88, icon: "🧠" },
        { name: "Prompt Engineering", level: 90, icon: "✨" },
        { name: "Reasoning Models", level: 85, icon: "🤔" },
        { name: "Multi-Agent Systems", level: 87, icon: "👥" },
      ],
    },
    {
      title: "AI Frameworks & Tools",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "PyTorch", level: 92, icon: "🔥" },
        { name: "Transformers", level: 95, icon: "🔄" },
        { name: "CrewAI", level: 88, icon: "🚀" },
        { name: "LangGraph", level: 85, icon: "📊" },
        { name: "DSPy", level: 82, icon: "🎯" },
        { name: "Langfuse", level: 80, icon: "📈" },
      ],
    },
    {
      title: "Computer Vision & NLP",
      icon: Eye,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Object Detection", level: 92, icon: "🎯" },
        { name: "Image Processing", level: 90, icon: "🖼️" },
        { name: "OCR", level: 88, icon: "📄" },
        { name: "Language Models", level: 90, icon: "💬" },
        { name: "NER", level: 85, icon: "🏷️" },
        { name: "Document Processing", level: 92, icon: "📋" },
      ],
    },
    {
      title: "MLOps & Deployment",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Docker", level: 92, icon: "🐳" },
        { name: "REST APIs (FastAPI)", level: 95, icon: "⚡" },
        { name: "MLFlow", level: 88, icon: "📊" },
        { name: "RabbitMQ", level: 85, icon: "🐰" },
        { name: "AWS ECS", level: 80, icon: "☁️" },
        { name: "CI/CD Pipelines", level: 82, icon: "🔄" },
      ],
    },
    {
      title: "Data Engineering",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "dbt", level: 85, icon: "🛠️" },
        { name: "Apache Airflow", level: 87, icon: "🌊" },
        { name: "Snowflake", level: 82, icon: "❄️" },
        { name: "SQL", level: 88, icon: "🗃️" },
        { name: "Data Pipelines", level: 90, icon: "🔗" },
        { name: "ETL/ELT", level: 85, icon: "🔄" },
      ],
    },
    {
      title: "Programming & Tools",
      icon: Code,
      color: "from-teal-500 to-green-500",
      skills: [
        { name: "Python", level: 98, icon: "🐍" },
        { name: "C++", level: 75, icon: "⚙️" },
        { name: "Javascript", level: 70, icon: "📜" },
        { name: "Git", level: 90, icon: "📚" },
        { name: "VS Code", level: 92, icon: "💻" },
        { name: "Jupyter", level: 88, icon: "📓" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technology Mastery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive expertise across the AI/ML technology stack, from
            research to production deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center space-x-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  {React.createElement(category.icon, {
                    className: "text-white",
                    size: 24,
                  })}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-blue-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Technologies Summary */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Core Technology Stack
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 text-center">
              <div className="text-4xl mb-4">🐍</div>
              <h4 className="text-green-400 font-semibold mb-2">
                Python Ecosystem
              </h4>
              <p className="text-gray-300 text-sm">
                Primary language with extensive library expertise
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-blue-400 font-semibold mb-2">
                AI/ML Frameworks
              </h4>
              <p className="text-gray-300 text-sm">
                PyTorch, Transformers, CrewAI, LangGraph
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h4 className="text-purple-400 font-semibold mb-2">
                Production Deployment
              </h4>
              <p className="text-gray-300 text-sm">
                Docker, FastAPI, MLOps pipelines, AWS
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h4 className="text-orange-400 font-semibold mb-2">
                Data Engineering
              </h4>
              <p className="text-gray-300 text-sm">
                dbt, Airflow, Snowflake, ETL pipelines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;