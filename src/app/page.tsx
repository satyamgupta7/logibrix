import AboutSectionOne from "@/components/About";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LogiBrix - Premium Web Development & Digital Solutions | Starting ₹15,000",
  description:
    "Transform your business with LogiBrix's premium web development services. Static websites from ₹15K, E-commerce from ₹35K, Custom apps from ₹75K. 100+ projects delivered, 98% client satisfaction. Free consultation available!",
  keywords: [
    "LogiBrix",
    "web development India",
    "website design company",
    "affordable website development",
    "e-commerce development",
    "static website design",
    "dynamic website development",
    "custom web applications",
    "responsive web design",
    "SEO friendly websites",
    "business website development",
    "startup website design",
    "professional web development",
    "website development services",
    "digital transformation",
    "web development agency",
    "mobile responsive websites",
    "React development",
    "Next.js development",
    "modern web solutions",
    "website development cost",
    "cheap website development",
    "best web development company",
    "web design and development",
    "online business solutions"
  ],
  authors: [{ name: "LogiBrix Team", url: "https://logibrix.in" }],
  creator: "LogiBrix",
  publisher: "LogiBrix Solution Pvt Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Web Development",
  classification: "Business Services",
  openGraph: {
    title: "LogiBrix - Premium Web Development & Digital Solutions",
    description:
      "Transform your business online with LogiBrix. Premium websites starting ₹15K. 100+ projects delivered, expert team, cutting-edge technology. Get free consultation today!",
    url: "https://logibrix.in",
    siteName: "LogiBrix",
    images: [
      {
        url: "https://logibrix.in/images/logibrix-og-home.jpg",
        width: 1200,
        height: 630,
        alt: "LogiBrix - Premium Web Development Services",
      },
      {
        url: "https://logibrix.in/images/logibrix-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "LogiBrix Portfolio - Web Development Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "LogiBrix - Premium Web Development Starting ₹15,000",
    description: "Transform your business online with LogiBrix. Expert web development, 100+ projects delivered, 98% client satisfaction. Free consultation!",
    images: ["https://logibrix.in/images/logibrix-twitter-home.jpg"],
    creator: "@LogiBrix",
    site: "@LogiBrix",
  },
  alternates: {
    canonical: "https://logibrix.in",
    languages: {
      'en-IN': 'https://logibrix.in',
      'hi-IN': 'https://logibrix.in/hi',
    },
  },
  other: {
    'business:contact_data:street_address': 'India',
    'business:contact_data:locality': 'India',
    'business:contact_data:region': 'India',
    'business:contact_data:postal_code': '000000',
    'business:contact_data:country_name': 'India',
    'business:contact_data:email': 'hello@logibrix.in',
    'business:contact_data:phone_number': '+91-8358952017',
    'business:contact_data:website': 'https://logibrix.in',
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <Pricing />
      <Blog />
      <Testimonials />
      <Contact />
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LogiBrix",
            "alternateName": "LogiBrix Solution Pvt Ltd",
            "url": "https://logibrix.in",
            "logo": "https://logibrix.in/images/logibrix-logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8358952017",
              "contactType": "customer service",
              "email": "hello@logibrix.in",
              "availableLanguage": ["English", "Hindi"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN",
              "addressRegion": "India"
            },
            "sameAs": [
              "https://www.instagram.com/logibrix.in/",
              "https://www.linkedin.com/company/logibrix",
              "https://twitter.com/logibrix",
              "https://www.facebook.com/logibrix"
            ],
            "founder": {
              "@type": "Person",
              "name": "LogiBrix Team"
            },
            "foundingDate": "2023",
            "numberOfEmployees": "10-50",
            "slogan": "Transform Your Digital Presence",
            "description": "LogiBrix is a premium web development agency specializing in modern, responsive websites and digital solutions for businesses of all sizes.",
            "serviceArea": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Static Website Development",
                    "description": "Professional static websites for small businesses"
                  },
                  "price": "15000",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Website Development",
                    "description": "Full-featured online stores with payment integration"
                  },
                  "price": "35000",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Web Application",
                    "description": "Enterprise-grade custom web applications"
                  },
                  "price": "75000",
                  "priceCurrency": "INR"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "100",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "LogiBrix",
            "url": "https://logibrix.in",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://logibrix.in/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://logibrix.in",
            "name": "LogiBrix",
            "image": "https://logibrix.in/images/logibrix-logo.png",
            "telephone": "+91-8358952017",
            "email": "hello@logibrix.in",
            "url": "https://logibrix.in",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "20.5937",
              "longitude": "78.9629"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "priceRange": "₹15,000 - ₹75,000+",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer, UPI",
            "currenciesAccepted": "INR"
          })
        }}
      />
    </>
  );
}
