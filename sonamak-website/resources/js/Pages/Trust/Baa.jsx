import { Head } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Baa() {
    const pageContent = (
        <>
            <Head title="Business Associate Agreement (BAA)" />
            <h1 className="text-4xl font-bold">Business Associate Agreement (BAA)</h1>
            <p className="mt-4 text-lg text-gray-600">
                This page is under construction. Information about our BAA and how to request one will be available here soon.
            </p>
        </>
    );

    return <TrustPageLayout children={pageContent} />;
}