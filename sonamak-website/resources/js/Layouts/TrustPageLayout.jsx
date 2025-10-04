import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function TrustPageLayout({ title, children }) {
    const trustNav = [
        { name: 'Trust Center', href: route('trust.index'), current: route().current('trust.index') },
        { name: 'HIPAA', href: route('trust.hipaa'), current: route().current('trust.hipaa') },
        { name: 'Security', href: route('trust.security'), current: route().current('trust.security') },
        { name: 'Privacy', href: route('trust.privacy'), current: route().current('trust.privacy') },
        { name: 'DPA', href: route('trust.dpa'), current: route().current('trust.dpa') },
        { name: 'BAA', href: route('trust.baa'), current: route().current('trust.baa') },
        { name: 'Subprocessors', href: route('trust.subprocessors'), current: route().current('trust.subprocessors') },
        { name: 'SLA & Availability', href: route('trust.sla'), current: route().current('trust.sla') },
        { name:- 'Responsible Disclosure', href: route('trust.responsible-disclosure'), current: route().current('trust.responsible-disclosure') },
    ];

    return (
        <MainLayout>
            <Head title={title} />
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-6">
                    <div className="lg:flex">
                        <aside className="w-full lg:w-1/4 lg:pr-8">
                            <nav className="space-y-1">
                                {trustNav.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`block px-4 py-2 text-sm font-medium rounded-md ${
                                            item.current
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </aside>

                        <div className="w-full lg:w-3/4 mt-8 lg:mt-0">
                            <article className="prose lg:prose-lg max-w-none bg-white p-8 rounded-lg shadow-md">
                                <h1>{title}</h1>
                                {children}
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}