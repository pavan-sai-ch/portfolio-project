import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Warm cream surfaces — page background + section banding
                cream: {
                    50: '#FDFBF7',
                    100: '#FAF6EF', // page base
                    200: '#F3ECE0', // section alt / cards
                    300: '#E8DCC8', // borders / dividers
                    400: '#DDCDB4',
                    500: '#C9B591',
                },
                // Warm near-black text scale
                ink: {
                    DEFAULT: '#1F1B16',
                    muted: '#6B6259',
                    soft: '#8C8378',
                },
                // Terracotta accent — CTAs, links, highlights
                terracotta: {
                    50: '#FBF0EA',
                    100: '#F6DFD2',
                    200: '#ECBFA5',
                    300: '#E0A080',
                    400: '#D17F55',
                    500: '#C2683D', // main accent
                    600: '#A9542D',
                    700: '#8A4425',
                    800: '#6E3620',
                    900: '#5A2D1D',
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
export default config;
