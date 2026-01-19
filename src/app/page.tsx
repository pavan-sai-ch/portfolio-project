import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About'; // Import the new component
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import FadeIn from '@/components/ui/FadeIn';
import { Analytics } from "@vercel/analytics/next"
export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <Hero />

            {/* Add the About section here with animation */}


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