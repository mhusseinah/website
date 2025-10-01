import { Head } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Sla() {
    const pageContent = (
        <>
            <Head title="Service Level Agreement (SLA)" />
            <h1 className="text-4xl font-bold">Service Level Agreement (SLA)</h1>
            <p className="mt-4 text-lg text-gray-600">
                This page is under construction. Our full SLA, including uptime targets and support response times, will be available here soon.
            </p>
        </>
    );

    return <TrustPageLayout children={pageContent} />;
}