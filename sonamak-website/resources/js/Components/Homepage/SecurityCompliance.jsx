import React from 'react';
import { Link } from '@inertiajs/react';

export default function SecurityCompliance() {
    const securityFeatures = [
        'Role-Based Access Control (RBAC)',
        'Audit logging and tamper-evident trails',
        'Encryption in transit and at rest',
        'Backups and disaster recovery procedures',
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg p-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Security & Compliance at the Core</h2>
                    <p className="mt-4 text-gray-600">
                        Protect data and operations with HIPAA-aligned controls built into the platform—role-based access, detailed audit logging, and encryption in transit and at rest—supported by documented processes for backups and recovery.
                    </p>
                    <div className="mt-6 text-left inline-block">
                        <ul className="space-y-2">
                            {securityFeatures.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="mt-6 text-xs text-gray-500">
                        Security and compliance depend on your configuration, policies, and training alongside platform controls.
                    </p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <Link
                            href="/trust"
                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                        >
                            View Trust Center
                        </Link>
                        <Link
                            href="/request-baa"
                            className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition-colors"
                        >
                            Request BAA Info
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}