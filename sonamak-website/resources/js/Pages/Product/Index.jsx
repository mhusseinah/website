import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function ProductIndex() {
    return (
        <>
            <Head title="Product" />
            <div className="container mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold">Product Overview</h1>
                <p className="mt-4 text-lg">This is the product overview page.</p>
            </div>
        </>
    );
}

ProductIndex.layout = page => <MainLayout children={page} />;