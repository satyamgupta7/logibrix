"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const Blog = () => {
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

    const cards = sectionRef.current?.querySelectorAll('.blog-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const blogs = [
    {
      id: 1,
      title: "10 Essential Web Design Trends for 2024",
      excerpt: "Discover the latest web design trends that will make your business stand out online and drive more conversions.",
      category: "Design",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      image: "🎨",
      slug: "web-design-trends-2024"
    },
    {
      id: 2,
      title: "Why Your Small Business Needs a Professional Website",
      excerpt: "Learn how a professional website can transform your local business and attract more customers in the digital age.",
      category: "Business",
      readTime: "7 min read",
      date: "Dec 12, 2024",
      image: "🚀",
      slug: "small-business-website-importance"
    },
    {
      id: 3,
      title: "SEO Best Practices for Local Businesses",
      excerpt: "Master local SEO strategies to help your business rank higher in search results and attract nearby customers.",
      category: "SEO",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      image: "📈",
      slug: "local-seo-best-practices"
    },
    {
      id: 4,
      title: "Mobile-First Design: Why It Matters",
      excerpt: "Understand why mobile-first design is crucial for your website's success and user experience.",
      category: "Development",
      readTime: "4 min read",
      date: "Dec 8, 2024",
      image: "📱",
      slug: "mobile-first-design-importance"
    },
    {
      id: 5,
      title: "E-commerce Solutions for Growing Businesses",
      excerpt: "Explore how LogiBrix's e-commerce solutions can help scale your online business and increase sales.",
      category: "E-commerce",
      readTime: "8 min read",
      date: "Dec 5, 2024",
      image: "🛒",
      slug: "ecommerce-solutions-guide"
    },
    {
      id: 6,
      title: "Website Security: Protecting Your Business Online",
      excerpt: "Learn essential security measures to protect your website and customer data from cyber threats.",
      category: "Security",
      readTime: "6 min read",
      date: "Dec 3, 2024",
      image: "🔒",
      slug: "website-security-guide"
    }
  ];

  return (
    <section ref={sectionRef} id="blog" className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.03),transparent_50%)]"></div>
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-purple-700 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 rounded-full">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
            Latest Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Expert Insights &
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Industry Knowledge
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with LogiBrix's expert insights on web development, digital marketing, and business growth strategies. Learn from our experience building successful digital solutions.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className={`blog-card group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500/30 transform hover:-translate-y-2 opacity-0 translate-y-8`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image/Icon */}
              <div className="p-8 pb-0">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {blog.image}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-500/20 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{blog.readTime}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 pt-0">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</span>
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="relative z-20 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link 
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            View All Articles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Blog;
