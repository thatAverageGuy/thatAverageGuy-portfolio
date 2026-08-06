import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  User,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      window.emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (!window.emailjs) {
        throw new Error("EmailJS not loaded. Please refresh and try again.");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "yogesh.singh893@gmail.com",
      };

      const result = await window.emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "email",
      value: "yogesh.singh893@gmail.com",
      href: "mailto:yogesh.singh893@gmail.com",
    },
    {
      icon: Phone,
      label: "phone",
      value: "+91 8299114693",
      href: "tel:+918299114693",
    },
    {
      icon: MapPin,
      label: "location",
      value: "Jaunpur, UP, India",
      href: null,
    },
    {
      icon: Linkedin,
      label: "linkedin",
      value: "linkedin.com/in/yogi893",
      href: "https://www.linkedin.com/in/yogi893/",
    },
    {
      icon: Github,
      label: "github",
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
    { name: "Hindi", level: "Proficient" },
    { name: "English", level: "Proficient" },
  ];

  return (
    <section id="contact" className="py-20 bg-term-surface border-t border-term-border">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <p className="font-mono text-sm text-term-accent mb-3">
            <span className="text-term-dim">$</span> ./contact.sh --verbose
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-term-text mb-4">
            Let's build something that ships
          </h2>
          <p className="text-term-muted max-w-2xl leading-relaxed">
            Open to talking GenAI, computer vision, or MLOps — or debating why your RAG pipeline
            keeps hallucinating. I have opinions, and occasionally they're even useful.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="font-mono text-sm text-term-dim mb-6">// send a message</h3>

              {submitStatus === "success" && (
                <div className="bg-term-bg border border-term-ok/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-term-ok" size={18} />
                    <span className="text-term-ok text-sm font-mono">
                      message sent — I'll reply soon
                    </span>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-term-bg border border-red-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="text-red-400" size={18} />
                    <span className="text-red-400 text-sm font-mono">
                      send failed — try again or email me directly
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-term-muted mb-2 text-xs font-mono">
                      name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-term-dim" size={18} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full bg-term-bg border border-term-border rounded-lg pl-10 pr-4 py-3 text-term-text placeholder-term-dim focus:border-term-accent focus:outline-none transition-colors disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-term-muted mb-2 text-xs font-mono">
                      email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-term-dim" size={18} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full bg-term-bg border border-term-border rounded-lg pl-10 pr-4 py-3 text-term-text placeholder-term-dim focus:border-term-accent focus:outline-none transition-colors disabled:opacity-50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-term-muted mb-2 text-xs font-mono">
                    subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-term-bg border border-term-border rounded-lg px-4 py-3 text-term-text placeholder-term-dim focus:border-term-accent focus:outline-none transition-colors disabled:opacity-50"
                    placeholder="Project, consulting, collaboration..."
                  />
                </div>

                <div>
                  <label className="block text-term-muted mb-2 text-xs font-mono">
                    message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full bg-term-bg border border-term-border rounded-lg px-4 py-3 text-term-text placeholder-term-dim focus:border-term-accent focus:outline-none transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell me about your project or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-term-accent text-term-bg py-3 rounded-lg font-mono font-semibold hover:bg-term-accent/90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-term-bg"></div>
                      <span>sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>send message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="font-mono text-sm text-term-dim mb-6">// reach me directly</h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-term-bg border border-term-border rounded-lg flex items-center justify-center flex-shrink-0">
                        {React.createElement(info.icon, {
                          className: "text-term-accent",
                          size: 18,
                        })}
                      </div>
                      <div>
                        <p className="text-term-dim text-xs font-mono">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-term-text hover:text-term-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-term-text">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-term-bg rounded-lg p-6 border border-term-border">
                <h4 className="font-mono text-xs text-term-dim mb-3">// address</h4>
                <p className="text-term-muted text-sm leading-relaxed">
                  280A, New Colony, Miyanpur,
                  <br />
                  Jaunpur, UP (222002)
                  <br />
                  India
                </p>
                <p className="text-term-ok text-xs mt-3 font-mono">remote available</p>
              </div>

              <div className="bg-term-bg rounded-lg p-6 border border-term-border">
                <h4 className="font-mono text-xs text-term-dim mb-4">// languages</h4>
                <div className="space-y-2.5">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-term-text text-sm">{lang.name}</span>
                      <span className="text-term-accent text-xs font-mono">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-term-bg rounded-lg p-6 border border-term-border">
                <h4 className="font-mono text-xs text-term-dim mb-4">// open to</h4>
                <ul className="space-y-2">
                  {collaborationAreas.map((area, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-term-accent mt-1.5 flex-shrink-0 font-mono text-xs">
                        &gt;
                      </span>
                      <span className="text-term-muted text-sm">{area}</span>
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
