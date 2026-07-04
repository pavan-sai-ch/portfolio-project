import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group h-full flex flex-col bg-cream-50 border border-cream-300 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-terracotta-500/10 hover:border-terracotta-300">

            {/* Top Accent Bar */}
            <div className="h-1 w-full bg-terracotta-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-ink group-hover:text-terracotta-600 transition-colors">
                            {project.title}
                        </h3>
                        <span className="text-sm text-ink-soft font-mono">{project.year}</span>
                    </div>
                </div>

                <p className="text-ink-muted mb-6 flex-grow leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-mono bg-cream-200 text-terracotta-700 border border-cream-300 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links Footer */}
                <div className="flex items-center gap-4 pt-4 border-t border-cream-300">
                    <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-terracotta-600 transition-colors"
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
                            className="flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-terracotta-600 transition-colors"
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
