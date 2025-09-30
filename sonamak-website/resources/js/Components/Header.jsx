import React from 'react';
import { Link } from '@inertiajs/react';
import useLocalization from '@/Hooks/useLocalization';

export default function Header() {
    const { locale } = useLocalization();

    const langLinkClasses = (lang) => {
        const common = 'text-sm font-semibold hover:text-blue-500 transition-colors';
        return locale === lang
            ? `${common} text-blue-500`
            : `${common} text-gray-600`;
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold text-gray-800">
                        Sonamak
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/product" className="text-gray-600 hover:text-blue-500">Product</Link>
                    <Link href="/solutions" className="text-gray-600 hover:text-blue-500">Solutions</Link>
                    <Link href="/pricing" className="text-gray-600 hover:text-blue-500">Pricing</Link>
                    <Link href="/resources" className="text-gray-600 hover:text-blue-500">Resources</Link>
                    <Link href="/company" className="text-gray-600 hover:text-blue-500">Company</Link>
                    <Link href="/trust" className="text-gray-600 hover:text-blue-500">Trust/Compliance</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-4">
                        <span className="text-sm text-gray-500">Region: ME | USA</span>
                        <div className="flex items-center space-x-2">
                            <Link href="/language/en" className={langLinkClasses('en')}>EN</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/language/ar" className={langLinkClasses('ar')}>AR</Link>
                        </div>
                    </div>
                    <Link href="/demo" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Get Started
                    </Link>
                </div>
            </nav>
        </header>
    );
}