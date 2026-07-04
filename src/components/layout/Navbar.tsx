"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, Calendar } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import CalendlyButton from '@/components/ui/CalendlyButton';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
                scrolled
                    ? 'bg-cream-100/90 backdrop-blur-md border-cream-300 shadow-sm'
                    : 'bg-cream-100/60 backdrop-blur-sm border-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
                    {/* Left: Name */}
                    <div className="flex flex-col">
                        <Link
                            href="#home"
                            className="font-bold text-2xl text-ink hover:text-terracotta-500 transition-colors tracking-tight"
                        >
                            {personalInfo.name}
                        </Link>
                    </div>

                    {/* Right: Contact Links */}
                    <div className="flex gap-4 items-center">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink-muted hover:text-terracotta-500 transition-colors"
                            aria-label="Email"
                            title={personalInfo.email}
                        >
                            <Mail size={20} />
                        </a>
                        <a
                            href={personalInfo.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink-muted hover:text-terracotta-500 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={personalInfo.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink-muted hover:text-terracotta-500 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={personalInfo.links.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-block px-3 py-1.5 text-xs font-semibold text-terracotta-600 border border-terracotta-300 rounded-full hover:bg-terracotta-50 transition-all"
                        >
                            Resume
                        </a>
                        <CalendlyButton
                            className="flex items-center gap-1.5 px-4 py-2 text-xs bg-terracotta-600 text-cream-50 rounded-full font-semibold hover:bg-terracotta-700 transition-all shadow-sm"
                            ariaLabel="Book a call"
                        >
                            <Calendar size={14} />
                            Book a Call
                        </CalendlyButton>
                    </div>
                </div>
            </div>
        </nav>
    );
}
