import React from "react";

const StaticWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-20 text-gray-800 md:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-blue-700">
          LogiBrix - Static Website Development
        </h1>

        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-2 text-2xl font-semibold text-gray-800">
              Website Development
            </h2>
            <p className="text-gray-600">
              Enhance your online presence with search engine optimized,
              user-friendly, mobile-responsive websites. We use the latest
              technology, hosting solutions, and plugin tools aligned with
              current market trends to ensure the best results.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-2 text-2xl font-semibold text-gray-800">
              Website Building
            </h2>
            <p className="text-gray-600">
              Design & develop diverse types of websites, including landing
              pages, blog sites, multi-page websites, and sites with backend
              content management systems to suit your unique needs.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-md">
          <h3 className="mb-4 text-xl font-semibold text-blue-800">
            We Create Websites For:
          </h3>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>Local Shops</li>
            <li>Gyms & Fitness Centers</li>
            <li>Schools & Colleges</li>
            <li>Portfolios & Personal Brands</li>
            <li>Startups & Small Businesses</li>
            <li>Landing Pages & Blogs</li>
            <li>Many More Custom Requirements</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StaticWebsite;
