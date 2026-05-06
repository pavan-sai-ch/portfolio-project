import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Pavan Sai Chilukala | Software Engineer',
    description: 'Full Stack & Mobile Developer Portfolio - Interactive CLI Terminal Interface',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${inter.className} bg-gray-900 text-gray-100`} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}