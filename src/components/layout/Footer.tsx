import { personalInfo } from '@/lib/data';
import { Mail, Calendar } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import CalendlyButton from '@/components/ui/CalendlyButton';

export default function Footer() {
    return (
        <footer className="bg-cream-200 border-t border-cream-300 py-14">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-ink-muted text-sm" suppressHydrationWarning>
                    © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>

                <div className="flex gap-6 items-center">
                    <CalendlyButton className="text-ink-muted hover:text-terracotta-500 transition-colors" ariaLabel="Book a call" title="Book a call">
                        <Calendar size={20} />
                    </CalendlyButton>
                    <a href={personalInfo.links.github} target="_blank" className="text-ink-muted hover:text-terracotta-500 transition-colors" aria-label="GitHub">
                        <GithubIcon size={20} />
                    </a>
                    <a href={personalInfo.links.linkedin} target="_blank" className="text-ink-muted hover:text-terracotta-500 transition-colors" aria-label="LinkedIn">
                        <LinkedinIcon size={20} />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="text-ink-muted hover:text-terracotta-500 transition-colors" aria-label="Email">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
