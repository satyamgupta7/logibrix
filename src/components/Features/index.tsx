"use client";
import { useEffect, useRef } from "react";

const Features = () => {
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

    const cards = sectionRef.current?.querySelectorAll(".feature-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      icon: "🚀",
      title: "Lightning Fast Performance",
      description:
        "Optimized code and modern frameworks ensure your website loads in under 2 seconds, boosting user engagement and SEO rankings.",
    },
    {
      id: 2,
      icon: "📱",
      title: "Mobile-First Design",
      description:
        "Responsive designs that look perfect on all devices, from smartphones to desktops, ensuring maximum reach for your business.",
    },
    {
      id: 3,
      icon: "🔒",
      title: "Enterprise Security",
      description:
        "Bank-level security protocols, SSL certificates, and regular security audits to protect your business and customer data.",
    },
    {
      id: 4,
      icon: "⚡",
      title: "24/7 Support & Maintenance",
      description:
        "Round-the-clock technical support and proactive maintenance to ensure your website runs smoothly without interruptions.",
    },
    {
      id: 5,
      icon: "📈",
      title: "SEO Optimization",
      description:
        "Built-in SEO best practices and analytics integration to help your website rank higher and attract more customers.",
    },
    {
      id: 6,
      icon: "🎨",
      title: "Custom Brand Identity",
      description:
        "Unique designs tailored to your brand, creating a memorable online presence that sets you apart from competitors.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-10 md:py-14 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>

      <div className="relative z-10 container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-100/80 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
            Why Choose Us
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Premium Features That
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            We deliver cutting-edge web solutions with enterprise-grade features
            that help your business grow and succeed in the digital landscape.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-card group relative translate-y-8 transform rounded-2xl border border-gray-100 bg-white p-8 opacity-0 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500/30`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6 transform text-5xl transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
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

export default Features;
