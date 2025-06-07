import AboutSectionOne from "@/components/About/AboutSectionOne";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | LogiBrix Solution Pvt Ltd",
  description:
    "Learn more about LogiBrix, your trusted partner in modern logistics and supply chain optimization.",
  openGraph: {
    title: "About Us | LogiBrix",
    description:
      "Discover how LogiBrix is revolutionizing logistics through smart technology and innovation.",
    url: "https://www.logibrix.com/about",
    siteName: "LogiBrix",
    images: [
      {
        url: "https://www.logibrix.com/images/og-image.jpg", // update with your actual image
        width: 1200,
        height: 630,
        alt: "LogiBrix About Us",
      },
    ],
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
