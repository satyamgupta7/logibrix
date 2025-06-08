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
        path: "/static-website",
        newTab: false,
      },
      {
        id: 42,
        title: "Dynamic Website Development",
        path: "/dynamic-website",
        newTab: false,
      },
      {
        id: 43,
        title: "E-Commerce Website Development",
        path: "/e-commerce-website",
        newTab: false,
      },
      {
        id: 44,
        title: "Domain & Hosting Assistance",
        path: "/domain-hosting-assistance",
        newTab: false,
      },
    ],
  },
];
export default menuData;
