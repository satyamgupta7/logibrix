"use client";
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");

            // Animate stats counters
            if (entry.target.classList.contains("stats-section")) {
              const counters = entry.target.querySelectorAll("[data-count]");
              counters.forEach((counter) => {
                const target = parseInt(
                  counter.getAttribute("data-count") || "0",
                );
                const element = counter as HTMLElement;
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                  current += increment;
                  if (current >= target) {
                    element.textContent =
                      target === 98
                        ? "98%"
                        : target === 500
                          ? "500+"
                          : target === 50
                            ? "50+"
                            : "24/7";
                    clearInterval(timer);
                  } else {
                    element.textContent =
                      target === 98
                        ? `${Math.floor(current)}%`
                        : target === 500
                          ? `${Math.floor(current)}+`
                          : target === 50
                            ? `${Math.floor(current)}+`
                            : "24/7";
                  }
                }, 30);
              });
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-element");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "500+", count: 500, label: "Projects Delivered" },
    { number: "98%", count: 98, label: "Client Satisfaction" },
    { number: "50+", count: 50, label: "Enterprise Clients" },
    { number: "24/7", count: 24, label: "Support Available" },
  ];

  const capabilities = [
    {
      icon: "🚀",
      title: "Enterprise-Grade Solutions",
      desc: "Scalable architecture built for growth",
    },
    {
      icon: "🔒",
      title: "Security First Approach",
      desc: "Bank-level security protocols",
    },
    {
      icon: "⚡",
      title: "Lightning Fast Performance",
      desc: "Optimized for speed and efficiency",
    },
    {
      icon: "🎯",
      title: "Strategic Digital Consulting",
      desc: "Data-driven business solutions",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-18 md:py-20 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.03),transparent_50%)]"></div>

      <div className="relative z-10 container">
        {/* Header Section */}
        <div className="fade-element mb-20 translate-y-8 text-center opacity-0">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-100/80 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
            About LogiBrix
          </div>
          <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            Transforming Ideas Into
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            We are a premier digital transformation partner, empowering
            businesses worldwide with cutting-edge web solutions, innovative
            technologies, and strategic digital consulting that drives
            measurable growth and competitive advantage.
          </p>
        </div>

        {/* Stats Section */}
        <div className="stats-section fade-element mb-20 grid translate-y-8 grid-cols-2 gap-8 opacity-0 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            >
              <div
                data-count={stat.count}
                className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
              >
                {stat.count === 24 ? "24/7" : "0"}
              </div>
              <div className="font-medium text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="fade-element translate-y-8 opacity-0">
            <h3 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Leading the Future of
              <span className="text-blue-600"> Digital Innovation</span>
            </h3>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                Founded with a vision to democratize digital excellence,
                LogiBrix has evolved into a trusted technology partner for
                startups, SMEs, and Fortune 500 companies. Our expertise spans
                across modern web development, cloud architecture, and digital
                strategy.
              </p>
              <p>
                We combine technical mastery with business acumen to deliver
                solutions that not only meet today's requirements but anticipate
                tomorrow's challenges. Our agile methodology and client-centric
                approach ensure every project exceeds expectations.
              </p>
              <p>
                From concept to deployment, we maintain the highest standards of
                quality, security, and performance, making us the preferred
                choice for businesses seeking digital transformation.
              </p>
            </div>
          </div>

          {/* Right Content - Capabilities */}
          <div className="fade-element translate-y-8 opacity-0">
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 dark:from-gray-800 dark:to-gray-700">
              <h4 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                Core Capabilities
              </h4>
              <div className="space-y-6">
                {capabilities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800"
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h5 className="mb-1 font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="fade-element translate-y-8 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white opacity-0">
          <h3 className="mb-6 text-3xl font-bold md:text-4xl">Our Mission</h3>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed">
            To empower businesses with innovative digital solutions that drive
            growth, enhance user experiences, and create lasting competitive
            advantages in an ever-evolving digital landscape.
          </p>
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

export default AboutSection;
