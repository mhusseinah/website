import { Head } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Accessibility() {
    const pageContent = (
        <>
            <Head title="Accessibility" />
            <h1 className="text-4xl font-bold">Accessibility Statement</h1>
            <p className="mt-4 text-lg text-gray-600">
                This page is under construction. Our accessibility statement and information about our commitment to WCAG 2.1 AA will be available here soon.
            </p>
        </>
    );

    return <TrustPageLayout children={pageContent} />;
}