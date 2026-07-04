import { Mail, Github, Linkedin, Calendar } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import CalendlyButton from '@/components/ui/CalendlyButton';

export default function Hero() {
    return (
        <section
            id="home"
            aria-labelledby="hero-heading"
            className="relative pt-36 pb-12 md:pt-44 md:pb-16 overflow-hidden bg-cream-100"
        >
            {/* Soft cream gradient wash */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-cream-200 via-cream-100 to-cream-100 opacity-70" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                    {/* Left: Name, Title, Links */}
                    <div className="text-center md:text-left flex-1">
                        <p className="text-sm font-mono uppercase tracking-[0.2em] text-terracotta-700 mb-4">
                            Portfolio
                        </p>

                        <h1
                            id="hero-heading"
                            className="text-5xl md:text-7xl font-bold text-ink mb-4 tracking-tight leading-[1.05]"
                        >
                            {personalInfo.name}
                        </h1>

                        <p className="text-xl md:text-2xl text-ink-muted mb-8 max-w-2xl leading-relaxed">
                            Founding Software Engineer
                            <span className="text-terracotta-700 font-medium"> · Available for Hire · </span>
                            Open to Relocate Anywhere in US
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <CalendlyButton
                                className="flex items-center gap-2 px-5 py-2.5 bg-terracotta-600 text-cream-50 font-semibold rounded-full hover:bg-terracotta-700 transition-all shadow-sm"
                                ariaLabel="Book a call"
                            >
                                <Calendar size={18} />
                                <span className="text-sm">Book a Call</span>
                            </CalendlyButton>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-2 px-5 py-2.5 bg-cream-50 text-ink-muted hover:text-terracotta-600 border border-cream-300 hover:border-terracotta-300 rounded-full transition-all"
                                title={personalInfo.email}
                                aria-label="Email"
                            >
                                <Mail size={18} aria-hidden="true" />
                                <span className="text-sm hidden sm:inline">Email</span>
                            </a>
                            <a
                                href={personalInfo.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 bg-cream-50 text-ink-muted hover:text-terracotta-600 border border-cream-300 hover:border-terracotta-300 rounded-full transition-all"
                                aria-label="LinkedIn profile (opens in new tab)"
                            >
                                <Linkedin size={18} aria-hidden="true" />
                                <span className="text-sm hidden sm:inline">LinkedIn</span>
                            </a>
                            <a
                                href={personalInfo.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 bg-cream-50 text-ink-muted hover:text-terracotta-600 border border-cream-300 hover:border-terracotta-300 rounded-full transition-all"
                                aria-label="GitHub profile (opens in new tab)"
                            >
                                <Github size={18} aria-hidden="true" />
                                <span className="text-sm hidden sm:inline">GitHub</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Profile Image */}
                    <div className="flex-shrink-0">
                        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cream-50 shadow-xl shadow-terracotta-500/20 ring-1 ring-terracotta-200">
                            <Image
                                src="/images/profile.JPG"
                                alt={`${personalInfo.name} headshot`}
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
