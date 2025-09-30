import React from 'react';
import { Link } from '@inertiajs/react';

const Card = ({ title, oneLiner, detail, link }) => (
    <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{oneLiner}</p>
        <p className="mt-2 text-sm text-gray-500">{detail}</p>
        <Link href={link} className="mt-4 inline-block text-blue-500 hover:underline">
            Learn More &rarr;
        </Link>
    </div>
);

export default function ValueCards() {
    const cardsData = [
        {
            title: 'Operational Efficiency',
            oneLiner: 'Streamline appointments, rescheduling, and queues across branches and teams.',
            detail: 'Drag-drop calendar, smart reminders, and queue controls reduce bottlenecks without complex setup.',
            link: '/product#scheduling',
        },
        {
            title: 'Financial Clarity',
            oneLiner: 'Invoice, record payments, and monitor revenue with clear, auditable reports.',
            detail: 'Track discounts, claims, and reconciliation with exports to CSV or PDF.',
            link: '/product#billing',
        },
        {
            title: 'Clinical Workflows',
            oneLiner: 'Structured EHR notes, orders, and attachments keep documentation consistent.',
            detail: 'Templates for visits and procedures, plus lab orders and result entry.',
            link: '/product#ehr',
        },
        {
            title: 'Security & Compliance',
            oneLiner: 'RBAC, audit logs, and encryption help protect data and operations.',
            detail: 'HIPAA-aligned features with role controls, detailed logging, and backups; see Trust Center.',
            link: '/trust',
        },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cardsData.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}