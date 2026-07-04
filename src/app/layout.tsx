import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Pavan Sai Chilukala | Software Engineer',
    description: 'Full Stack & Mobile Developer Portfolio',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} bg-cream-100 text-ink`} suppressHydrationWarning>
                <a href="#main-content" className="skip-link">Skip to main content</a>
                {children}
            </body>
        </html>
    );
}