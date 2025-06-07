import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Static Website Development",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Dynamic Website Development",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "E-Commerce Website Development",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Landing Page Design",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 45,
        title: "Website Redesign & Revamp",
        path: "/signin",
        newTab: false,
      },
      {
        id: 46,
        title: "Portfolio or Personal Branding Websites",
        path: "/signup",
        newTab: false,
      },
      {
        id: 47,
        title: "Business Websites for Local Shops / Gyms / Schools",
        path: "/error",
        newTab: false,
      },
      {
        id: 48,
        title: "Domain & Hosting Assistance",
        path: "/error",
        newTab: false,
      },
      {
        id: 49,
        title: "SEO Optimization",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
