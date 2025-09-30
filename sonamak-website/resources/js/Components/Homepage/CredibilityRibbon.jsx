import React from 'react';

export default function CredibilityRibbon() {
    const ribbonItems = [
        'Operating since January 2019 (ME)',
        'USA presence since January 2025',
        'EN/AR interface with RTL',
        'HIPAA-aligned controls: RBAC, Audit, Encryption',
        'Multi-branch clinics and roles',
    ];

    return (
        <section className="bg-gray-100 py-4">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center items-center text-center text-sm text-gray-600 gap-x-6 gap-y-2">
                    {ribbonItems.map((item, index) => (
                        <span key={index} className="font-semibold">{item}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}