import StaticWebsite from "@/components/StaticWebsite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Static Website Development - LogiBrix | Starting ₹15,000",
  description:
    "Professional static website development by LogiBrix. Mobile-responsive, SEO-optimized websites starting ₹15,000. Perfect for small businesses, portfolios, landing pages. Free hosting & SSL included!",
  keywords: [
    "static website development",
    "affordable website design",
    "business website development",
    "responsive web design",
    "SEO friendly websites",
    "landing page design",
    "portfolio website",
    "small business website",
    "HTML CSS website",
    "fast loading website",
    "mobile responsive design",
    "professional website design",
    "static site development",
    "website development India",
    "cheap website development",
    "LogiBrix static websites",
    "startup website design",
    "modern web design",
    "custom website design",
    "website development services"
  ],
  openGraph: {
    title: "Static Website Development - LogiBrix | Professional Websites from ₹15,000",
    description: "Get a professional static website for your business. Mobile-responsive, SEO-optimized, fast-loading. Perfect for small businesses and startups.",
    url: "https://logibrix.in/services/static-website",
    siteName: "LogiBrix",
    images: [
      {
        url: "https://logibrix.in/images/static-website-og.jpg",
        width: 1200,
        height: 630,
        alt: "LogiBrix Static Website Development Services"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Static Website Development - Professional Websites from ₹15,000",
    description: "Mobile-responsive, SEO-optimized static websites for small businesses. Fast, secure, and affordable web development by LogiBrix.",
    images: ["https://logibrix.in/images/static-website-twitter.jpg"]
  },
  alternates: {
    canonical: "https://logibrix.in/services/static-website"
  }
};

const StaticWebsitePage = () => {
  return (
    <>
      <StaticWebsite />
    </>
  );
};

export default StaticWebsitePage;
