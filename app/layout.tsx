import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { mont } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "UB Nutraceuticals | Absolute Quality",
    template: "%s | UB Nutraceuticals",
  },
  description: "Innovative, sustainable & customized solutions for your wellness journey. The largest and pioneering nutraceutical manufacturer in Bangladesh.",
  keywords: ["Nutraceuticals", "Manufacturing", "Supplements", "Health", "Wellness", "GMP Certified", "FDA Registered", "White Label", "Private Label"],
  authors: [{ name: "UB Nutraceuticals", url: "https://ub-nutra.com" }],
  metadataBase: new URL("https://ub-nutra.com"),
  icons: {
    icon: "/UB Main Logo.svg",
    shortcut: "/UB Main Logo.svg",
    apple: "/UB Main Logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ub-nutra.com",
    title: "UB Nutraceuticals | Absolute Quality",
    description: "Innovative, sustainable & customized solutions for your wellness journey.",
    siteName: "UB Nutraceuticals",
    images: [
      {
        url: "/UB hero.jpg",
        width: 1920,
        height: 1080,
        alt: "UB Nutraceuticals Manufacturing Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UB Nutraceuticals | Absolute Quality",
    description: "Innovative, sustainable & customized solutions for your wellness journey.",
    images: ["/UB hero.jpg"],
    creator: "@ubnutra",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mont.variable}`}>
      <body className="font-sans antialiased text-text-primary bg-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
