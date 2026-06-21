import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group flex flex-col bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:border-green-500/50">

            {/* Top Gradient Accent Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                            {project.title}
                        </h3>
                        <span className="text-sm text-gray-400 font-mono">{project.year}</span>
                    </div>
                </div>

                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs font-mono bg-gray-800 text-green-400 border border-gray-700 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links Footer */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                    <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-green-400 transition-colors"
                        aria-label={`Source code for ${project.title} (opens in new tab)`}
                    >
                        <GithubIcon size={18} />
                        Source Code
                    </a>

                    {project.links.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors"
                            aria-label={`Live demo of ${project.title} (opens in new tab)`}
                        >
                            <ExternalLink size={18} aria-hidden="true" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}