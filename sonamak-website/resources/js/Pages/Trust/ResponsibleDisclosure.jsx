import { Head } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function ResponsibleDisclosure() {
    const pageContent = (
        <>
            <Head title="Responsible Disclosure" />
            <h1 className="text-4xl font-bold">Responsible Disclosure</h1>
            <p className="mt-4 text-lg text-gray-600">
                This page is under construction. Our policy for the responsible disclosure of security vulnerabilities will be available here soon.
            </p>
        </>
    );

    return <TrustPageLayout children={pageContent} />;
}