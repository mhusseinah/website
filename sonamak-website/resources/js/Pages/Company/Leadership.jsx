import { Head } from '@inertiajs/react';
import CompanyPageLayout from '@/Layouts/CompanyPageLayout';

export default function Leadership() {
    const pageContent = (
        <>
            <Head title="Leadership Team" />
            <h1 className="text-4xl font-bold">Leadership</h1>
            <p className="mt-4 text-lg text-gray-600">
                This page is under construction. Information about our leadership team will be available here soon.
            </p>
        </>
    );

    return <CompanyPageLayout children={pageContent} />;
}