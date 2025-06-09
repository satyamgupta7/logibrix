import React from "react";

const StaticWebsite = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-25 text-gray-800 md:px-10 dark:bg-gray-900 dark:text-gray-200">
      <div className="border-body-color/[.15] mx-auto max-w-6xl border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.1]">
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-blue-700 sm:text-5xl dark:text-blue-400">
            Static Website Development
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Crafting clean, scalable, and responsive websites with a
            design-first approach for businesses of all sizes.
          </p>
        </div>

        {/* Services */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-xl transition hover:shadow-2xl dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Website Development
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We build search engine optimized, mobile-first, fast-loading
              websites using modern frameworks and design systems tailored to
              your brand.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-xl transition hover:shadow-2xl dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Website Building
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              From single landing pages to fully-integrated CMS platforms, we
              deliver websites that are pixel-perfect and performance-optimized.
            </p>
          </div>
        </div>

        {/* Target Clients */}
        <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 p-8 shadow-lg dark:border-blue-400 dark:from-blue-900/10 dark:to-blue-800/10">
          <h3 className="mb-6 text-2xl font-bold text-blue-800 dark:text-blue-300">
            We Create Websites For:
          </h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-base text-gray-700 sm:grid-cols-2 md:grid-cols-3 dark:text-gray-300">
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Local Shops</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Gyms & Fitness Centers</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Schools & Colleges</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Startups & Entrepreneurs</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Portfolios & Personal Brands</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Landing Pages & Blogs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticWebsite;
