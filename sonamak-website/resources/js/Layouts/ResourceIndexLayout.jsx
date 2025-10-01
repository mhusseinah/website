import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function ResourceIndexLayout({
    pageTitle,
    heroTitle,
    heroSubtitle,
    children,
}) {
    const page = (
        <>
            <Head title={pageTitle} />

            {/* Hero Section */}
            <section className="bg-white py-12 border-b">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold">{heroTitle}</h1>
                    <p className="mt-2 text-lg text-gray-600 max-w-2xl">{heroSubtitle}</p>
                </div>
            </section>

            {/* Main Content Area - where the list of articles will go */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    {children}
                </div>
            </section>
        </>
    );

    return <MainLayout children={page} />;
}