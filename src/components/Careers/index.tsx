"use client";
import { useEffect, useRef } from "react";

const Careers = () => {
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

  const jobOpenings = [
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      description:
        "Join our development team to build cutting-edge web applications and help shape the future of digital solutions.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "1-3 years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      description:
        "Create beautiful, user-centered designs that enhance user experience and drive business growth.",
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "2-3 years",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
      description:
        "Drive digital marketing campaigns and help our clients achieve their online marketing goals.",
    },
    {
      title: "Business Development Executive",
      department: "Sales",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "1-2 years",
      skills: ["Sales", "Client Relations", "Communication", "CRM"],
      description:
        "Build relationships with potential clients and help expand our business reach in the digital services market.",
    },
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      desc: "Market-leading compensation packages",
    },
    {
      icon: "🏠",
      title: "Remote Work",
      desc: "Flexible work-from-home options",
    },
    {
      icon: "📚",
      title: "Learning & Development",
      desc: "Continuous skill development programs",
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      desc: "Comprehensive medical coverage",
    },
    {
      icon: "🎯",
      title: "Growth Opportunities",
      desc: "Clear career progression paths",
    },
    {
      icon: "🎉",
      title: "Team Events",
      desc: "Regular team building activities",
    },
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      desc: "We embrace new technologies and creative solutions",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      desc: "We work together to achieve common goals",
    },
    {
      icon: "💡",
      title: "Excellence",
      desc: "We strive for quality in everything we do",
    },
    {
      icon: "🌱",
      title: "Growth",
      desc: "We invest in personal and professional development",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="careers"
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-18 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.03),transparent_50%)]"></div>

      <div className="relative z-10 container">
        {/* Header */}
        <div className="fade-element mb-20 translate-y-8 text-center opacity-0">
          <div className="mb-6 inline-flex items-center rounded-full border border-purple-200 bg-purple-100/80 px-4 py-2 text-sm font-medium text-purple-700 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-300">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-purple-500"></span>
            Join Our Team
          </div>
          <h1 className="mb-8 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            Build Your Career
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              With LogiBrix
            </span>
          </h1>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Join a dynamic team of innovators, creators, and problem-solvers.
            Help us shape the future of digital solutions while growing your
            career in a supportive environment.
          </p>
        </div>

        {/* Company Values */}
        <div className="fade-element mb-20 translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Our Values
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              We believe in creating an environment where everyone can thrive
              and contribute to meaningful work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:border-purple-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-500/30"
              >
                <div className="mb-4 transform text-4xl transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div className="fade-element mb-20 translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Current Openings
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Explore exciting opportunities to grow your career with us. We are
              always looking for talented individuals to join our team.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-blue-200 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500/30"
              >
                <div className="mb-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
                          {job.department}
                        </span>
                        <span className="rounded-full bg-green-100 px-3 py-1 text-green-700 dark:bg-green-900/20 dark:text-green-300">
                          {job.type}
                        </span>
                        <span className="rounded-full bg-purple-100 px-3 py-1 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                    {job.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                      Required Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      📍 {job.location}
                    </span>
                    <button className="transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="fade-element mb-20 translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Why Work With Us?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              We offer comprehensive benefits and a supportive work environment
              to help you succeed.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-green-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-500/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="transform text-3xl transition-transform duration-300 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="fade-element mb-20 translate-y-8 opacity-0">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Application Process
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Apply Online",
                desc: "Submit your application through our portal",
              },
              {
                step: "2",
                title: "Initial Review",
                desc: "Our team reviews your application and resume",
              },
              {
                step: "3",
                title: "Interview",
                desc: "Technical and cultural fit interviews",
              },
              {
                step: "4",
                title: "Welcome Aboard",
                desc: "Join our team and start your journey",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-xl font-bold text-white">
                  {process.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {process.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="fade-element translate-y-8 text-center opacity-0">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white md:p-12">
            <h3 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Join Our Team?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
              Do not see a perfect match? Send us your resume anyway. We are
              always looking for exceptional talent to join our growing team.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="transform rounded-xl bg-white px-8 py-4 font-bold text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Send Your Resume
              </button>
              <button className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10">
                Learn More About Us
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

export default Careers;
