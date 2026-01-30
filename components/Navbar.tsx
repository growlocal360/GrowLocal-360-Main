'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { industries } from '@/lib/industries';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [industriesOpen, setIndustriesOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-border">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/grow-local-360-logo-black.svg"
                        alt="GrowLocal 360"
                        width={180}
                        height={32}
                        className="h-8 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                        Features
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                        Pricing
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                        How it Works
                    </Link>

                    {/* Industries Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIndustriesOpen(!industriesOpen)}
                            className="text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center gap-1"
                        >
                            Industries
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transition-transform ${industriesOpen ? 'rotate-180' : ''}`}
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>

                        {industriesOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                                {industries.map((industry) => (
                                    <Link
                                        key={industry.slug}
                                        href={`/${industry.slug}`}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                                        onClick={() => setIndustriesOpen(false)}
                                    >
                                        {industry.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Desktop CTA */}
                <Link
                    href="https://app.growlocal360.com/login"
                    className="hidden md:block bg-black hover:bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm hover:shadow-md"
                >
                    Create Free Account
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-gray-600 hover:text-black"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                        <Link
                            href="#features"
                            className="text-base font-medium text-gray-600 hover:text-black transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-base font-medium text-gray-600 hover:text-black transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-base font-medium text-gray-600 hover:text-black transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            How it Works
                        </Link>

                        {/* Mobile Industries Section */}
                        <div className="border-t border-gray-200 pt-4">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Industries</p>
                            <div className="flex flex-col gap-2">
                                {industries.map((industry) => (
                                    <Link
                                        key={industry.slug}
                                        href={`/${industry.slug}`}
                                        className="text-base font-medium text-gray-600 hover:text-black transition-colors py-1"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {industry.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile CTA */}
                        <Link
                            href="https://app.growlocal360.com/login"
                            className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-full font-medium text-base text-center transition-all shadow-sm hover:shadow-md mt-4"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Create Free Account
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
