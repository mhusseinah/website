import { Head } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Dpa() {
    const pageContent = (
        <>
            <Head title="Data Processing Addendum (DPA)" />
            <h1 className="text-4xl font-bold">Data Processing Addendum (DPA)</h1>
            <p className="mt-4 text-lg text-gray-600">
                This page is under construction. Our full DPA will be available here soon for review and download.
            </p>
        </>
    );

    return <TrustPageLayout children={pageContent} />;
}