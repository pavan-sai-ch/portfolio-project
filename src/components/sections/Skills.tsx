import { skills } from '@/lib/data';
import React from "react";

const categoryLabels: Record<string, string> = {
    ai: "AI Tools",
};

export default function Skills() {
    return (
        <section id="skills" aria-labelledby="skills-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">

                <h2 id="skills-heading" className="text-3xl font-bold text-white mb-12">
                    Technical Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-lg font-bold text-green-400 mb-4 capitalize font-mono">
                                $ {categoryLabels[category] ?? category}
                            </h3>
                            <ul className="space-y-2">
                                {items.map((skill) => (
                                    <li
                                        key={skill}
                                        className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm text-gray-300 hover:border-green-500 hover:text-green-400 transition-all cursor-default font-mono"
                                    >
                                        <span aria-hidden="true">• </span>{skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}