"use client";

import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Left: Name and Title */}
                    <div className="flex flex-col">
                        <Link
                            href="#home"
                            className="font-bold text-2xl text-white hover:text-green-400 transition-colors"
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
                            className="text-gray-400 hover:text-green-400 transition-colors"
                            aria-label="Email"
                            title={personalInfo.email}
                        >
                            <Mail size={20} />
                        </a>
                        <a
                            href={personalInfo.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={personalInfo.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-200 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={personalInfo.links.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-xs font-mono bg-gray-800 text-green-400 border border-green-400/30 rounded hover:bg-green-400 hover:text-gray-900 transition-all"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}