import Link from 'next/link';

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

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-purple-700 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 rounded-full">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
              Latest Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Expert Insights &
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Industry Knowledge
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with LogiBrix&apos;s expert insights on web development, digital marketing, and business growth strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500/30 group">
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
                
                <div className="p-8 pt-0">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</span>
                    <Link 
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="container">
          <div className="text-center">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}