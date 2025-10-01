import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function SolutionPageLayout({
    pageTitle,
    heroTitle,
    heroSubtitle,
    children,
}) {
    const page = (
        <>
            <Head title={pageTitle} />

            {/* Hero Section */}
            <section className="bg-blue-50 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-blue-900">{heroTitle}</h1>
                    <p className="mt-4 text-xl text-blue-800 max-w-3xl mx-auto">{heroSubtitle}</p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="prose max-w-none">
                        {children}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold">Ready to See It in Action?</h2>
                    <p className="mt-4 text-lg text-gray-600">Let us show you how Sonamak can be tailored to your specific needs.</p>
                    <div className="mt-8">
                        <Link href="/demo" className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition-colors">
                            Book a Personalized Demo
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );

    return <MainLayout children={page} />;
}