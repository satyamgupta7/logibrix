import DynamicWebsite from "@/components/DynamicWebsite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dynamic Website Development - LogiBrix | Starting ₹75,000",
  description:
    "Advanced dynamic website development by LogiBrix. Custom web applications from ₹75,000 with database integration, user authentication, real-time features. Perfect for SaaS, portals, and complex business solutions.",
  keywords: [
    "dynamic website development",
    "custom web application development",
    "interactive website design",
    "database driven websites",
    "web application development",
    "SaaS development",
    "web portal development",
    "real-time web applications",
    "user authentication system",
    "CMS development",
    "enterprise web development",
    "complex website development",
    "React development services",
    "Node.js development",
    "full stack development",
    "API development services",
    "cloud web applications",
    "scalable web solutions",
    "business web applications",
    "LogiBrix dynamic websites"
  ],
  openGraph: {
    title: "Dynamic Website Development - LogiBrix | Custom Web Applications from ₹75,000",
    description: "Build powerful dynamic websites and web applications with LogiBrix. Database integration, real-time features, user authentication, and scalable architecture.",
    url: "https://logibrix.in/services/dynamic-website",
    siteName: "LogiBrix",
    images: [
      {
        url: "https://logibrix.in/images/dynamic-website-og.jpg",
        width: 1200,
        height: 630,
        alt: "LogiBrix Dynamic Website Development Services"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Website Development - Custom Web Applications from ₹75,000",
    description: "Advanced dynamic website development by LogiBrix. SaaS platforms, web portals, real-time applications with enterprise-grade features.",
    images: ["https://logibrix.in/images/dynamic-website-twitter.jpg"]
  },
  alternates: {
    canonical: "https://logibrix.in/services/dynamic-website"
  }
};

const DynamicWebsitePage = () => {
  return (
    <>
      <DynamicWebsite />
    </>
  );
};

export default DynamicWebsitePage;
