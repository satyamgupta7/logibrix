import ECommerceWebsite from "@/components/ECommerceWebsite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Website Development - LogiBrix | Starting ₹35,000",
  description:
    "Professional e-commerce website development by LogiBrix. Complete online stores from ₹35,000 with payment gateway, inventory management, mobile-responsive design. 250% average sales increase!",
  keywords: [
    "ecommerce website development",
    "online store development",
    "shopping website design",
    "e-commerce development India",
    "online shop development",
    "payment gateway integration",
    "shopping cart development",
    "WooCommerce development",
    "Shopify development",
    "custom ecommerce solution",
    "mobile commerce development",
    "responsive ecommerce design",
    "secure online store",
    "inventory management system",
    "multi-vendor marketplace",
    "B2B ecommerce development",
    "fashion ecommerce website",
    "electronics store development",
    "food delivery app development",
    "LogiBrix ecommerce services"
  ],
  openGraph: {
    title: "E-commerce Website Development - LogiBrix | Complete Online Stores from ₹35,000",
    description: "Launch your online store with LogiBrix. Professional e-commerce development with payment integration, inventory management, and mobile optimization.",
    url: "https://logibrix.in/services/e-commerce-website",
    siteName: "LogiBrix",
    images: [
      {
        url: "https://logibrix.in/images/ecommerce-website-og.jpg",
        width: 1200,
        height: 630,
        alt: "LogiBrix E-commerce Website Development Services"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Website Development - Complete Online Stores from ₹35,000",
    description: "Professional e-commerce development by LogiBrix. Payment gateway, inventory management, mobile-responsive design. 250% average sales increase!",
    images: ["https://logibrix.in/images/ecommerce-website-twitter.jpg"]
  },
  alternates: {
    canonical: "https://logibrix.in/services/e-commerce-website"
  }
};

const ECommerceWebsitePage = () => {
  return (
    <>
      <ECommerceWebsite />
    </>
  );
};

export default ECommerceWebsitePage;
