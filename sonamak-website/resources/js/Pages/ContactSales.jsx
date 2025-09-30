import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function ContactSales() {
    return (
        <>
            <Head title="Contact Sales" />
            <div className="container mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold">Contact Sales</h1>
                <p className="mt-4 text-lg">This is the contact sales page.</p>
            </div>
        </>
    );
}

ContactSales.layout = page => <MainLayout children={page} />;