import React from 'react';
import { Link } from '@inertiajs/react';

const IntegrationBadge = ({ name }) => (
    <div className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
        {name}
    </div>
);

export default function Integrations() {
    const integrationCategories = [
        'Messaging', 'Payments', 'SMS', 'Email', 'Imaging/PACS', 'Webhooks', 'CSV Export', 'PDF Export', 'Notifications'
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Integrations & Extensibility</h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                    Connect messaging, payments, imaging, and more—explore available integrations and future categories in one place.
                </p>
                <div className="mt-8 flex justify-center flex-wrap gap-3">
                    {integrationCategories.map((badge, index) => (
                        <IntegrationBadge key={index} name={badge} />
                    ))}
                </div>
                <div className="mt-12">
                    <Link href="/product/integrations" className="text-blue-500 font-semibold hover:underline">
                        Explore all integrations &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}