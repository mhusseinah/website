import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function CompanyIndex() {
    return (
        <>
            <Head title="Company" />
            <div className="container mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold">Company</h1>
                <p className="mt-4 text-lg">This is the company page.</p>
            </div>
        </>
    );
}

CompanyIndex.layout = page => <MainLayout children={page} />;