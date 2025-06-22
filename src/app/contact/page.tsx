import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact LogiBrix - Get Your Website Quote | Free Consultation",
  description:
    "Contact LogiBrix for premium web development services. Get free consultation, custom quotes for websites, e-commerce, and digital solutions. Call +91 8358952017 or email hello@logibrix.in",
  keywords: [
    "contact LogiBrix",
    "website quote",
    "free consultation",
    "web development contact",
    "get website quote",
    "LogiBrix contact details",
    "website development inquiry",
    "digital solutions contact",
    "web design consultation",
    "project discussion",
    "website cost estimate",
    "LogiBrix phone number"
  ],
  openGraph: {
    title: "Contact LogiBrix - Get Your Website Quote Today",
    description:
      "Ready to transform your business online? Contact LogiBrix for premium web development services. Free consultation and custom quotes available.",
    url: "https://logibrix.in/contact",
    siteName: "LogiBrix",
    images: [
      {
        url: "https://logibrix.in/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact LogiBrix - Web Development Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact LogiBrix - Free Web Development Consultation",
    description: "Get your custom website quote today. Free consultation available. Transform your business online with LogiBrix.",
    images: ["https://logibrix.in/images/contact-twitter.jpg"]
  },
  alternates: {
    canonical: "https://logibrix.in/contact"
  }
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
