import React from 'react';
import { Link } from '@inertiajs/react';

export default function ProductHero() {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-6 py-16 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        All Modules and Capabilities in One Clinic ERP
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Unify scheduling, billing, inventory, clinical documentation, analytics, and access control—built for multi-branch practices with HIPAA-aligned features: RBAC, audit logs, encryption.
                    </p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <Link
                            href="/demo"
                            className="px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Book a Demo
                        </Link>
                        <Link
                            href="/product/integrations"
                            className="px-8 py-3 bg-gray-200 text-gray-800 text-lg font-medium rounded-md hover:bg-gray-300 transition-colors"
                        >
                            Explore Integrations
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}