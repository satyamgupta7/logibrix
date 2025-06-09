import ECommerceWebsite from "@/components/ECommerceWebsite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LogiBrix | E-Commerce Website Development Services",
  description:
    "LogiBrix builds high-performance e-commerce websites with secure payment gateways, product management, and user-friendly shopping experiences. Scalable solutions for your online business.",
  keywords:
    "LogiBrix, E-Commerce Website Development, Online Store Development, Product Catalog, Shopping Cart, Payment Gateway, Mobile Commerce, Custom E-Commerce Solutions, Secure Online Shop",
};

const ECommerceWebsitePage = () => {
  return (
    <>
      <ECommerceWebsite />
    </>
  );
};

export default ECommerceWebsitePage;
