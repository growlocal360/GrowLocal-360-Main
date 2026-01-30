import Link from 'next/link';

export default function Showcase() {
    return (
        <section id="showcase" className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Build Your First Site?</h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    Join hundreds of local home service businesses that have launched professional websites in minutes. No technical skills required.
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
