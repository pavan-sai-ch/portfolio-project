import Navbar from '@/components/layout/Navbar';
import SectionRail from '@/components/layout/SectionRail';
import SmoothScroll from '@/components/layout/SmoothScroll';
import GeoTracker from '@/components/layout/GeoTracker';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Terminal from '@/components/sections/Terminal';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import About from '@/components/sections/About';
import Reveal from '@/components/motion/Reveal';
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
    return (
        <main id="main-content" tabIndex={-1} className="min-h-screen bg-cream-100">
            <Navbar />
            <SmoothScroll />
            <SectionRail />
            <Hero />
            <Terminal />
            <Reveal>
                <Experience />
            </Reveal>
            <Reveal>
                <Skills />
            </Reveal>
            <Reveal>
                <Projects />
            </Reveal>
            <Reveal>
                <About />
            </Reveal>

            <Footer />
            <Analytics />
            <GeoTracker />
        </main>
    );
}
