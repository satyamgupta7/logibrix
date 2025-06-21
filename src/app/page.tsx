import AboutSectionOne from "@/components/About";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LogiBrix Solution Pvt Ltd - Affordable Websites for Local Businesses",
  description:
    "Logibrix.in helps shops, gyms, coaching centers, schools, restaurants, PGs, and startups go online with modern, mobile-friendly websites. Built with Next.js and Tailwind CSS.",
  keywords: [
    "Logibrix",
    "Logibrix.in",
    "web development",
    "React developer",
    "Next.js websites",
    "Tailwind CSS",
    "affordable websites",
    "local business websites",
    "gym website",
    "coaching website",
    "restaurant website",
    "PG website",
    "school website",
    "startup website",
    "e-commerce development",
  ],
  authors: [{ name: "Logibrix", url: "https://logibrix.in" }],
  creator: "Logibrix.in",
  openGraph: {
    title: "Logibrix.in - Modern Website Solutions",
    description:
      "We build stunning, fast, and SEO-ready websites for shops, gyms, restaurants, coaching centers, schools, and startups.",
    url: "https://logibrix.in",
    siteName: "Logibrix.in",
    images: [
      {
        url: "https://logibrix.in/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Logibrix Website Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      {/* <Pricing /> */}
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
}
