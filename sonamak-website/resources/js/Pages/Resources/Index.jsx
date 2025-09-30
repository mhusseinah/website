import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function ResourcesIndex() {
    return (
        <>
            <Head title="Resources" />
            <div className="container mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold">Resources</h1>
                <p className="mt-4 text-lg">This is the resources page.</p>
            </div>
        </>
    );
}

ResourcesIndex.layout = page => <MainLayout children={page} />;