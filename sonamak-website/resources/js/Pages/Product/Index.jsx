import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Index() {
    const pillars = [
        { title: 'Operational Efficiency', description: 'Streamline scheduling, rescheduling, queues, and reminders across branches to cut back-and-forth and keep days predictable.' },
        { title: 'Financial Clarity', description: 'Invoice, record payments, manage discounts and claims, and reconcile month-end with auditable reports and exports.' },
        { title: 'Clinical Workflows', description: 'Structure notes, orders, and results with templates and attachments to standardize documentation across specialties.' },
        { title: 'Security', description: 'Apply RBAC, capture audit trails, and encrypt data in transit and at rest, supported by backups and recovery processes.' },
    ];

    const modules = {
        Operations: [
            { name: 'Scheduling & Calendar', description: 'Drag-drop views, reminders, multi-doctor.', link: '/product/scheduling' },
            { name: 'Queue & Reminders', description: 'Queue controls, SMS/email reminders.', link: '/product/scheduling#reminders' },
            { name: 'Multi-Branch', description: 'Branches, locations, shared resources.', link: '/product/multibranch' },
        ],
        Financials: [
            { name: 'Billing & Payments', description: 'Invoices, receipts, discounts, reconciliation.', link: '/product/billing' },
            { name: 'Insurance & Claims', description: 'Authorizations, submissions, statuses, follow-ups.', link: '/product/insurance' },
            { name: 'Reports & Exports', description: 'Auditable reports, CSV/PDF exports.', link: '/product/reports' },
        ],
        Clinical: [
            { name: 'EHR (Clinical Notes)', description: 'Templates, structured fields, attachments.', link: '/product/ehr' },
            { name: 'Lab & Results', description: 'Orders, result entry, printables.', link: '/product/lab' },
            { name: 'Dentistry', description: 'Tooth charting, procedures, imaging.', link: '/product/dentistry' },
            { name: 'Oncology', description: 'Protocols, regimens, visits, timelines.', link: '/product/oncology' },
        ],
        Security: [
            { name: 'Roles & Permissions (RBAC)', description: 'Role matrix and permission toggles.', link: '/product/multibranch#roles-permissions' },
            { name: 'Audit Logs', description: 'Event trails and filters.', link: '/product/security#audit' },
            { name: 'Encryption & Backups', description: 'Transit/at-rest encryption, backups.', link: '/product/security#encryption' },
        ],
        'Patient Access': [
            { name: 'Patient Portal', description: 'Self-service appointments, statements, results.', link: '/product/patient-portal' },
            { name: 'Integrations', description: 'Messaging, payments, imaging, webhooks.', link: '/product/integrations' },
        ],
    };

    return (
        <MainLayout>
            <Head title="Product Overview" />

            <div className="bg-white">
                {/* Hero Section */}
                <section className="bg-gray-800 text-white">
                    <div className="container mx-auto px-6 py-20 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">All Modules and Capabilities in One Clinic ERP</h1>
                        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                            Unify scheduling, billing, inventory, clinical documentation, analytics, and access control—built for multi‑branch practices with HIPAA‑aligned features: RBAC, audit logs, encryption.
                        </p>
                        <div className="mt-8 flex justify-center space-x-4">
                            <Link href="/demo" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">Book a Demo</Link>
                            <Link href="/product/integrations" className="bg-gray-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-600 transition">Explore Integrations</Link>
                        </div>
                    </div>
                </section>

                {/* Platform Pillars */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-center">
                            {pillars.map(pillar => (
                                <div key={pillar.title}>
                                    <h3 className="text-xl font-semibold text-gray-800">{pillar.title}</h3>
                                    <p className="mt-2 text-gray-600">{pillar.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* All Modules Grid */}
                <section className="bg-gray-50 py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Every Module You Need</h2>
                        <div className="space-y-12">
                            {Object.entries(modules).map(([group, list]) => (
                                <div key={group}>
                                    <h3 className="text-2xl font-semibold text-gray-700 mb-6">{group}</h3>
                                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        {list.map(module => (
                                            <Link key={module.name} href={route(module.link.startsWith('/') ? module.link.substring(1).replace(/\//g, '.') : module.link)} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition">
                                                <h4 className="text-lg font-bold text-gray-800">{module.name}</h4>
                                                <p className="mt-1 text-gray-600">{module.description}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}