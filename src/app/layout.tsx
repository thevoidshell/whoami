import type { Metadata } from "next";
import {
    Geist,
    Geist_Mono,
    Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";

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
    other: {
        "x-curiosity": `
            Hi.
            
            You inspected the source.
            
            Good.
            
            Curiosity is a useful habit.
            
            - R
        `,
    },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
        >
            <body className="min-h-screen bg-background text-foreground transition-colors duration-300">
                {children}
            </body>
        </html>
    );
}