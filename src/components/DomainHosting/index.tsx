import React from "react";

const DomainHosting = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-20 text-gray-900 md:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-indigo-700">
          LogiBrix - Domain & Hosting Assistance
        </h1>

        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-indigo-50 p-6 shadow-lg">
            <h2 className="mb-2 text-2xl font-semibold text-indigo-800">
              Domain Name Registration
            </h2>
            <p className="text-gray-700">
              We help you choose the perfect domain name for your brand. From
              checking domain availability to completing the registration
              process, we make it hassle-free and secure.
            </p>
          </div>

          <div className="rounded-2xl bg-indigo-50 p-6 shadow-lg">
            <h2 className="mb-2 text-2xl font-semibold text-indigo-800">
              Hosting Setup & Management
            </h2>
            <p className="text-gray-700">
              Get reliable hosting services with our full assistance. We help
              you select the best hosting provider, set up your server, and
              manage configurations for optimal performance and uptime.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-indigo-200 bg-indigo-100 p-6 shadow-md">
          <h3 className="mb-4 text-xl font-semibold text-indigo-900">
            Our Services Include:
          </h3>
          <ul className="list-inside list-disc space-y-1 text-gray-800">
            <li>Domain Name Search & Registration</li>
            <li>DNS Configuration & Management</li>
            <li>Shared & Dedicated Hosting Options</li>
            <li>Email Hosting Setup</li>
            <li>SSL Certificate Installation</li>
            <li>Server Monitoring & Uptime Management</li>
            <li>Cloud Hosting (AWS, DigitalOcean, etc.)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DomainHosting;
