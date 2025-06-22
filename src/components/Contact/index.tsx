"use client";
import { useEffect, useRef } from "react";

const Contact = () => {
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

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-14 md:py-14 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.03),transparent_50%)]"></div>

      <div className="relative z-10 container">
        {/* Header */}
        <div className="fade-element mb-20 translate-y-8 text-center opacity-0">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-100/80 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
            Let&apos;s Connect
          </div>
          <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            Ready to Start Your
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Journey?
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Transform your business with our premium digital solutions.
            Let&apos;s discuss your vision and create something extraordinary
            together.
          </p>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="fade-element translate-y-8 opacity-0">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl md:p-12 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                Send us a message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="group">
                    <label className="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:bg-gray-600"
                    />
                  </div>
                  <div className="group">
                    <label className="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:bg-gray-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="group">
                    <label className="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:bg-gray-600"
                    />
                  </div>
                  <div className="group">
                    <label className="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Project Budget
                    </label>
                    <select className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 transition-all duration-300 focus:border-blue-500 focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:bg-gray-600">
                      <option>Select budget range</option>
                      <option>Under ₹50,000</option>
                      <option>₹50,000 - ₹1,00,000</option>
                      <option>₹1,00,000 - ₹3,00,000</option>
                      <option>₹3,00,000 - ₹5,00,000</option>
                      <option>₹5,00,000+</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Project Type *
                  </label>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                    {[
                      "Website",
                      "E-commerce",
                      "Mobile App",
                      "Branding",
                      "SEO/Marketing",
                      "Other",
                    ].map((type) => (
                      <label
                        key={type}
                        className="relative flex cursor-pointer items-center justify-center rounded-lg border-2 border-gray-200 p-3 transition-colors hover:border-blue-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 dark:border-gray-600 dark:has-[:checked]:bg-blue-900/20"
                      >
                        <input
                          type="radio"
                          name="projectType"
                          className="absolute h-full w-full cursor-pointer opacity-0"
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <label className="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Project Details *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    className="w-full resize-none rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:bg-gray-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 active:scale-95"
                >
                  Send Message
                  <span className="ml-2">→</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="fade-element translate-y-8 opacity-0">
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid gap-6">
                <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-xl text-white transition-transform duration-300 group-hover:scale-110">
                      📧
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                        Email Us
                      </h3>
                      <p className="mb-1 text-gray-600 dark:text-gray-300">
                        hello@logibrix.in
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        We&apos;ll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-xl text-white transition-transform duration-300 group-hover:scale-110">
                      📞
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                        Call Us
                      </h3>
                      <p className="mb-1 text-gray-600 dark:text-gray-300">
                        +91 8358952017
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Mon-Fri 9AM-6PM IST
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-xl text-white transition-transform duration-300 group-hover:scale-110">
                      💬
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                        Live Chat
                      </h3>
                      <p className="mb-1 text-gray-600 dark:text-gray-300">
                        Available 24/7
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Instant support via WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 dark:from-gray-800 dark:to-gray-700">
                <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                  Why Choose LogiBrix?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      100+ Successful Projects
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      98% Client Satisfaction
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      24/7 Premium Support
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Money-Back Guarantee
                    </span>
                  </div>
                </div>
              </div>
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

export default Contact;
