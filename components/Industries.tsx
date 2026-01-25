import Link from 'next/link';
import { ReactNode } from 'react';
import { industries } from '@/lib/industries';

const iconMap: Record<string, ReactNode> = {
    thermometer: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
        </svg>
    ),
    wrench: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
    ),
    droplet: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </svg>
    ),
    pipe: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M2 12h20M6 6l12 12M18 6L6 18"></path>
        </svg>
    ),
    fence: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="6" width="4" height="14"></rect>
            <rect x="10" y="6" width="4" height="14"></rect>
            <rect x="17" y="6" width="4" height="14"></rect>
            <line x1="3" y1="10" x2="21" y2="10"></line>
            <line x1="3" y1="16" x2="21" y2="16"></line>
        </svg>
    ),
    hammer: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path>
            <path d="M17.64 15L22 10.64"></path>
            <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"></path>
        </svg>
    ),
    home: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
    ),
    tree: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22v-7"></path>
            <path d="M9 22h6"></path>
            <path d="M12 15l-4-4 2.5-2.5L12 10l1.5-1.5L16 11l-4 4z"></path>
            <path d="M12 10l-3-3 2-2 1 1 1-1 2 2-3 3z"></path>
            <path d="M12 5l-2-2 1-1 1 1 1-1 1 1-2 2z"></path>
        </svg>
    ),
};

export default function Industries() {
    return (
        <section id="industries" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Industries We Serve</h2>
                    <p className="text-xl text-gray-600">
                        GrowLocal 360 is built for local home service businesses. We help you get more leads,
                        automate your customer journey, and dominate your local market.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {industries.map((industry) => (
                        <Link
                            key={industry.slug}
                            href={`/${industry.slug}`}
                            className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300 text-center"
                        >
                            <div className="w-14 h-14 bg-gray-100 group-hover:bg-black group-hover:text-white rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                                {iconMap[industry.icon] || iconMap.wrench}
                            </div>
                            <h3 className="font-bold text-foreground group-hover:text-black">
                                {industry.shortName}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
