"use client";
import { useEffect, useRef, useState } from "react";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
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

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses",
      monthlyPrice: 15000,
      yearlyPrice: 150000,
      icon: "🚀",
      popular: false,
      features: [
        "Static Website (5 Pages)",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Form",
        "1 Year Hosting",
        "SSL Certificate",
      ],
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 35000,
      yearlyPrice: 350000,
      icon: "💼",
      popular: true,
      features: [
        "Dynamic Website (10 Pages)",
        "Custom Design",
        "Advanced SEO",
        "CMS Integration",
        "E-commerce Ready",
        "Payment Gateway",
        "6 Months Support",
      ],
    },
    {
      name: "Enterprise",
      description: "Complete business solution",
      monthlyPrice: 75000,
      yearlyPrice: 750000,
      icon: "🏢",
      popular: false,
      features: [
        "Custom Web Application",
        "Unlimited Pages",
        "E-commerce Platform",
        "Multi-language Support",
        "Custom Integrations",
        "Priority Support 24/7",
        "1 Year Maintenance",
      ],
    },
  ];

  const addOns = [
    { name: "Additional Page", price: "₹1,500", icon: "📄" },
    { name: "Logo Design", price: "₹3,000", icon: "🎨" },
    { name: "Content Writing", price: "₹800/page", icon: "✍️" },
    { name: "Social Media Setup", price: "₹2,000", icon: "📱" },
  ];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-18 md:py-12 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]"></div>

      <div className="relative z-10 container">
        {/* Header */}
        <div className="fade-element mb-20 translate-y-8 text-center opacity-0">
          <div className="mb-6 inline-flex items-center rounded-full border border-green-200 bg-green-100/80 px-4 py-2 text-sm font-medium text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-300">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
            Transparent Pricing
          </div>
          <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            Choose Your Perfect
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Solution
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Affordable, transparent pricing with no hidden costs. Choose the
            plan that fits your business needs and budget.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="fade-element mb-16 flex translate-y-8 justify-center opacity-0">
          <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMonthly(true)}
                className={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
                  isMonthly
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                One-time Payment
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className={`relative rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
                  !isMonthly
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                Annual Package
                <span className="absolute -top-2 -right-2 rounded-full bg-green-500 px-2 py-1 text-xs text-white">
                  Save 10%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mb-20 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`fade-element hover:shadow-3xl relative translate-y-8 transform rounded-3xl border-2 bg-white opacity-0 shadow-2xl transition-all duration-500 hover:-translate-y-2 dark:bg-gray-800 ${
                plan.popular
                  ? "scale-105 border-blue-500 ring-4 ring-blue-500/20"
                  : "border-gray-200 hover:border-blue-300 dark:border-gray-700"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                  <span className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-bold text-white shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Plan Header */}
                <div className="mb-6 text-center">
                  <div className="mb-3 text-4xl">{plan.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ₹
                        {(isMonthly
                          ? plan.monthlyPrice
                          : plan.yearlyPrice
                        ).toLocaleString()}
                      </span>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">
                        {isMonthly ? "one-time" : "annual"}
                      </span>
                    </div>
                    {!isMonthly && (
                      <p className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                        Save ₹
                        {(
                          plan.monthlyPrice * 1.1 -
                          plan.yearlyPrice
                        ).toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full transform rounded-xl px-6 py-4 font-bold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/25"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="fade-element mb-20 translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Optional Add-ons
            </h3>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Enhance your package with these additional services to create the
              perfect solution for your business.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-blue-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{addon.icon}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {addon.name}
                    </span>
                  </div>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    {addon.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="fade-element mb-20 translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            {[
              {
                q: "What&apos;s included in the hosting and domain?",
                a: "All plans include 1 year of premium hosting with 99.9% uptime guarantee, SSL certificate, and domain registration (.com/.in). Renewal costs are separate.",
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes! All plans include free support for the specified duration. After that, we offer affordable maintenance packages starting from ₹2,000/month.",
              },
              {
                q: "Can I upgrade my plan later?",
                a: "Absolutely! You can upgrade your plan anytime and pay only the difference. We&apos;ll migrate all your existing content seamlessly.",
              },
              {
                q: "What if I&apos;m not satisfied?",
                a: "We offer a 30-day money-back guarantee. If you&apos;re not completely satisfied, we&apos;ll refund your payment in full.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <h4 className="mb-3 font-bold text-gray-900 dark:text-white">
                  {faq.q}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="fade-element translate-y-8 text-center opacity-0">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white md:p-12">
            <h3 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Get Started?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
              Join 100+ satisfied clients who&apos;ve transformed their business with
              our digital solutions. Get a free consultation today!
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="transform rounded-xl bg-white px-8 py-4 font-bold text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Get Free Consultation
              </button>
              <button className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10">
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

export default Pricing;
