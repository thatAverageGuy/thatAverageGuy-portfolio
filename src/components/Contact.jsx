import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  MessageSquare,
  User,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yogesh.singh893@gmail.com",
      href: "mailto:yogesh.singh893@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8299114693",
      href: "tel:+918299114693",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jaunpur, UP, India",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yogi893",
      href: "https://www.linkedin.com/in/yogi893/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/thatAverageGuy",
      href: "https://github.com/thatAverageGuy",
    },
  ];

  const collaborationAreas = [
    "Generative AI & LLM Fine-tuning",
    "Computer Vision Applications",
    "MLOps & Model Deployment",
    "AI Consultancy & Strategy",
    "Team Leadership & Mentoring",
  ];

  const languages = [
    { name: "Hindi", level: "Proficient (Verbal and Written)" },
    { name: "English", level: "Proficient (Verbal and Written)" },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Intelligent Solutions Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Ready to discuss cutting-edge AI solutions, explore GenAI
            applications, or collaborate on your next breakthrough project?
            Whether it's fine-tuning LLMs, building computer vision systems, or
            developing end-to-end ML pipelines, let's create intelligent
            solutions that drive real business impact.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <MessageSquare className="text-blue-400" size={24} />
                  <span>Get In Touch</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">
                        Full Name
                      </label>
                      <div className="relative">
                        <User
                          className="absolute left-3 top-3 text-gray-400"
                          size={20}
                        />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail
                          className="absolute left-3 top-3 text-gray-400"
                          size={20}
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="Project discussion, consultation, collaboration..."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project, requirements, or how we can collaborate..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-green-500 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center">
                        {React.createElement(info.icon, {
                          className: "text-white",
                          size: 20,
                        })}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-white font-semibold mb-4">Address</h4>
                <p className="text-gray-300">
                  280A, New Colony, Miyanpur,
                  <br />
                  Jaunpur, UP (222002)
                  <br />
                  India
                </p>
                <p className="text-green-400 text-sm mt-2">Remote Available</p>
              </div>

              {/* Languages */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-white font-semibold mb-4">Languages</h4>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-300">{lang.name}</span>
                      <span className="text-blue-400 text-sm">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collaboration Areas */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-white font-semibold mb-4">
                  Collaboration Areas
                </h4>
                <ul className="space-y-2">
                  {collaborationAreas.map((area, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
