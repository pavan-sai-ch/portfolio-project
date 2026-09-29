import type { Metadata, Viewport } from 'next';
import { Geist, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import React from "react";

const sans = Geist({ subsets: ['latin'], variable: '--font-sans' });
const serif = Source_Serif_4({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-serif' });

export const metadata: Metadata = {
    title: 'Pavan Sai Chilukala | CTO, Link Medical AI',
    description: 'Pavan Sai Chilukala, CTO at Link Medical AI. Building healthtech that clinicians trust.',
};

// viewport-fit=cover exposes the safe-area insets the landing pads against;
// themeColor tints the mobile browser toolbar to the page background.
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    themeColor: '#EAF0F1',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
            <body suppressHydrationWarning>
                <a href="#main-content" className="skip-link">Skip to main content</a>
                {children}
            </body>
        </html>
    );
}
