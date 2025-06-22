"use client";
import { useEffect, useRef } from "react";

const StaticWebsite = () => {
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
      icon: "🎨",
      title: "Custom Website Design",
      description:
        "Pixel-perfect, responsive designs that capture your brand essence and convert visitors into customers with stunning visual appeal.",
      features: [
        "Mobile-First Design",
        "Brand Integration",
        "User Experience Focus",
      ],
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description:
        "Lightning-fast websites with 99% uptime, optimized for search engines and built with modern technologies for maximum performance.",
      features: ["SEO Optimized", "Fast Loading", "Modern Frameworks"],
    },
    {
      icon: "🔧",
      title: "Development & Deployment",
      description:
        "From concept to launch, we handle everything including hosting setup, domain configuration, and ongoing maintenance support.",
      features: ["Full Development", "Hosting Setup", "24/7 Support"],
    },
  ];

  const clients = [
    {
      icon: "🏪",
      name: "Local Shops & Retail",
      desc: "Showcase products and services",
    },
    {
      icon: "💪",
      name: "Gyms & Fitness Centers",
      desc: "Member management and bookings",
    },
    {
      icon: "🎓",
      name: "Schools & Colleges",
      desc: "Educational portals and information",
    },
    {
      icon: "🚀",
      name: "Startups & Entrepreneurs",
      desc: "Launch your business online",
    },
    { icon: "👤", name: "Personal Brands", desc: "Professional portfolios" },
    { icon: "📝", name: "Blogs & Content Sites", desc: "Share your expertise" },
  ];

  const features = [
    "Responsive Design",
    "SEO Optimized",
    "Fast Loading",
    "Mobile-First",
    "Modern UI/UX",
    "Cross-Browser",
    "Secure Hosting",
    "Analytics Ready",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 md:py-18 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]"></div>

      <div className="relative z-10 container max-w-7xl">
        {/* Header */}
        <div className="fade-element mb-20 translate-y-8 text-center opacity-0">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-100/80 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
            Premium Web Solutions
          </div>
          <h1 className="mb-8 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            Static Website
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Development
            </span>
          </h1>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Transform your business with stunning, high-performance websites
            that drive results. From concept to launch, we deliver premium
            digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-20 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`fade-element group translate-y-8 transform rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500/30`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 transform text-5xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {service.title}
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features Banner */}
        <div className="fade-element mb-20 translate-y-8 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white opacity-0 md:p-12">
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Choose Our Static Websites?
            </h3>
            <p className="mx-auto max-w-3xl text-xl opacity-90">
              Built with modern technologies and best practices for maximum
              performance and user experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"
              >
                <div className="font-semibold">{feature}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Types */}
        <div className="fade-element translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Perfect For Every Business
            </h3>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              From small local businesses to growing enterprises, our static
              websites are designed to meet your unique needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:border-blue-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="transform text-3xl transition-transform duration-300 group-hover:scale-110">
                    {client.icon}
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {client.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {client.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="fade-element mt-20 translate-y-8 text-center opacity-0">
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50 p-8 md:p-12 dark:border-gray-700 dark:from-gray-800 dark:to-blue-900/20">
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Ready to Launch Your Website?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              Get a professional, high-performance website that grows your
              business. Starting from just ₹15,000.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                Get Started Today
              </button>
              <button className="rounded-xl border-2 border-blue-600 px-8 py-4 font-bold text-blue-600 transition-all duration-300 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20">
                View Portfolio
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

export default StaticWebsite;
