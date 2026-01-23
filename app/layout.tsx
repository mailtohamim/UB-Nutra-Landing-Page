import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { mont } from "./fonts";

export const metadata: Metadata = {
  title: "UB Nutraceuticals | Absolute Quality",
  description: "Innovative, sustainable & customized solutions for your wellness journey.",
  icons: {
    icon: "/UB Main Logo.svg",
  },
  openGraph: {
    images: [
      {
        url: "/UB Main Logo.svg",
        width: 1200,
        height: 630,
        alt: "UB Nutraceuticals Logo",
      },
    ],
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
