import { Heart, Code2, BarChart3 } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: The "Jack of All Trades" Philosophy */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            More Than Just Code
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            I define myself as a <span className="font-semibold text-primary-600">product-minded engineer</span>.
                            While my core strength lies in full-stack development, I don&#39;t stop at the code.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            My background in <strong>Data Analytics</strong> allows me to understand the *business impact* of what I build,
                            while my experience in <strong>Mobile (React Native)</strong> ensures those solutions reach users anywhere.
                            I thrive in environments where I can wear multiple hats and solve problems holistically. The vast skill set I bring
                            is really something I am proud of... As one says, &#34;I am a jack of all trades&#34;.
                        </p>

                        {/* Quick Stats / Highlights */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <Code2 className="text-primary-500" size={20} />
                                    <span className="font-bold text-gray-900">Engineering</span>
                                </div>
                                <p className="text-sm text-gray-600">Scalable Web & Mobile Apps</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <BarChart3 className="text-blue-500" size={20} />
                                    <span className="font-bold text-gray-900">Analytics</span>
                                </div>
                                <p className="text-sm text-gray-600">Tableau & Python Data Viz</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The "Personal Touch" (Hobbies) */}
                    <div className="relative">
                        {/* Decorative background blob */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-blue-50 rounded-3xl transform rotate-3 scale-105 -z-10" />

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <Heart className="text-red-500 fill-red-500" size={24} />
                                <h3 className="text-xl font-bold text-gray-900">When I&#39;m AFK</h3>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5" />
                                    <span className="text-gray-600">
                    <strong className="text-gray-900">Football/Soccer:</strong> I love playing football with my friends. I love to dictate the play in general but am as versatile as a player can be with ability to play in any position.
                  </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5" />
                                    <span className="text-gray-600">
                    <strong className="text-gray-900">Gaming:</strong> Big fan of strategy games. They keep my problem-solving skills sharp even when relaxing.
                  </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5" />
                                    <span className="text-gray-600">
                    <strong className="text-gray-900">Cooking:</strong> I enjoy experimenting with new recipes, different cuisines and styles. It&#39;s the only time I don&#39;t strictly follow documentation and give it my own touch :)
                  </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}