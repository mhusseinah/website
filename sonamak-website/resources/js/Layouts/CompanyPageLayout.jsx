import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const CompanyNavLink = ({ href, children }) => {
    const { url } = usePage();
    const isActive = url === href;

    return (
        <Link
            href={href}
            className={`block px-4 py-2 text-sm rounded-md ${
                isActive
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
        >
            {children}
        </Link>
    );
};

export default function CompanyPageLayout({ children }) {
    const companyNavLinks = [
        { href: '/company/about', text: 'About Sonamak' },
        { href: '/company/timeline', text: 'Timeline' },
        { href: '/company/leadership', text: 'Leadership' },
        { href: '/company/careers', text: 'Careers' },
        { href: '/company/partners', text: 'Partners' },
        { href: '/company/press', text: 'Press & Media' },
        { href: '/company/events', text: 'Events' },
        { href: '/contact-us', text: 'Contact Us' },
    ];

    const page = (
        <div className="bg-gray-50">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <aside className="md:col-span-1">
                        <h2 className="text-lg font-bold mb-4">Company</h2>
                        <nav className="space-y-1">
                            {companyNavLinks.map(link => (
                                <CompanyNavLink key={link.href} href={link.href}>
                                    {link.text}
                                </CompanyNavLink>
                            ))}
                        </nav>
                    </aside>
                    <main className="md:col-span-3">
                        <div className="prose max-w-none bg-white p-8 rounded-lg shadow-md">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );

    return <MainLayout children={page} />;
}