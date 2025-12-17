import { experience } from '@/lib/data';
import React from "react";
export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                    Work Experience
                </h2>

                <div className="space-y-12">
                    {experience.map((item, index) => (
                        <div
                            key={index}
                            className="relative pl-8 sm:pl-0 group"
                        >
                            {/* Timeline Line */}
                            <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-px bg-gray-200 -ml-6 md:-ml-12" />

                            {/* Dot on Line */}
                            <div className="hidden sm:block absolute left-0 top-2 w-3 h-3 bg-primary-500 rounded-full -ml-[30px] md:-ml-[54px] ring-4 ring-white" />

                            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                                <div className="sm:w-48 flex-shrink-0 pt-1">
                  <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider bg-primary-50 px-2 py-1 rounded">
                    {item.period}
                  </span>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                                        {item.role}
                                    </h3>
                                    <div className="text-lg text-gray-700 font-medium mb-4">
                                        {item.company}
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}