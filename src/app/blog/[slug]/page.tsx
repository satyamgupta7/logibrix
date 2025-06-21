import { notFound } from 'next/navigation';
import Link from 'next/link';

const blogData = {
  "web-design-trends-2024": {
    title: "10 Essential Web Design Trends for 2024",
    category: "Design",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    author: "LogiBrix Team",
    image: "🎨",
    content: `
      <p>The digital landscape is constantly evolving, and 2024 brings exciting new web design trends that can transform your business's online presence. At LogiBrix, we've identified the top 10 trends that will dominate this year.</p>
      
      <h2>1. AI-Powered Personalization</h2>
      <p>Websites now adapt content based on user behavior, creating personalized experiences that increase engagement by up to 40%.</p>
      
      <h2>2. Minimalist Design with Bold Typography</h2>
      <p>Clean layouts combined with striking typography create memorable brand experiences while improving readability.</p>
      
      <h2>3. Interactive Micro-Animations</h2>
      <p>Subtle animations guide users through your site, improving user experience and conversion rates.</p>
      
      <h2>4. Dark Mode Integration</h2>
      <p>Essential for modern websites, dark mode reduces eye strain and appeals to tech-savvy users.</p>
      
      <h2>5. Voice User Interface (VUI)</h2>
      <p>Voice search optimization is crucial as 50% of adults use voice search daily.</p>
      
      <p>Ready to implement these trends? Contact LogiBrix for a modern website redesign that drives results.</p>
    `
  },
  "small-business-website-importance": {
    title: "Why Your Small Business Needs a Professional Website",
    category: "Business",
    readTime: "7 min read",
    date: "Dec 12, 2024",
    author: "LogiBrix Team",
    image: "🚀",
    content: `
      <p>In today's digital-first world, a professional website isn't just nice to have—it's essential for business survival and growth.</p>
      
      <h2>The Digital Transformation Reality</h2>
      <p>97% of consumers search online for local businesses. Without a professional website, you're invisible to potential customers.</p>
      
      <h2>Key Benefits of a Professional Website</h2>
      <h3>1. 24/7 Business Presence</h3>
      <p>Your website works around the clock, generating leads and sales even when you're sleeping.</p>
      
      <h3>2. Credibility and Trust</h3>
      <p>Professional websites build trust. 75% of users judge business credibility based on website design.</p>
      
      <h3>3. Cost-Effective Marketing</h3>
      <p>Digital marketing through your website costs 62% less than traditional marketing methods.</p>
      
      <h2>What Makes a Website Professional?</h2>
      <ul>
        <li>Mobile-responsive design</li>
        <li>Fast loading speeds (under 3 seconds)</li>
        <li>Clear navigation and user experience</li>
        <li>Professional content and imagery</li>
        <li>SEO optimization</li>
      </ul>
      
      <p>LogiBrix specializes in creating professional websites for small businesses. Let us help you establish a strong digital presence.</p>
    `
  },
  "local-seo-best-practices": {
    title: "SEO Best Practices for Local Businesses",
    category: "SEO",
    readTime: "6 min read",
    date: "Dec 10, 2024",
    author: "LogiBrix Team",
    image: "📈",
    content: `
      <p>Local SEO is crucial for businesses serving specific geographic areas. Here's how to dominate local search results.</p>
      
      <h2>Google My Business Optimization</h2>
      <p>Your Google My Business profile is the foundation of local SEO. Ensure it's complete with:</p>
      <ul>
        <li>Accurate business information</li>
        <li>High-quality photos</li>
        <li>Regular posts and updates</li>
        <li>Customer reviews management</li>
      </ul>
      
      <h2>Local Keyword Strategy</h2>
      <p>Target location-specific keywords like "web design services in [city]" to capture local search traffic.</p>
      
      <h2>NAP Consistency</h2>
      <p>Ensure your Name, Address, and Phone number are consistent across all online platforms.</p>
      
      <h2>Local Content Creation</h2>
      <p>Create content about local events, news, and community involvement to establish local relevance.</p>
      
      <h2>Online Reviews Strategy</h2>
      <p>Positive reviews improve rankings and build trust. Implement a systematic review collection process.</p>
      
      <p>LogiBrix implements comprehensive local SEO strategies that help businesses dominate their local markets.</p>
    `
  },
  "mobile-first-design-importance": {
    title: "Mobile-First Design: Why It Matters",
    category: "Development",
    readTime: "4 min read",
    date: "Dec 8, 2024",
    author: "LogiBrix Team",
    image: "📱",
    content: `
      <p>Mobile-first design isn't just a trend—it's a necessity. With over 60% of web traffic coming from mobile devices, your website must prioritize mobile experience.</p>
      
      <h2>What is Mobile-First Design?</h2>
      <p>Mobile-first design means designing for mobile devices first, then scaling up to larger screens. This approach ensures optimal performance across all devices.</p>
      
      <h2>Why Mobile-First Matters</h2>
      <h3>1. Google's Mobile-First Indexing</h3>
      <p>Google primarily uses mobile versions of websites for indexing and ranking, making mobile optimization crucial for SEO.</p>
      
      <h3>2. User Experience</h3>
      <p>Mobile users expect fast, intuitive experiences. Poor mobile design leads to high bounce rates and lost customers.</p>
      
      <h3>3. Performance Benefits</h3>
      <p>Mobile-first design forces developers to prioritize essential content and optimize performance from the ground up.</p>
      
      <p>LogiBrix ensures all websites are built with mobile-first principles for maximum reach and engagement.</p>
    `
  },
  "ecommerce-solutions-guide": {
    title: "E-commerce Solutions for Growing Businesses",
    category: "E-commerce",
    readTime: "8 min read",
    date: "Dec 5, 2024",
    author: "LogiBrix Team",
    image: "🛒",
    content: `
      <p>E-commerce is booming, with online sales expected to reach $6.2 trillion by 2024. LogiBrix helps businesses capitalize on this growth with comprehensive e-commerce solutions.</p>
      
      <h2>Choosing the Right E-commerce Platform</h2>
      <p>The platform you choose affects everything from user experience to scalability. We recommend platforms based on your specific needs:</p>
      <ul>
        <li>Shopify for quick setup and ease of use</li>
        <li>WooCommerce for WordPress integration</li>
        <li>Custom solutions for unique requirements</li>
      </ul>
      
      <h2>Essential E-commerce Features</h2>
      <h3>1. Secure Payment Processing</h3>
      <p>Multiple payment options and SSL security build customer trust and increase conversions.</p>
      
      <h3>2. Inventory Management</h3>
      <p>Automated inventory tracking prevents overselling and streamlines operations.</p>
      
      <h3>3. Mobile Optimization</h3>
      <p>With 79% of smartphone users making purchases online, mobile optimization is crucial.</p>
      
      <p>Ready to launch your online store? LogiBrix provides end-to-end e-commerce solutions that drive sales and growth.</p>
    `
  },
  "website-security-guide": {
    title: "Website Security: Protecting Your Business Online",
    category: "Security",
    readTime: "6 min read",
    date: "Dec 3, 2024",
    author: "LogiBrix Team",
    image: "🔒",
    content: `
      <p>Website security is critical for protecting your business and customer data. Cyber attacks cost businesses an average of $4.45 million per breach.</p>
      
      <h2>Common Security Threats</h2>
      <p>Understanding threats helps you prepare better defenses:</p>
      <ul>
        <li>Malware and viruses</li>
        <li>SQL injection attacks</li>
        <li>Cross-site scripting (XSS)</li>
        <li>DDoS attacks</li>
      </ul>
      
      <h2>Essential Security Measures</h2>
      <h3>1. SSL Certificates</h3>
      <p>SSL encryption protects data transmission and improves search rankings.</p>
      
      <h3>2. Regular Updates</h3>
      <p>Keep all software, plugins, and themes updated to patch security vulnerabilities.</p>
      
      <h3>3. Strong Authentication</h3>
      <p>Implement two-factor authentication and strong password policies.</p>
      
      <h3>4. Regular Backups</h3>
      <p>Automated backups ensure quick recovery from security incidents.</p>
      
      <p>LogiBrix implements comprehensive security measures to protect your website and business data from cyber threats.</p>
    `
  }
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogData[slug as keyof typeof blogData];
  
  if (!blog) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{blog.image}</div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-500/20 rounded-full">
                {blog.category}
              </span>
              <span className="text-gray-500 dark:text-gray-400">{blog.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-300">
              <span>By {blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl mb-6 opacity-90">
                Let LogiBrix help you implement these strategies for your business success.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <div className="border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/#blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}