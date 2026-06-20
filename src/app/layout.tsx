import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ContactRail from "@/components/ContactRail";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNavigation from "@/components/MobileNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Rachel Gupta",
  description:
    "Computer Information Systems student exploring cybersecurity through infrastructure labs, malware analysis, AI, and security research.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${cormorant.variable}
        antialiased
      `}
    >
      <body className="min-h-screen flex flex-col">

        <Navigation />
        <MobileNavigation />
        <ContactRail />
        <ThemeToggle />

        {children}

        <Footer />

      </body>
    </html>
  );
}