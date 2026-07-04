import { Heart, Code2, BarChart3 } from 'lucide-react';
import { about } from '@/lib/data';

const iconMap = {
    Code2: <Code2 size={20} />,
    BarChart3: <BarChart3 size={20} />,
};

export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-100 border-t border-cream-300"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <p className="text-sm font-mono uppercase tracking-[0.2em] text-terracotta-500 mb-3">
                            About
                        </p>
                        <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-ink mb-6 tracking-tight">
                            {about.heading}
                        </h2>
                        {about.paragraphs.map((para, i) => (
                            <p
                                key={i}
                                className="text-lg text-ink-muted mb-6 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: para }}
                            />
                        ))}

                        <div className="grid grid-cols-2 gap-4">
                            {about.highlights.map((h) => (
                                <div
                                    key={h.title}
                                    className="p-4 bg-cream-50 rounded-xl border border-cream-300 hover:border-terracotta-300 transition-colors"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-terracotta-500">
                                            {iconMap[h.icon as keyof typeof iconMap]}
                                        </span>
                                        <span className="font-bold text-ink">{h.title}</span>
                                    </div>
                                    <p className="text-sm text-ink-muted">{h.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-terracotta-500/10 to-terracotta-200/20 rounded-2xl transform -z-10" />
                        <div className="bg-cream-50 p-8 rounded-2xl border border-cream-300 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <Heart className="text-terracotta-500 fill-terracotta-500" size={24} />
                                <h3 className="text-xl font-bold text-ink">{about.afkHeading}</h3>
                            </div>
                            <ul className="space-y-4">
                                {about.hobbies.map((hobby) => (
                                    <li key={hobby.title} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-terracotta-500 mt-2.5" />
                                        <span className="text-ink-muted">
                                            <strong className="text-ink">{hobby.title}:</strong>{' '}
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
