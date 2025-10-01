import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function LegalPageLayout({ pageTitle, children }) {
    const page = (
        <>
            <Head title={pageTitle} />
            <div className="bg-white py-12">
                <div className="container mx-auto px-6">
                    <div className="prose max-w-4xl mx-auto">
                        <h1>{pageTitle}</h1>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );

    return <MainLayout children={page} />;
}