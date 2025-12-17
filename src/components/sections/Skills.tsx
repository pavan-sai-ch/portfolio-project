import { skills } from '@/lib/data';
import React from "react";
export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl font-bold text-gray-900 mb-12">
                    Technical Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 capitalize">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm text-gray-700 hover:border-primary-300 hover:shadow-sm transition-all cursor-default">
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}