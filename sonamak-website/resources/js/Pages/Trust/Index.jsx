import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function TrustIndex() {
    return (
        <>
            <Head title="Trust & Compliance" />
            <div className="container mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold">Trust & Compliance</h1>
                <p className="mt-4 text-lg">This is the Trust & Compliance page.</p>
            </div>
        </>
    );
}

TrustIndex.layout = page => <MainLayout children={page} />;