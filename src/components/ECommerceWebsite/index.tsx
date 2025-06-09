import React from "react";

const ECommerceWebsite = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-25 text-gray-800 md:px-10 dark:bg-gray-900 dark:text-gray-200">
      <div className="border-body-color/[.15] mx-auto max-w-6xl border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.1]">
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-blue-700 sm:text-5xl dark:text-blue-400">
            E-Commerce Website Development
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Creating robust, scalable, and user-friendly e-commerce platforms
            designed to maximize sales and deliver seamless shopping
            experiences.
          </p>
        </div>

        {/* Services */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-xl transition hover:shadow-2xl dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Custom Storefronts
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We design intuitive and attractive storefronts optimized for
              conversions, featuring responsive layouts and easy navigation.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-xl transition hover:shadow-2xl dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Secure Payment & Inventory Management
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Integrated secure payment gateways and real-time inventory
              tracking ensure smooth transactions and efficient stock
              management.
            </p>
          </div>
        </div>

        {/* Target Clients */}
        <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 p-8 shadow-lg dark:border-blue-400 dark:from-blue-900/10 dark:to-blue-800/10">
          <h3 className="mb-6 text-2xl font-bold text-blue-800 dark:text-blue-300">
            Perfect For:
          </h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-base text-gray-700 sm:grid-cols-2 md:grid-cols-3 dark:text-gray-300">
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Retail & Wholesale Businesses</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Fashion & Apparel Brands</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Electronics & Gadgets Stores</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Food & Beverage Retailers</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Health & Beauty Shops</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 dark:text-blue-400">✓</span>
              <span>Subscription & Membership Services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ECommerceWebsite;
