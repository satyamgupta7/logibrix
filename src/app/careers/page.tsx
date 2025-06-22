import Careers from "@/components/Careers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at LogiBrix - Join Our Web Development Team | Remote Jobs",
  description:
    "Join LogiBrix team! We're hiring Full Stack Developers, UI/UX Designers, Digital Marketing Specialists. Remote work, competitive salary, growth opportunities. Apply now!",
  keywords: [
    "LogiBrix careers",
    "web development jobs",
    "remote developer jobs",
    "UI UX designer jobs",
    "digital marketing jobs",
    "full stack developer",
    "React developer jobs",
    "Node.js jobs",
    "work from home",
    "tech jobs India",
    "startup careers",
    "web agency jobs"
  ],
  openGraph: {
    title: "Careers at LogiBrix - Join Our Growing Team",
    description: "Build your career with LogiBrix. We offer remote work, competitive salaries, and growth opportunities in web development, design, and digital marketing.",
    type: "website",
    url: "https://logibrix.in/careers",
    siteName: "LogiBrix Careers",
    images: [
      {
        url: "https://logibrix.in/images/careers-og.jpg",
        width: 1200,
        height: 630,
        alt: "Join LogiBrix Team - Careers Page"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at LogiBrix - Remote Web Development Jobs",
    description: "Join our team of developers, designers, and marketers. Remote work opportunities with competitive benefits.",
    images: ["https://logibrix.in/images/careers-twitter.jpg"]
  },
  alternates: {
    canonical: "https://logibrix.in/careers"
  }
};

const CareersPage = () => {
  return (
    <>
      <Careers />
    </>
  );
};

export default CareersPage;
