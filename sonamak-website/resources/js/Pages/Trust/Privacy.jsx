import { Head } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Privacy() {
    const pageContent = (
        <>
            <Head title="Privacy Notice" />
            <h1 className="text-4xl font-bold">Privacy Notice</h1>
            <p className="mt-4 text-lg text-gray-600">
                This page is under construction. Our full Privacy Notice will be available here soon.
            </p>
        </>
    );

    return <TrustPageLayout children={pageContent} />;
}