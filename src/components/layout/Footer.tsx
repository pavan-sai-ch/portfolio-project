import { personalInfo } from '@/lib/data';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-500 text-sm" suppressHydrationWarning>
                    © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <a href={personalInfo.links.github} target="_blank" className="text-gray-500 hover:text-black transition-colors" aria-label="GitHub">
                        <GithubIcon size={20} />
                    </a>
                    <a href={personalInfo.links.linkedin} target="_blank" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                        <LinkedinIcon size={20} />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-black transition-colors" aria-label="Email">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}