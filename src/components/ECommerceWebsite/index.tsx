"use client";
import { useEffect, useRef } from "react";

const ECommerceWebsite = () => {
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
      icon: "🛒",
      title: "Custom E-Commerce Development",
      description:
        "Tailored online stores built with cutting-edge technology, optimized for conversions and designed to scale with your business growth.",
      features: ["Custom Design", "Mobile Optimized", "SEO Ready"],
    },
    {
      icon: "💳",
      title: "Secure Payment Integration",
      description:
        "Multiple payment gateways including UPI, cards, wallets, and COD with bank-level security and fraud protection systems.",
      features: [
        "Multiple Gateways",
        "Secure Transactions",
        "Fraud Protection",
      ],
    },
    {
      icon: "📊",
      title: "Inventory & Order Management",
      description:
        "Real-time inventory tracking, automated order processing, and comprehensive analytics to streamline your business operations.",
      features: [
        "Real-time Tracking",
        "Order Automation",
        "Analytics Dashboard",
      ],
    },
    {
      icon: "🚀",
      title: "Marketing & Growth Tools",
      description:
        "Built-in SEO optimization, email marketing integration, and social media tools to drive traffic and increase sales.",
      features: ["SEO Optimization", "Email Marketing", "Social Integration"],
    },
  ];

  const clients = [
    {
      icon: "👕",
      name: "Fashion & Apparel",
      desc: "Clothing, accessories, and lifestyle brands",
      sales: "₹2L+ monthly sales",
    },
    {
      icon: "📱",
      name: "Electronics & Gadgets",
      desc: "Tech products and electronic devices",
      sales: "₹5L+ monthly sales",
    },
    {
      icon: "🍕",
      name: "Food & Beverage",
      desc: "Restaurants, cafes, and food delivery",
      sales: "₹1L+ monthly sales",
    },
    {
      icon: "💄",
      name: "Health & Beauty",
      desc: "Cosmetics, skincare, and wellness",
      sales: "₹3L+ monthly sales",
    },
    {
      icon: "🏠",
      name: "Home & Lifestyle",
      desc: "Furniture, decor, and home essentials",
      sales: "₹4L+ monthly sales",
    },
    {
      icon: "📚",
      name: "Books & Education",
      desc: "Educational content and materials",
      sales: "₹1.5L+ monthly sales",
    },
  ];

  const features = [
    {
      icon: "🔒",
      title: "Secure Checkout",
      desc: "SSL encryption & PCI compliance",
    },
    {
      icon: "📱",
      title: "Mobile Commerce",
      desc: "Optimized for mobile shopping",
    },
    {
      icon: "🎯",
      title: "Conversion Optimization",
      desc: "Designed to maximize sales",
    },
    {
      icon: "⚡",
      title: "Fast Performance",
      desc: "Lightning-fast page loads",
    },
    {
      icon: "📈",
      title: "Analytics & Reports",
      desc: "Detailed sales insights",
    },
    { icon: "🔄", title: "Easy Management", desc: "User-friendly admin panel" },
  ];

  const stats = [
    { number: "250%", label: "Average Sales Increase" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Technical Support" },
    { number: "30+", label: "Payment Methods" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-18 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.03),transparent_50%)]"></div>

      <div className="relative z-10 container max-w-7xl">
        {/* Header */}
        <div className="fade-element mb-20 translate-y-8 text-center opacity-0">
          <div className="mb-6 inline-flex items-center rounded-full border border-green-200 bg-green-100/80 px-4 py-2 text-sm font-medium text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-300">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
            E-Commerce Solutions
          </div>
          <h1 className="mb-8 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            E-Commerce Website
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Development
            </span>
          </h1>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Launch your online store with powerful e-commerce solutions that
            drive sales, manage inventory, and deliver exceptional shopping
            experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="fade-element mb-20 grid translate-y-8 grid-cols-2 gap-6 opacity-0 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-2 text-3xl font-bold text-green-600 md:text-4xl dark:text-green-400">
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
              className={`fade-element group translate-y-8 transform rounded-3xl border border-gray-100 bg-white p-6 opacity-0 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-500/30`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 transform text-4xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              <div className="space-y-1">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="fade-element mb-20 translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Powerful E-Commerce Features
            </h3>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Everything you need to run a successful online business, built-in
              and ready to use.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-blue-50 p-6 transition-all duration-300 hover:shadow-lg dark:border-green-500/20 dark:from-green-900/10 dark:to-blue-900/10"
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

        {/* Client Success Stories */}
        <div className="fade-element mb-20 translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Success Stories Across Industries
            </h3>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Our e-commerce solutions have helped businesses across various
              industries achieve remarkable growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:border-green-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-500/30"
              >
                <div className="mb-4 flex items-start space-x-4">
                  <div className="transform text-3xl transition-transform duration-300 group-hover:scale-110">
                    {client.icon}
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-gray-900 transition-colors group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400">
                      {client.name}
                    </h4>
                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                      {client.desc}
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-green-100 px-3 py-2 dark:bg-green-900/20">
                  <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                    💰 {client.sales}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="fade-element translate-y-8 text-center opacity-0">
          <div className="rounded-3xl bg-gradient-to-r from-green-600 to-blue-600 p-8 text-white md:p-12">
            <h3 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Launch Your Online Store?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
              Start selling online with a professional e-commerce website.
              Complete setup from ₹25,000 including payment gateway integration.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="transform rounded-xl bg-white px-8 py-4 font-bold text-green-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Start Your Store
              </button>
              <button className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10">
                View Demo Stores
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

export default ECommerceWebsite;
