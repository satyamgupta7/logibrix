"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
                    target === 98 ? "98%" : target === 500 ? "500+" : "24/7";
                  clearInterval(timer);
                } else {
                  element.textContent =
                    target === 98
                      ? `${Math.floor(current)}%`
                      : target === 500
                        ? `${Math.floor(current)}+`
                        : "24/7";
                }
              }, 30);
            });
          }
        });
      },
      { threshold: 0.5 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pt-36 pb-18 sm:pt-36 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/20"></div>
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 animate-pulse rounded-full bg-blue-500/10 blur-3xl delay-1000 dark:bg-blue-500/20"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[length:60px_60px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)]"></div>
      </div>

      <div className="relative z-10 container mx-auto flex h-full items-center justify-center px-4 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main heading */}
          <h1 className="mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-3xl leading-tight font-bold text-transparent sm:text-4xl md:text-6xl lg:text-7xl dark:from-white dark:via-purple-200 dark:to-blue-200">
            Transform Your Digital Presence
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-8 max-w-3xl px-4 text-base leading-relaxed text-gray-600 sm:px-0 sm:text-lg md:text-xl dark:text-gray-300">
            We craft premium digital experiences that drive growth, enhance
            brand value, and deliver measurable results for industry leaders.
          </p>

          {/* Stats */}
          <div
            ref={statsRef}
            className="mx-auto mb-8 grid max-w-2xl grid-cols-3 gap-4 px-4 sm:gap-6 sm:px-0"
          >
            <div className="text-center">
              <div
                data-count="500"
                className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl dark:text-white"
              >
                0+
              </div>
              <div className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div
                data-count="98"
                className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl dark:text-white"
              >
                0%
              </div>
              <div className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl dark:text-white">
                24/7
              </div>
              <div className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                Support
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="group relative transform rounded-full border border-purple-500/20 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95 sm:px-8 sm:py-4 sm:text-lg"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 blur transition-opacity duration-300 group-hover:opacity-50"></div>
            </Link>

            <Link
              href="#portfolio"
              className="relative transform rounded-full border border-gray-200 bg-gray-100/80 px-6 py-3 text-base font-semibold text-gray-900 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-200/80 hover:shadow-lg active:scale-95 sm:px-8 sm:py-4 sm:text-lg dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              <span className="relative z-10">View Our Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
