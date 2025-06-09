import React from "react";

const DynamicWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-20 text-gray-900 md:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-purple-700">
          LogiBrix - Dynamic Website Development
        </h1>

        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-2 text-2xl font-semibold text-purple-800">
              Fully Interactive & Database Driven
            </h2>
            <p className="text-gray-700">
              We specialize in building dynamic websites that interact with
              databases and offer real-time content updates. Whether it’s a
              blog, user dashboard, or admin panel, we deliver powerful and
              scalable web applications.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-2 text-2xl font-semibold text-purple-800">
              Modern Technology Stack
            </h2>
            <p className="text-gray-700">
              Built using modern frameworks and APIs, our dynamic websites
              ensure smooth data flow, real-time interactions, and seamless
              integration with third-party services and databases.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6 shadow-md">
          <h3 className="mb-4 text-xl font-semibold text-purple-900">
            Perfect For:
          </h3>
          <ul className="list-inside list-disc space-y-1 text-gray-800">
            <li>Admin Dashboards</li>
            <li>Job Portals</li>
            <li>Learning Management Systems</li>
            <li>Booking & Appointment Systems</li>
            <li>Real-Time Analytics</li>
            <li>Interactive Forms & User Profiles</li>
            <li>Custom Business Applications</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DynamicWebsite;
