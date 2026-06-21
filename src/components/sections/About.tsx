import { Heart, Code2, BarChart3 } from 'lucide-react';
import { about } from '@/lib/data';

const iconMap = {
    Code2: <Code2 size={20} />,
    BarChart3: <BarChart3 size={20} />,
};

export default function About() {
    return (
        <section id="about" aria-labelledby="about-heading" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 id="about-heading" className="text-3xl font-bold text-white mb-6">{about.heading}</h2>
                        {about.paragraphs.map((para, i) => (
                            <p
                                key={i}
                                className="text-lg text-gray-400 mb-6 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: para }}
                            />
                        ))}

                        <div className="grid grid-cols-2 gap-4">
                            {about.highlights.map((h) => (
                                <div
                                    key={h.title}
                                    className={`p-4 bg-gray-900 rounded border border-gray-800 ${h.borderHover} transition-colors`}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={h.color}>
                                            {iconMap[h.icon as keyof typeof iconMap]}
                                        </span>
                                        <span className="font-bold text-white">{h.title}</span>
                                    </div>
                                    <p className="text-sm text-gray-400">{h.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-lg transform -z-10" />
                        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                            <div className="flex items-center gap-3 mb-6">
                                <Heart className="text-red-500 fill-red-500" size={24} />
                                <h3 className="text-xl font-bold text-white">{about.afkHeading}</h3>
                            </div>
                            <ul className="space-y-4">
                                {about.hobbies.map((hobby) => (
                                    <li key={hobby.title} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-400 mt-2.5" />
                                        <span className="text-gray-400">
                                            <strong className="text-white">{hobby.title}:</strong>{' '}
                                            {hobby.description}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
