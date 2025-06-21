"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "CEO, TechStart Solutions",
    content: "LogiBrix transformed our startup's digital presence completely. Their team delivered a stunning website that increased our lead generation by 300%. The attention to detail and professional approach exceeded our expectations.",
    rating: 5,
    avatar: "👨‍💼",
    company: "TechStart Solutions",
    result: "300% increase in leads"
  },
  {
    id: 2,
    name: "Priya Sharma",
    designation: "Founder, EcoFresh Organics",
    content: "Working with LogiBrix was a game-changer for our organic food business. They created an e-commerce platform that's both beautiful and functional. Our online sales grew by 250% within 3 months of launch.",
    rating: 5,
    avatar: "👩‍🌾",
    company: "EcoFresh Organics",
    result: "250% sales growth"
  },
  {
    id: 3,
    name: "Amit Patel",
    designation: "Director, FitZone Gym Chain",
    content: "LogiBrix built us a comprehensive fitness platform with member management, class booking, and payment integration. The mobile app they developed has 4.8 stars on app stores. Exceptional work!",
    rating: 5,
    avatar: "🏋️‍♂️",
    company: "FitZone Gym Chain",
    result: "4.8★ app rating"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    designation: "Principal, Bright Minds Academy",
    content: "The educational portal LogiBrix created for our coaching center is phenomenal. Student enrollment increased by 180% after launching our online presence. Their support team is always responsive and helpful.",
    rating: 5,
    avatar: "👩‍🏫",
    company: "Bright Minds Academy",
    result: "180% enrollment boost"
  },
  {
    id: 5,
    name: "Vikram Singh",
    designation: "Owner, Singh Electronics",
    content: "LogiBrix digitized our electronics store with inventory management and online ordering. Customer satisfaction improved dramatically, and we now serve customers across 5 cities. Highly recommend their services!",
    rating: 5,
    avatar: "🔌",
    company: "Singh Electronics",
    result: "Expanded to 5 cities"
  },
  {
    id: 6,
    name: "Kavya Nair",
    designation: "Founder, Artisan Crafts Co.",
    content: "The e-commerce website LogiBrix built for our handicraft business is absolutely stunning. It perfectly showcases our products and has helped us reach international customers. Revenue increased by 400%!",
    rating: 5,
    avatar: "🎨",
    company: "Artisan Crafts Co.",
    result: "400% revenue growth"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]"></div>
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-green-700 dark:text-green-300 bg-green-100/80 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Trusted by
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join 500+ successful businesses who&apos;ve transformed their digital presence with LogiBrix. From startups to enterprises, we deliver results that matter.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card group relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500/30 transform hover:-translate-y-3 opacity-0 translate-y-8`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-4xl text-blue-500/20 dark:text-blue-400/20">
                &ldquo;
              </div>
              
              {/* Avatar & Company */}
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{testimonial.designation}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{testimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">5.0</span>
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Result Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-200 dark:border-green-500/20 rounded-full">
                <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                  📈 {testimonial.result}
                </span>
              </div>
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Happy Clients</div>
          </div>
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">98%</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Success Rate</div>
          </div>
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Support</div>
          </div>
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">5★</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Average Rating</div>
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

export default Testimonials;