import type { Metadata } from "next";
import { DM_Sans, Outfit, Poppins } from "next/font/google";
import "./globals.css";

import SiteShell from "./components/SiteShell";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], display: "swap" });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], display: "swap" });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["500"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Box Truck Dispatch Services for Owner Operators",
    template: "%s | Box Truck Dispatching",
  },

  description:
    "Box truck dispatch services for owner operators and fleets, including load booking, rate negotiation, paperwork support, and route planning.",

  keywords: [
    "box truck dispatch",
    "box truck dispatch service",
    "truck dispatching services",
    "box truck owner operator",
    "freight dispatch",
    "load booking",
    "rate negotiation",
    "truck dispatcher",
  ],

  applicationName: "Box Truck Dispatching",
  authors: [{ name: "Box Truck Dispatching" }],
  creator: "Box Truck Dispatching",
  publisher: "Box Truck Dispatching",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    siteName: "Box Truck Dispatching",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },

  category: "Transportation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#F8FAFC] font-[Arial,Helvetica,sans-serif] text-[#171717]">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}