import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rachel Gupta",
  description:
    "Cybersecurity student building infrastructure, security, and AI projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Navbar />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

<footer className="border-t border-gray-800 mt-16">
    <div className="max-w-4xl mx-auto px-8 py-6 text-sm text-gray-400">
        Rachel Gupta • Cybersecurity Student • Built with Next.js
    </div>
</footer>