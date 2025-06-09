import DynamicWebsite from "@/components/DynamicWebsite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LogiBrix | Dynamic Website Development Services",
  description:
    "LogiBrix develops powerful and interactive dynamic websites using modern frameworks and database integrations. Ideal for portals, dashboards, booking systems, and more.",
  keywords:
    "LogiBrix, Dynamic Website Development, Database Driven Websites, Admin Dashboard, Booking System, Job Portal, CMS Websites, Real-Time Websites, Custom Web Applications",
};

const DynamicWebsitePage = () => {
  return (
    <>
      <DynamicWebsite />
    </>
  );
};

export default DynamicWebsitePage;
