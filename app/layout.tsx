
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UB Nutraceuticals | Absolute Quality",
  description: "Innovative, sustainable & customized solutions for your wellness journey.",
  icons: {
    icon: "/adaptive-icon.svg",
  },
  openGraph: {
    images: [
      {
        url: "/jason-briscoe-GrdJp16CPk8-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "UB Nutraceuticals Hero Image",
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
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased text-swisse-charcoal bg-white flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
