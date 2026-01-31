import Link from 'next/link';

export default function Hero() {
    return (
        <section className="pt-32 pb-20">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-5xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-800 mb-8">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        The All-In-One Growth System for Local Home Service Businesses
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                        Finally, a <span className="bg-yellow-300 px-2">Smarter & Easier</span> way to Get & Manage More Local Leads
                    </h1>

                    {/* Secondary Headline */}
                    <p className="text-2xl md:text-3xl font-bold text-black mb-8">
                        <span className="underline decoration-2 underline-offset-4">Attract Leads</span>,{' '}
                        <span className="underline decoration-2 underline-offset-4">Improve</span> Customer Journey,{' '}
                        <span className="underline decoration-2 underline-offset-4">Grow Local</span>
                    </p>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Launch an SEO-optimized website, rank higher on Google Maps,
                        automate your customer journey, and grow your business — all in one
                        powerful platform.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Link
                            href="https://app.growlocal360.com/login"
                            className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Create Free Account
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="inline-flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-black px-8 py-4 rounded-full font-medium text-lg transition-all hover:border-gray-400"
                        >
                            See How It Works
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <p className="text-sm text-gray-500">
                        No credit card required • Setup in minutes • Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    );
}
