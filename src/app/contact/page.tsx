import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Build Your Business Website with LogiBrix",
  description:
    "Affordable and modern websites for local shops, gyms, coaching centers, and small businesses by LogiBrix. Fast, SEO-friendly, and built to grow your online presence.",
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
