"use client";
import { useEffect, useRef } from "react";

const DynamicWebsite = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-element");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "⚡",
      title: "Interactive Web Applications",
      description:
        "Feature-rich applications with real-time updates, user authentication, and seamless integrations that engage users and drive business growth.",
      features: ["Real-time Updates", "User Authentication", "API Integration"],
    },
    {
      icon: "🔧",
      title: "Custom Backend Development",
      description:
        "Robust server-side solutions with secure APIs, database optimization, and cloud infrastructure for scalable performance.",
      features: ["API Development", "Database Design", "Cloud Integration"],
    },
    {
      icon: "📊",
      title: "Data Management Systems",
      description:
        "Advanced data processing, analytics dashboards, and reporting tools to help you make informed business decisions.",
      features: ["Data Analytics", "Custom Dashboards", "Automated Reports"],
    },
    {
      icon: "🔐",
      title: "Security & Performance",
      description:
        "Enterprise-grade security measures, performance optimization, and monitoring systems for reliable operation.",
      features: [
        "Security Protocols",
        "Performance Optimization",
        "24/7 Monitoring",
      ],
    },
  ];

  const technologies = [
    { name: "React/Next.js", icon: "⚛️", desc: "Modern frontend frameworks" },
    {
      name: "Node.js/Python",
      icon: "🐍",
      desc: "Powerful backend technologies",
    },
    { name: "MongoDB/PostgreSQL", icon: "🗄️", desc: "Scalable databases" },
    { name: "AWS/Azure", icon: "☁️", desc: "Cloud infrastructure" },
    { name: "Docker/Kubernetes", icon: "🐳", desc: "Containerization" },
    { name: "GraphQL/REST", icon: "🔗", desc: "API architectures" },
  ];

  const clients = [
    {
      icon: "🏢",
      name: "SaaS Platforms",
      desc: "Subscription-based software solutions",
      complexity: "Enterprise Level",
    },
    {
      icon: "🏠",
      name: "Real Estate Portals",
      desc: "Property listings and management",
      complexity: "High Complexity",
    },
    {
      icon: "👥",
      name: "Social Networks",
      desc: "Community and networking platforms",
      complexity: "Advanced Features",
    },
    {
      icon: "🎓",
      name: "Learning Management",
      desc: "Educational platforms and courses",
      complexity: "Custom Solutions",
    },
    {
      icon: "💼",
      name: "Enterprise Portals",
      desc: "Internal business applications",
      complexity: "Corporate Grade",
    },
    {
      icon: "🛍️",
      name: "Marketplace Platforms",
      desc: "Multi-vendor e-commerce solutions",
      complexity: "Full-Stack Development",
    },
  ];

  const features = [
    {
      icon: "🚀",
      title: "High Performance",
      desc: "Optimized for speed and scalability",
    },
    {
      icon: "🔄",
      title: "Real-time Features",
      desc: "Live updates and notifications",
    },
    { icon: "📱", title: "Responsive Design", desc: "Perfect on all devices" },
    {
      icon: "🔒",
      title: "Secure Architecture",
      desc: "Enterprise-grade security",
    },
    {
      icon: "⚙️",
      title: "Easy Management",
      desc: "Intuitive admin interfaces",
    },
    {
      icon: "📈",
      title: "Analytics Ready",
      desc: "Built-in tracking and insights",
    },
  ];

  const stats = [
    { number: "500%", label: "Performance Improvement" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "50+", label: "Integrations Available" },
    { number: "24/7", label: "Technical Support" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-18 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.03),transparent_50%)]"></div>

      <div className="relative z-10 container max-w-7xl">
        {/* Header */}
        <div className="fade-element mb-20 translate-y-8 text-center opacity-0">
          <div className="mb-6 inline-flex items-center rounded-full border border-purple-200 bg-purple-100/80 px-4 py-2 text-sm font-medium text-purple-700 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-300">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-purple-500"></span>
            Advanced Web Solutions
          </div>
          <h1 className="mb-8 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            Dynamic Website
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Development
            </span>
          </h1>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Build powerful, interactive web applications with advanced
            functionality, real-time features, and scalable architecture that
            grows with your business.
          </p>
        </div>

        {/* Stats */}
        <div className="fade-element mb-20 grid translate-y-8 grid-cols-2 gap-6 opacity-0 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-2 text-3xl font-bold text-purple-600 md:text-4xl dark:text-purple-400">
                {stat.number}
              </div>
              <div className="font-medium text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`fade-element group translate-y-8 transform rounded-3xl border border-gray-100 bg-white p-6 opacity-0 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-500/30`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 transform text-4xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              <div className="space-y-1">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="fade-element mb-20 translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Cutting-Edge Technologies
            </h3>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              We use the latest technologies and frameworks to build robust,
              scalable, and maintainable applications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 p-6 transition-all duration-300 hover:shadow-lg dark:border-purple-500/20 dark:from-purple-900/10 dark:to-blue-900/10"
              >
                <div className="flex items-center space-x-4">
                  <div className="transform text-3xl transition-transform duration-300 group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-gray-900 dark:text-white">
                      {tech.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="fade-element mb-20 translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Advanced Features & Capabilities
            </h3>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Every dynamic website comes with powerful features designed to
              enhance user experience and business operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:border-purple-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-500/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="transform text-2xl transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Applications */}
        <div className="fade-element mb-20 translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Complex Applications We Build
            </h3>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              From simple web apps to enterprise-grade platforms, we handle
              projects of any complexity and scale.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:border-purple-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-500/30"
              >
                <div className="mb-4 flex items-start space-x-4">
                  <div className="transform text-3xl transition-transform duration-300 group-hover:scale-110">
                    {client.icon}
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                      {client.name}
                    </h4>
                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                      {client.desc}
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-purple-100 px-3 py-2 dark:bg-purple-900/20">
                  <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                    🎯 {client.complexity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="fade-element translate-y-8 text-center opacity-0">
          <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white md:p-12">
            <h3 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Build Something Amazing?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
              Transform your ideas into powerful web applications. Custom
              development starting from ₹50,000 with full-stack solutions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="transform rounded-xl bg-white px-8 py-4 font-bold text-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Start Your Project
              </button>
              <button className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default DynamicWebsite;
