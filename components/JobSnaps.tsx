export default function JobSnaps() {
    const features = [
        {
            title: "Job Photo Uploads",
            description: "Upload before/after photos from completed repairs to showcase your work",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                </svg>
            ),
        },
        {
            title: "AI-Generated Job Descriptions",
            description: "Automatically create compelling service descriptions optimized for SEO",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            ),
        },
        {
            title: "Auto-Posting to Google Business Profile",
            description: "Completed jobs automatically post to your GBP to boost visibility",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
            ),
        },
        {
            title: "Website Embedding",
            description: "Seamlessly integrate job showcases via plugin or iframe on your site",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            ),
        },
        {
            title: "EEAT & SEO Content Automation",
            description: "Service and city-specific pages automatically generated for ranking",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                </svg>
            ),
        },
        {
            title: "Geo-Intent Optimization",
            description: "Advanced local SEO optimization for dominating the Google Map Pack",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            ),
        },
    ];

    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6">
                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm font-medium text-gray-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                        </svg>
                        A True Local Performance Engine
                    </div>
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
                    GrowLocal 360 <span className="bg-[#03d9c1] text-black px-2">Job Snaps®</span>
                </h2>

                {/* Description */}
                <p className="text-center text-gray-300 max-w-4xl mx-auto mb-16 text-lg leading-relaxed">
                    Turn every job you do into <span className="underline decoration-2 underline-offset-4">PROOF</span>! Feed search engines what they are hungry for –{' '}
                    <span className="underline decoration-2 underline-offset-4">Experience</span>,{' '}
                    <span className="underline decoration-2 underline-offset-4">Expertise</span>,{' '}
                    <span className="underline decoration-2 underline-offset-4">Authoritativeness</span>, and{' '}
                    <span className="underline decoration-2 underline-offset-4">Trustworthiness</span>.{' '}
                    This is an extremely powerful visibility booster, not a generic add-on. It directly enhances the results of your website and GBP as a cohesive system.
                </p>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white text-black p-6 rounded-2xl"
                        >
                            <div className="mb-4 text-black">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Tagline */}
                <p className="text-center text-gray-400 text-lg">
                    A powerful visibility booster that drives more traffic and engagement to your business.
                </p>
            </div>
        </section>
    );
}
