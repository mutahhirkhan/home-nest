import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";

export default function IndexPage() {
  return <Counter />;
}

export const metadata: Metadata = {
  title: "Home Nest",
  description:
    "Home Nest: The ultimate family organizer for managing household items, tracking inventories, and sharing recipes and resources. Build unique, password-protected portals for each family to store and access personalized collections.",
  authors: [
    {
      name: "Mutahhir Khan",
      url: "https://mutahhirkhan.github.io/portfolio/",
    },
  ],
  keywords: [
    "home",
    "HomeNest",
    "home-nest",
    "Home Nest",
    "home-utility-app",
    "household",
    "best home utility app",
    "Family organization app",
    "Household inventory manager",
    "Custom family portal",
    "Recipe sharing app",
    "Home item tracking",
    "Family inventory app",
    "Centralized home hub",
    "Shared household resources",
  ],
  openGraph: {
    title: "Home Nest - Family Organizer and Inventory Tracker",
    description: "Organize household items, track inventories, and share recipes with family. Customizable and family-friendly!",
    url: "https://your-website.com", // Replace with your website URL
    type: "website",
    images: [
      {
        url: "https://your-website.com/og-image.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Home Nest - Family Organizer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mutahhirEth", // Replace with your Twitter handle
    title: "Home Nest - Family Organizer and Inventory Tracker",
    description:
      "Manage household items, track inventories, and share recipes with family. Customizable, secure, and family-friendly organization!",
    images: ["https://your-website.com/twitter-image.jpg"], // Replace with your image URL
  },
};
