import StaticWebsite from "@/components/StaticWebsite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LogiBrix | Static Website Development Services",
  description:
    "LogiBrix offers professional static website development services for local shops, gyms, schools, colleges, portfolios, and more. Build fast, secure, and SEO-friendly websites tailored to your business needs.",
  keywords:
    "LogiBrix, Static Website Development, Local Shop Website, Gym Website, School Website, College Website, Portfolio Website, Business Website, Personal Website, Custom Static Websites, Affordable Web Development",
};

const StaticWebsitePage = () => {
  return (
    <>
      <StaticWebsite />
    </>
  );
};

export default StaticWebsitePage;
