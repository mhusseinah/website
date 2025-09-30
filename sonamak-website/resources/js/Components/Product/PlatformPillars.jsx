import React from 'react';

const Pillar = ({ title, blurb }) => (
    <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{blurb}</p>
    </div>
);

export default function PlatformPillars() {
    const pillars = [
        {
            title: 'Operational Efficiency',
            blurb: 'Streamline scheduling, rescheduling, queues, and reminders across branches to cut back-and-forth and keep days predictable.',
        },
        {
            title: 'Financial Clarity',
            blurb: 'Invoice, record payments, manage discounts and claims, and reconcile month-end with auditable reports and exports.',
        },
        {
            title: 'Clinical Workflows',
            blurb: 'Structure notes, orders, and results with templates and attachments to standardize documentation across specialties.',
        },
        {
            title: 'Security',
            blurb: 'Apply RBAC, capture audit trails, and encrypt data in transit and at rest, supported by backups and recovery processes.',
        },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-gray-200">
                    {pillars.map((pillar, index) => (
                        <Pillar key={index} {...pillar} />
                    ))}
                </div>
            </div>
        </section>
    );
}