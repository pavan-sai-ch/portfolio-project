import { experience } from '@/lib/data';
import React from "react";

export default function Experience() {
    return (
        <section id="experience" aria-labelledby="experience-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-t border-gray-800">
            <div className="max-w-4xl mx-auto">

                <h2 id="experience-heading" className="text-3xl font-bold text-white mb-12 text-center">
                    Work Experience
                </h2>

                <div className="space-y-12">
                    {experience.map((item, index) => (
                        <div
                            key={index}
                            className="relative pl-8 sm:pl-0 group"
                        >
                            {/* Timeline Line */}
                            <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-px bg-gray-700 -ml-6 md:-ml-12" />

                            {/* Dot on Line */}
                            <div className="hidden sm:block absolute left-0 top-2 w-3 h-3 bg-green-400 rounded-full -ml-[30px] md:-ml-[54px] ring-4 ring-gray-900" />

                            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                                <div className="sm:w-48 flex-shrink-0 pt-1">
                    <span className="text-sm font-semibold text-green-400 uppercase tracking-wider bg-gray-900 px-2 py-1 rounded font-mono">
                      {item.period}
                    </span>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                                        {item.role}
                                    </h3>
                                    <div className="text-lg text-gray-400 font-medium mb-4">
                                        {item.company}
                                    </div>
                                    <ul className="space-y-2 list-none">
                                        {item.description.map((point, i) => (
                                            <li
                                                key={i}
                                                className="text-gray-400 leading-relaxed flex gap-2"
                                            >
                                                <span className="text-green-400 flex-shrink-0" aria-hidden="true">▹</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}