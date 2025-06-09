import React from "react";

const DomainHosting = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-25 text-gray-800 md:px-10 dark:bg-gray-900 dark:text-gray-200">
      <div className="border-body-color/[.15] mx-auto max-w-6xl border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.1]">
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-blue-700 sm:text-5xl dark:text-blue-400">
            Domain & Hosting Assistance
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Helping you secure the perfect domain name and reliable hosting
            solutions tailored to your business needs.
          </p>
        </div>

        {/* Services */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-xl transition hover:shadow-2xl dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Domain Registration & Management
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We assist in selecting, registering, and managing domain names
              that reflect your brand identity and optimize online presence.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-xl transition hover:shadow-2xl dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Reliable Hosting Solutions
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Offering a range of hosting services including shared, VPS, and
              dedicated servers with 24/7 support and high uptime guarantees.
            </p>
          </div>
        </div>

        {/* Target Clients */}
        <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 p-8 shadow-lg dark:border-blue-400 dark:from-blue-900/10 dark:to-blue-800/10">
          <h3 className="mb-6 text-2xl font-bold text-blue-800 dark:text-blue-300">
            Ideal For:
          </h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-base text-gray-700 sm:grid-cols-2 md:grid-cols-3 dark:text-gray-300">
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Startups & New Businesses</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Small & Medium Enterprises</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Freelancers & Personal Brands</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Bloggers & Content Creators</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Nonprofits & Organizations</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Agencies & Consultants</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainHosting;
