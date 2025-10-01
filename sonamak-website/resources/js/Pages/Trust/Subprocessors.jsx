import { Head } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Subprocessors() {
    const pageContent = (
        <>
            <Head title="Subprocessors" />
            <h1 className="text-4xl font-bold">Subprocessors</h1>
            <p className="mt-4 text-lg text-gray-600">
                This page is under construction. A list of our subprocessors and their purposes will be available here soon.
            </p>
        </>
    );

    return <TrustPageLayout children={pageContent} />;
}