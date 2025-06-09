import DomainHosting from "@/components/DomainHosting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LogiBrix | Domain & Hosting Assistance Services",
  description:
    "Get expert domain registration and hosting setup assistance with LogiBrix. We help you choose, configure, and manage domains and web hosting for your business needs.",
  keywords:
    "LogiBrix, Domain Registration, Hosting Assistance, DNS Setup, SSL Installation, Server Management, Web Hosting Support, Cloud Hosting, Domain and Hosting Services",
};

const DomainHostingPage = () => {
  return (
    <>
      <DomainHosting />
    </>
  );
};

export default DomainHostingPage;
