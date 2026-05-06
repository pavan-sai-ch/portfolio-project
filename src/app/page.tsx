import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Terminal from '@/components/sections/Terminal';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import About from '@/components/sections/About';
import FadeIn from '@/components/ui/FadeIn';
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-900">
            <Navbar />
            <Hero />
            <Terminal />

            <FadeIn>
                <Projects />
            </FadeIn>
            <FadeIn>
                <Skills />
            </FadeIn>
            <FadeIn>
                <Experience />
            </FadeIn>
            <FadeIn>
                <About />
            </FadeIn>

            <Footer />
            <Analytics />
        </main>
    );
}