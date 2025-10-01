import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const TrustNavLink = ({ href, children }) => {
    const { url } = usePage();
    const isActive = url.startsWith(href);

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

export default function TrustPageLayout({ children }) {
    const trustNavLinks = [
        { href: '/trust', text: 'Trust Center Overview' },
        { href: '/trust/hipaa', text: 'HIPAA Compliance' },
        { href: '/trust/security', text: 'Security' },
        { href: '/trust/privacy', text: 'Privacy Notice' },
        { href: '/trust/dpa', text: 'DPA' },
        { href: '/trust/baa', text: 'BAA' },
        { href: '/trust/subprocessors', text: 'Subprocessors' },
        { href: '/trust/sla', text: 'SLA & Availability' },
        { href: '/trust/responsible-disclosure', text: 'Responsible Disclosure' },
        { href: '/accessibility', text: 'Accessibility' },
    ];

    const page = (
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8">
                <aside className="md:col-span-1">
                    <h2 className="text-lg font-bold mb-4">Trust & Compliance</h2>
                    <nav className="space-y-1">
                        {trustNavLinks.map(link => (
                            <TrustNavLink key={link.href} href={link.href}>
                                {link.text}
                            </TrustNavLink>
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
    );

    return <MainLayout children={page} />;
}