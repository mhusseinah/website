import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function SolutionsIndex() {
    return (
        <>
            <Head title="Solutions" />
            <div className="container mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold">Solutions</h1>
                <p className="mt-4 text-lg">This is the solutions page.</p>
            </div>
        </>
    );
}

SolutionsIndex.layout = page => <MainLayout children={page} />;