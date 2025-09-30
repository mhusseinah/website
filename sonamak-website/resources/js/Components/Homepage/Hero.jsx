import React from 'react';
import { Link } from '@inertiajs/react';

export default function Hero() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 py-16 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
                        Clinic Management ERP for Multi-Branch Practices
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                        Operating since January 2019 in the Middle East and since January 2025 in the USA, with HIPAA-aligned features for secure, reliable workflows.
                    </p>
                    <div className="mt-8">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            HIPAA-Aligned: RBAC, audit logs, encryption in transit and at rest.
                            <Link href="/trust" className="text-blue-500 hover:underline ml-1">
                                Learn more
                            </Link>
                        </p>
                    </div>
                    <div className="mt-8 flex justify-center space-x-4">
                        <Link
                            href="/demo"
                            className="px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Book a Demo
                        </Link>
                        <Link
                            href="/request-baa"
                            className="px-8 py-3 bg-gray-200 text-gray-800 text-lg font-medium rounded-md hover:bg-gray-300 transition-colors"
                        >
                            Request BAA Info
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}