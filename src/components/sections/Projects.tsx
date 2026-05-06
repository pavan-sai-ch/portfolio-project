import { projects } from '@/lib/data';
import ProjectCard from '@/components/ui/ProjectCard';
import React from "react";

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Technical Projects
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl font-mono">
                        {'>'}  Featured projects and applications I&#39;ve engineered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}