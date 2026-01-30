import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getIndustryBySlug, Industry } from '@/lib/industries';
import { getApplianceRepairSiloPage, getAllApplianceRepairSiloSlugs } from '@/lib/silo-content/appliance-repair';
import type { SiloPage as SiloPageContent } from '@/lib/silo-content/types';

interface PageProps {
    params: Promise<{ industry: string; silo: string }>;
}

// Generate static params for all industry + silo combinations
export async function generateStaticParams() {
    const params: { industry: string; silo: string }[] = [];

    // Add appliance repair silo pages
    const applianceRepairSilos = getAllApplianceRepairSiloSlugs();
    applianceRepairSilos.forEach(silo => {
        params.push({ industry: 'appliance-repair', silo });
    });

    return params;
}

// Get silo content based on industry
function getSiloContent(industry: string, siloSlug: string): SiloPageContent | undefined {
    if (industry === 'appliance-repair') {
        return getApplianceRepairSiloPage(siloSlug);
    }
    return undefined;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { industry, silo } = await params;
    const siloContent = getSiloContent(industry, silo);

    if (!siloContent) {
        return { title: 'Not Found' };
    }

    return {
        title: siloContent.seoTitle,
        description: siloContent.seoDescription,
    };
}

function SiloHero({ content, industrySlug, industry }: {
    content: SiloPageContent;
    industrySlug: string;
    industry: Industry;
}) {
    // Split H1 to highlight the industry name (first two words typically)
    const h1Parts = content.h1.split(' ');
    const highlightWords = h1Parts.slice(0, 2).join(' '); // e.g., "Appliance Repair"
    const restOfTitle = h1Parts.slice(2).join(' '); // e.g., "Website Design & Structure"

    return (
        <section className="pt-32 pb-16">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="mb-6 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-black">Home</Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <Link href={`/${industrySlug}`} className="text-gray-500 hover:text-black">
                            {industry.name}
                        </Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-gray-900">{restOfTitle || content.h1}</span>
                    </nav>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-800 mb-8">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        {industry.name} Guide
                    </div>

                    {/* H1 with yellow highlight */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
                        <span className="bg-yellow-300 px-2">{highlightWords}</span>
                        <br className="hidden md:block" />
                        {restOfTitle}
                    </h1>

                    {/* Intro as description */}
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        {content.intro}
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
                            href="#content"
                            className="inline-flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-black px-8 py-4 rounded-full font-medium text-lg transition-all hover:border-gray-400"
                        >
                            Read the Guide
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

function SiloContent({ content, industrySlug, industry }: {
    content: SiloPageContent;
    industrySlug: string;
    industry: Industry;
}) {
    return (
        <article id="content" className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Sections */}
                    {content.sections.map((section, index) => (
                        <section key={index} className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                                {section.h2}
                            </h2>
                            <div className="prose prose-lg max-w-none">
                                {section.content.split('\n\n').map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* CTA Section */}
                    <div className="mt-16 p-8 bg-black text-white rounded-2xl text-center">
                        <p className="text-xl mb-6">{content.ctaText}</p>
                        <Link
                            href="https://app.growlocal360.com/login"
                            className="inline-flex items-center justify-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all"
                        >
                            Create Free Account
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                    </div>

                    {/* Back Link */}
                    <div className="mt-12 text-center">
                        <Link
                            href={`/${industrySlug}`}
                            className="text-gray-600 hover:text-black inline-flex items-center gap-2"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                            Back to {industry.name} Overview
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default async function SiloPage({ params }: PageProps) {
    const { industry: industrySlug, silo } = await params;

    // Verify the industry exists
    const industry = getIndustryBySlug(industrySlug);
    if (!industry) {
        notFound();
    }

    // Get silo content
    const siloContent = getSiloContent(industrySlug, silo);
    if (!siloContent) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <SiloHero content={siloContent} industrySlug={industrySlug} industry={industry} />
            <SiloContent content={siloContent} industrySlug={industrySlug} industry={industry} />
            <Footer />
        </main>
    );
}
