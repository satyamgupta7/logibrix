import AboutSection from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LogiBrix - Premium Web Development Agency | Our Story",
  description:
    "Learn about LogiBrix's journey in transforming businesses with cutting-edge web solutions. 100+ successful projects, 98% client satisfaction. Trusted digital partner since inception.",
  keywords: [
    "about LogiBrix",
    "web development company",
    "digital transformation",
    "web design agency",
    "our story",
    "company history",
    "web development team",
    "digital solutions provider",
    "website development services",
    "LogiBrix team",
    "web agency India",
    "trusted web partner"
  ],
  openGraph: {
    title: "About LogiBrix - Leading Web Development Agency",
    description:
      "Discover how LogiBrix transforms businesses with premium web solutions. 100+ projects delivered, expert team, cutting-edge technology.",
    url: "https://logibrix.in/about",
    siteName: "LogiBrix",
    images: [
      {
        url: "https://logibrix.in/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About LogiBrix - Web Development Team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About LogiBrix - Premium Web Development Agency",
    description: "Transforming businesses with cutting-edge web solutions. 100+ successful projects and growing.",
    images: ["https://logibrix.in/images/about-twitter.jpg"]
  },
  alternates: {
    canonical: "https://logibrix.in/about"
  }
};

const AboutPage = () => {
  return (
    <>
      <AboutSection />
    </>
  );
};

export default AboutPage;
