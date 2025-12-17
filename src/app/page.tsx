import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import FadeIn from '@/components/ui/FadeIn';
import React from "react";
export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <Hero />

            <FadeIn>
                <Projects />
            </FadeIn>

            <FadeIn>
                <Experience />
            </FadeIn>

            <FadeIn>
                <Skills />
            </FadeIn>

            <Footer />
        </main>
    );
}