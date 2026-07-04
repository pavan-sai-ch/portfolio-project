import { projects } from '@/lib/data';
import ProjectCard from '@/components/ui/ProjectCard';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import React from "react";

export default function Projects() {
    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-200 border-t border-cream-300"
        >
            <div className="max-w-6xl mx-auto">
                <div className="mb-14">
                    <p className="text-sm font-mono uppercase tracking-[0.2em] text-terracotta-500 mb-3">
                        Work
                    </p>
                    <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-ink mb-4 tracking-tight">
                        Technical Projects
                    </h2>
                    <p className="text-lg text-ink-muted max-w-2xl">
                        Featured projects and applications I&#39;ve engineered.
                    </p>
                </div>

                <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <StaggerItem key={index} className="h-full">
                            <ProjectCard project={project} />
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
