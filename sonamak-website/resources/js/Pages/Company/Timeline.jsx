import { Head } from '@inertiajs/react';
import CompanyPageLayout from '@/Layouts/CompanyPageLayout';

export default function Timeline() {
    const pageContent = (
        <>
            <Head title="Our Timeline" />
            <h1 className="text-4xl font-bold">Our Timeline</h1>
            <p className="mt-4 text-lg text-gray-600">
                This page is under construction. Our company timeline, highlighting key milestones, will be available here soon.
            </p>
        </>
    );

    return <CompanyPageLayout children={pageContent} />;
}