import { Head } from '@inertiajs/react';
import CompanyPageLayout from '@/Layouts/CompanyPageLayout';

export default function Events() {
    const pageContent = (
        <>
            <Head title="Events" />
            <h1 className="text-4xl font-bold">Events</h1>
            <p className="mt-4 text-lg text-gray-600">
                This page is under construction. Information about upcoming webinars, conferences, and other events will be available here soon.
            </p>
        </>
    );

    return <CompanyPageLayout children={pageContent} />;
}