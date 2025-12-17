import Link from 'next/link';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import React from "react";
export default function Hero() {
    return (
        <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

            {/* BACKGROUND DECORATION */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4 transform">
                <div className="h-[400px] w-[400px] rounded-full bg-primary-500/20 blur-[100px]" />
            </div>
            <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/3 translate-y-1/4 transform">
                <div className="h-[300px] w-[300px] rounded-full bg-blue-400/20 blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-3xl">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
                        Available for hire
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                        Building digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
              experiences.
            </span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                        {personalInfo.bio}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#projects"
                            className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-900/20"
                        >
                            View Work
                            <ArrowRight size={18} />
                        </Link>

                        <div className="flex gap-4 items-center pl-0 sm:pl-4">
                            <a
                                href={personalInfo.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-white hover:text-primary-600 hover:shadow-md transition-all border border-transparent hover:border-gray-200"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href={personalInfo.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-white hover:text-[#0077b5] hover:shadow-md transition-all border border-transparent hover:border-gray-200"
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}