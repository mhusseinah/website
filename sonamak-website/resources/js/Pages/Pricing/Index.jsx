import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function PricingIndex() {
    return (
        <>
            <Head title="Pricing" />
            <div className="container mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold">Pricing</h1>
                <p className="mt-4 text-lg">This is the pricing page.</p>
            </div>
        </>
    );
}

PricingIndex.layout = page => <MainLayout children={page} />;