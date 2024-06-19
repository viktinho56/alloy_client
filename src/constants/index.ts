import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram, FaTiktok } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
export const DefaultLoginTime = 60000 * 60 * 24; // login for a day
export const ExtendedLoginTime = 60000 * 60 * 24 * 30; // login for 30 days
const env: string = "live";
export const TokenKey = "token";
const localServer = "http://localhost:4000/";
const liveServer = "https://server-alloy.azurewebsites.net/";
export const ServerUrl = env == "local" ? localServer : liveServer;
export const apiBaseUrl =
  env == "local" ? `${localServer}api` : `${liveServer}api`;
export const accentColor = "#FFB200";
export const primaryColor = "#217AC0";
export const primaryColorLight = "#1BC4F4";
export const primaryColorDark = "#0A1624";
export const darkColor = "#000000";
export const lightColor = "#F9FCF5";
export const whiteColor = "#FFFFFF";
export const midColor = "#EDF5F0";
export const greenColor = "#40C138";
export const yellowColor = "#FFB200";
export const redColor = "#AA1D05";
export const hoverColor = "#FFEEC1";
export const linkColor = "#4F5564";
export const greyColor = "#F5F8FA";
export const AppName = "Premier Food Ordering Portal";

export const FoodMenu = [
  { id: 1, name: "Breakfast" },
  { id: 2, name: "Lunch" },
  { id: 3, name: "Dinner" },
  { id: 4, name: "Snacks" },
];

export const AccountLinks = [
  { name: "View/edit personal information", url: "/admin/profile" },
  { name: "Manage Documents", url: "/admin/manage-documents" },
  { name: "Change Password", url: "/admin/change-password" },
  { name: "Property Information", url: "/admin/property-information" },
  { name: "Payment", url: "/admin/payments" },
  { name: "Transactions", url: "/admin/transactions" },
  { name: "Reports", url: "/admin/reports" },
];
export const ServiceLinks = [
  { name: "Request Maintenance", url: "/admin/maintenance" },
  { name: "Submit General Enquiry", url: "/contact-us" },
  { name: "Service Status Update", url: "/admin/service-status" },
  { name: "Log Complaints", url: "/admin/complaints" },
];
export const NavLinks = [
  { name: "Home", url: "/", isMenu: false, Submenu: [] },
  {
    name: "About Us",
    url: "/about-us",
    isMenu: false,
    Submenu: [],
  },
  // {
  //   name: "Services",
  //   url: "/#",
  //   isMenu: true,
  //   Submenu: [
  //     { name: "Book Viewing", url: "/services/consulting" },
  //     { name: "Maintenance", url: "/services/training-mentoring" },
  //     { name: "Report a Problem", url: "/services/managed-services" },
  //     { name: "Make Payments", url: "/services/managed-services" },
  //   ],
  // },
  // {
  //   name: "Services",
  //   url: "/services",
  //   isMenu: false,
  //   Submenu: [],
  // },
  {
    name: "Book Viewing",
    url: "/book-viewing",
    isMenu: false,
    Submenu: [],
  },
  {
    name: "FAQs",
    url: "/faqs",
    isMenu: false,
    Submenu: [],
  },
  {
    name: "Contact Us",
    url: "/contact-us",
    isMenu: false,
    Submenu: [],
  },
];
export const FooterLinks = [
  { name: "Home", url: "/", isMenu: false, Submenu: [] },
  {
    name: "About Us",
    url: "/about-us",
    isMenu: false,
    Submenu: [],
  },
  {
    name: "Our Services",
    url: "/#",
    isMenu: true,
    Submenu: [],
  },
];

export const SocialLinks = [
  { name: "facebook", background: "#3B5998", icon: BiLogoFacebook, url: "/" },
  { name: "twitter", background: "#1DA1F2", icon: FaTwitter, url: "/" },
  { name: "instagram", background: "#7638FA", icon: FaInstagram, url: "/" },
  { name: "linkedIn", background: "#0077B5", icon: FaLinkedinIn, url: "/" },
  { name: "Youtube", background: "#0077B5", icon: FaYoutube, url: "/" },
  { name: "Tiktok", background: "#0077B5", icon: FaTiktok, url: "/" },
];

export const ContactLinks = [
  {
    name: "Test Address",
    background: redColor,
    icon: FaLocationDot,
  },
  // {
  //   name: "contact@maplementalhealth.ca",
  //   background: redColor,
  //   icon: MdEmail,
  // },
  {
    name: "HELLO@HASSCONSULTPROPMANA.COM",
    background: redColor,
    icon: MdEmail,
  },
  {
    name: "+254 780 456 000",
    background: redColor,
    icon: FaPhone,
  },
];

export const Properties = [
  {
    name: "Coco",
    background: redColor,
    icon: FaLocationDot,
  },
  {
    name: "Antara",
    background: redColor,
    icon: MdEmail,
  },
];
export const Fees = [
  { name: "All" },
  { name: "Service Charge" },
  { name: "Rent Charge" },
  { name: "Maintenance Charge" },
];

export const Maintenance = [
  {
    name: "Plumbing",
    background: redColor,
    icon: FaLocationDot,
  },
  {
    name: "Electrical",
    background: redColor,
    icon: MdEmail,
  },
  {
    name: "Fittings",
    background: redColor,
    icon: MdEmail,
  },
  {
    name: "Carpentry",
    background: redColor,
    icon: MdEmail,
  },
  {
    name: "Others",
    background: redColor,
    icon: MdEmail,
  },
];
