"use client";
import { useEffect, useRef } from "react";

const DomainHosting = () => {
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
      icon: "🌐",
      title: "Domain Registration & Management",
      description:
        "Secure the perfect domain name for your brand with our comprehensive domain services including registration, renewal, and DNS management.",
      features: [
        "Domain Search",
        "DNS Management",
        "Auto-Renewal",
        "Privacy Protection",
      ],
    },
    {
      icon: "☁️",
      title: "Premium Hosting Solutions",
      description:
        "High-performance hosting with 99.9% uptime guarantee, SSD storage, and 24/7 technical support for optimal website performance.",
      features: ["SSD Storage", "99.9% Uptime", "24/7 Support", "Free SSL"],
    },
    {
      icon: "🔒",
      title: "Security & Backup Services",
      description:
        "Comprehensive security solutions including SSL certificates, malware protection, and automated daily backups for peace of mind.",
      features: [
        "SSL Certificates",
        "Malware Protection",
        "Daily Backups",
        "Security Monitoring",
      ],
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description:
        "Advanced caching, CDN integration, and server optimization to ensure your website loads lightning-fast for better user experience.",
      features: [
        "CDN Integration",
        "Advanced Caching",
        "Speed Optimization",
        "Performance Monitoring",
      ],
    },
  ];

  const hostingPlans = [
    {
      name: "Starter",
      price: "₹199",
      period: "/month",
      icon: "🚀",
      features: [
        "1 Website",
        "10GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "24/7 Support",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "₹399",
      period: "/month",
      icon: "💼",
      features: [
        "5 Websites",
        "50GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Priority Support",
        "Free Domain",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹799",
      period: "/month",
      icon: "🏢",
      features: [
        "Unlimited Websites",
        "200GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Dedicated Support",
        "Free Domain",
        "Advanced Security",
      ],
      popular: false,
    },
  ];

  const domainExtensions = [
    { ext: ".com", price: "₹999", icon: "🌍" },
    { ext: ".in", price: "₹699", icon: "🇮🇳" },
    { ext: ".org", price: "₹1299", icon: "🏛️" },
    { ext: ".net", price: "₹1199", icon: "🔗" },
    { ext: ".co", price: "₹2499", icon: "🚀" },
    { ext: ".io", price: "₹4999", icon: "💻" },
  ];

  const clients = [
    {
      icon: "🏪",
      name: "Small Businesses",
      desc: "Perfect for local shops and services",
    },
    {
      icon: "🚀",
      name: "Startups",
      desc: "Scalable solutions for growing companies",
    },
    {
      icon: "👤",
      name: "Freelancers",
      desc: "Professional presence for individuals",
    },
    {
      icon: "📝",
      name: "Bloggers",
      desc: "Reliable hosting for content creators",
    },
    {
      icon: "🏢",
      name: "Enterprises",
      desc: "High-performance solutions for large businesses",
    },
    {
      icon: "🎓",
      name: "Educational",
      desc: "Affordable hosting for schools and nonprofits",
    },
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Technical Support" },
    { number: "1000+", label: "Domains Managed" },
    { number: "500+", label: "Websites Hosted" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-18 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_50%)]"></div>

      <div className="relative z-10 container max-w-7xl">
        {/* Header */}
        <div className="fade-element mb-20 translate-y-8 text-center opacity-0">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-100/80 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
            Domain & Hosting Services
          </div>
          <h1 className="mb-8 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            Domain & Hosting
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Get your business online with premium domain registration and
            reliable hosting services. Everything you need to establish a strong
            digital presence.
          </p>
        </div>

        {/* Stats */}
        <div className="fade-element mb-20 grid translate-y-8 grid-cols-2 gap-6 opacity-0 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-2 text-3xl font-bold text-blue-600 md:text-4xl dark:text-blue-400">
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
              className={`fade-element group translate-y-8 transform rounded-3xl border border-gray-100 bg-white p-6 opacity-0 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500/30`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 transform text-4xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              <div className="space-y-1">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hosting Plans */}
        <div className="fade-element mb-20 translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Hosting Plans That Scale
            </h3>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Choose the perfect hosting plan for your needs. All plans include
              free SSL, 24/7 support, and 99.9% uptime guarantee.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {hostingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative transform rounded-3xl border-2 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800 ${
                  plan.popular
                    ? "border-blue-500 ring-4 ring-blue-500/20"
                    : "border-gray-200 hover:border-blue-300 dark:border-gray-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                    <span className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-sm font-bold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6 text-center">
                  <div className="mb-4 text-4xl">{plan.icon}</div>
                  <h4 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h4>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-gray-600 dark:text-gray-300">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full rounded-xl px-6 py-3 font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Extensions */}
        <div className="fade-element mb-20 translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Popular Domain Extensions
            </h3>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Secure your perfect domain name with competitive pricing and
              instant registration.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {domainExtensions.map((domain, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:border-blue-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500/30"
              >
                <div className="mb-3 transform text-3xl transition-transform duration-300 group-hover:scale-110">
                  {domain.icon}
                </div>
                <div className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {domain.ext}
                </div>
                <div className="font-bold text-blue-600 dark:text-blue-400">
                  {domain.price}/year
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Types */}
        <div className="fade-element mb-20 translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Perfect For Every Business
            </h3>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              From startups to enterprises, our domain and hosting solutions are
              designed to meet diverse business needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 transition-all duration-300 hover:shadow-lg dark:border-blue-500/20 dark:from-blue-900/10 dark:to-cyan-900/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="transform text-3xl transition-transform duration-300 group-hover:scale-110">
                    {client.icon}
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-gray-900 dark:text-white">
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
        <div className="fade-element translate-y-8 text-center opacity-0">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white md:p-12">
            <h3 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Get Online?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
              Start your digital journey today with our premium domain and
              hosting services. Get your website live in minutes!
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="transform rounded-xl bg-white px-8 py-4 font-bold text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Register Domain
              </button>
              <button className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10">
                Choose Hosting
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

export default DomainHosting;
