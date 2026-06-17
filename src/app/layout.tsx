import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-8 py-6 text-sm text-gray-400">
            Rachel Gupta • Cybersecurity Student • Built with Next.js
          </div>
        </footer>
      </body>
    </html>
  );
}