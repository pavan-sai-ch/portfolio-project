import { personalInfo } from '@/lib/data';
import { Mail, Calendar } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import CalendlyButton from '@/components/ui/CalendlyButton';

export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-400 text-sm font-mono" suppressHydrationWarning>
                    © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>

                <div className="flex gap-6 items-center">
                    <CalendlyButton className="text-gray-400 hover:text-green-400 transition-colors" ariaLabel="Book a call" title="Book a call">
                        <Calendar size={20} />
                    </CalendlyButton>
                    <a href={personalInfo.links.github} target="_blank" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="GitHub">
                        <GithubIcon size={20} />
                    </a>
                    <a href={personalInfo.links.linkedin} target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                        <LinkedinIcon size={20} />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-gray-300 transition-colors" aria-label="Email">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}