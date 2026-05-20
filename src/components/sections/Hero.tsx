import { Mail, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export default function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-8 md:pt-40 md:pb-12 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Left side: Name, Title, Links */}
                    <div className="text-center md:text-left flex-1">
                        {/* Name */}
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                            {personalInfo.name}
                        </h1>

                        {/* Title */}
                        <p className="text-xl md:text-2xl text-green-400 font-mono mb-8">
                            Full Stack Software Engineer | Available for Hire | Open to Relocate Anywhere in US
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 hover:text-green-400 hover:border-green-400 border border-gray-700 rounded transition-all"
                                title={personalInfo.email}
                            >
                                <Mail size={18} />
                                <span className="text-sm hidden sm:inline">Email</span>
                            </a>
                            <a
                                href={personalInfo.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 hover:text-blue-400 hover:border-blue-400 border border-gray-700 rounded transition-all"
                            >
                                <Linkedin size={18} />
                                <span className="text-sm hidden sm:inline">LinkedIn</span>
                            </a>
                            <a
                                href={personalInfo.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 hover:text-gray-100 hover:border-gray-300 border border-gray-700 rounded transition-all"
                            >
                                <Github size={18} />
                                <span className="text-sm hidden sm:inline">GitHub</span>
                            </a>
                        </div>
                    </div>

                    {/* Right side: Profile Image */}
                    <div className="flex-shrink-0">
                        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-green-400 shadow-lg shadow-green-400/30">
                            <Image
                                src="/images/profile.JPG"
                                alt="Profile"
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