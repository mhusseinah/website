import React from 'react';
import { Link } from '@inertiajs/react';

const ModuleTile = ({ name, micro, link, ariaLabel }) => (
    <Link href={link} aria-label={ariaLabel} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h4 className="text-lg font-bold text-gray-800">{name}</h4>
        <p className="mt-2 text-sm text-gray-600">{micro}</p>
    </Link>
);

export default function ModulesGrid() {
    const modules = [
        { name: 'Scheduling & Calendar', micro: 'Drag-drop views, reminders, and multi-doctor day/week.', link: '/product/scheduling', ariaLabel: 'Open Scheduling and Calendar for appointments, rescheduling, reminders, and queue.' },
        { name: 'Billing & Payments', micro: 'Invoices, receipts, discounts, and payment records.', link: '/product/billing', ariaLabel: 'Open Billing and Payments for invoices and payment tracking.' },
        { name: 'Insurance & Claims', micro: 'Track prior auths, submissions, statuses, and follow-ups.', link: '/product/insurance', ariaLabel: 'Open Insurance and Claims for authorizations and claim status.' },
        { name: 'Inventory & Stores', micro: 'SKUs, branch stock, consumption logs, reorder points.', link: '/product/inventory', ariaLabel: 'Open Inventory and Stores for SKUs, branches, and reorders.' },
        { name: 'EHR (Clinical Notes)', micro: 'Structured templates, attachments, and visit documentation.', link: '/product/ehr', ariaLabel: 'Open EHR for structured notes, templates, and attachments.' },
        { name: 'Lab & Results', micro: 'Order tests, enter results, and print reports.', link: '/product/lab', ariaLabel: 'Open Lab for orders, results entry, and reports.' },
        { name: 'Patient Portal', micro: 'Self-service appointments, statements, and results access.', link: '/product/patient-portal', ariaLabel: 'Open Patient Portal overview for self-service access.' },
        { name: 'Analytics & Reports', micro: 'Dashboards, KPIs, and CSV/PDF exports.', link: '/product/analytics', ariaLabel: 'Open Analytics and Reports for KPIs and exports.' },
        { name: 'Roles & Permissions (RBAC)', micro: 'Define roles, assign permissions, and review audit entries.', link: '/product/multibranch#roles-permissions', ariaLabel: 'Open Roles and Permissions for access control and audit.' },
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800">A Fully-Integrated Platform</h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                    Explore the core modules that unify your clinic’s operations—streamlining scheduling, billing, inventory, clinical records, analytics, and access control.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {modules.map((mod, index) => (
                        <ModuleTile key={index} {...mod} />
                    ))}
                </div>
                <div className="mt-12">
                    <Link href="/product" className="text-blue-500 font-semibold hover:underline">
                        See all modules and capabilities &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}