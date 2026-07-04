import { experience } from '@/lib/data';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import React from "react";

export default function Experience() {
    return (
        <section
            id="experience"
            aria-labelledby="experience-heading"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-200 border-t border-cream-300"
        >
            <div className="max-w-4xl mx-auto">
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-terracotta-700 mb-3 text-center">
                    Journey
                </p>
                <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-ink mb-16 text-center tracking-tight">
                    Work Experience
                </h2>

                <Stagger className="space-y-12">
                    {experience.map((item, index) => (
                        <StaggerItem key={index}>
                            <div className="relative pl-8 sm:pl-0 group">
                                {/* Timeline Line */}
                                <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-px bg-cream-300 -ml-6 md:-ml-12" />

                                {/* Dot on Line */}
                                <div className="hidden sm:block absolute left-0 top-2 w-3 h-3 bg-terracotta-500 rounded-full -ml-[30px] md:-ml-[54px] ring-4 ring-cream-200 transition-transform group-hover:scale-125" />

                                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                                    <div className="sm:w-48 flex-shrink-0 pt-1">
                                        <span className="text-xs font-semibold text-terracotta-700 uppercase tracking-wider bg-terracotta-50 px-2.5 py-1 rounded-full">
                                            {item.period}
                                        </span>
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-ink group-hover:text-terracotta-600 transition-colors">
                                            {item.role}
                                        </h3>
                                        <div className="text-lg text-ink-muted font-medium mb-4">
                                            {item.company}
                                        </div>
                                        <ul className="space-y-2 list-none">
                                            {item.description.map((point, i) => (
                                                <li
                                                    key={i}
                                                    className="text-ink-muted leading-relaxed flex gap-2"
                                                >
                                                    <span className="text-terracotta-400 flex-shrink-0" aria-hidden="true">▹</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
