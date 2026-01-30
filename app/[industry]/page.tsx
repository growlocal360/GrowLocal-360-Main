import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import JobSnaps from '@/components/JobSnaps';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import { getIndustryBySlug, getAllIndustrySlugs, Industry } from '@/lib/industries';

interface PageProps {
    params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllIndustrySlugs();
    return slugs.map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { industry: slug } = await params;
    const industry = getIndustryBySlug(slug);

    if (!industry) {
        return {
            title: 'Not Found',
        };
    }

    return {
        title: `${industry.title} | GrowLocal 360`,
        description: industry.description,
    };
}

function IndustryHero({ industry }: { industry: Industry }) {
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
                        Built for {industry.name} Businesses
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                        <span className="bg-yellow-300 px-2">{industry.name}</span> Lead Generation
                        <br className="hidden md:block" /> & Management
                    </h1>

                    {/* Secondary Headline */}
                    <p className="text-2xl md:text-3xl font-bold text-black mb-8">
                        {industry.heroDescription}
                    </p>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        {industry.description}
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

function IndustryShowcase({ industry }: { industry: Industry }) {
    return (
        <section id="showcase" className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Ready to Grow Your {industry.name} Business?
                </h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    Join hundreds of {industry.name.toLowerCase()} businesses that have launched professional websites in minutes. No technical skills required.
                </p>

                <Link
                    href="https://app.growlocal360.com/login"
                    className="inline-block bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-full font-medium text-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 mb-8"
                >
                    Create Free Account
                </Link>

                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        No credit card required
                    </span>
                    <span className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Cancel anytime
                    </span>
                </div>
            </div>
        </section>
    );
}

export default async function IndustryPage({ params }: PageProps) {
    const { industry: slug } = await params;
    const industry = getIndustryBySlug(slug);

    if (!industry) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background overflow-x-hidden">
            <Navbar />
            <IndustryHero industry={industry} />
            <Features industrySlug={slug} />
            <JobSnaps />
            <HowItWorks />
            <IndustryShowcase industry={industry} />
            <Footer />
        </main>
    );
}
