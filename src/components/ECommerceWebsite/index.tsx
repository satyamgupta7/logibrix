import React from "react";

const ECommerceWebsite = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-20 text-gray-900 md:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-green-700">
          LogiBrix - E-Commerce Website Development
        </h1>

        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-gray-50 p-6 shadow-lg">
            <h2 className="mb-2 text-2xl font-semibold">
              Custom E-Commerce Solutions
            </h2>
            <p className="text-gray-700">
              We build scalable and user-friendly e-commerce websites tailored
              for your business. Our solutions support inventory management,
              secure payment gateways, product listings, customer accounts, and
              more.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6 shadow-lg">
            <h2 className="mb-2 text-2xl font-semibold">
              Mobile-Responsive & SEO Friendly
            </h2>
            <p className="text-gray-700">
              Every e-commerce website we build is optimized for mobile devices,
              fast performance, and search engines—ensuring maximum visibility
              and conversion.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-green-200 bg-green-50 p-6 shadow-md">
          <h3 className="mb-4 text-xl font-semibold text-green-800">
            Features Included:
          </h3>
          <ul className="list-inside list-disc space-y-1 text-gray-800">
            <li>Product Catalog with Categories</li>
            <li>Shopping Cart & Checkout</li>
            <li>Payment Gateway Integration</li>
            <li>Admin Dashboard & Analytics</li>
            <li>Customer Login & Order History</li>
            <li>Responsive UI for all Devices</li>
            <li>SEO-Optimized Product Pages</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ECommerceWebsite;
