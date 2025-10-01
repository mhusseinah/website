import { Head } from '@inertiajs/react';
import CompanyPageLayout from '@/Layouts/CompanyPageLayout';

export default function Press() {
    const pageContent = (
        <>
            <Head title="Press & Media" />
            <h1 className="text-4xl font-bold">Press & Media</h1>
            <p className="mt-4 text-lg text-gray-600">
                This page is under construction. For press inquiries, please contact us directly. Our media kit will be available here soon.
            </p>
        </>
    );

    return <CompanyPageLayout children={pageContent} />;
}