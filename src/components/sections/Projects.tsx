import { projects } from '@/lib/data';
import ProjectCard from '@/components/ui/ProjectCard';
import React from "react";
export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-50/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        A selection of full-stack applications and systems I have engineered, focusing on scalability and user experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}