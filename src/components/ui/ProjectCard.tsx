import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import React from "react";
interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary-200">

            {/* Top Gradient Accent Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-primary-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {project.title}
                        </h3>
                        <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                </div>

                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100 rounded-full"
                        >
              {tag}
            </span>
                    ))}
                </div>

                {/* Links Footer */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
                    >
                        <Github size={18} />
                        Source Code
                    </a>

                    {project.links.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                        >
                            <ExternalLink size={18} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}