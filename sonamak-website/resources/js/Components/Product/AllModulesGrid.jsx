import React from 'react';
import { Link } from '@inertiajs/react';

const ModuleTile = ({ name, micro, link }) => (
    <Link href={link} className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-sm transition-all duration-200">
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="mt-1 text-sm text-gray-600">{micro}</p>
    </Link>
);

const ModuleGroup = ({ title, modules }) => (
    <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
        <div className="space-y-4">
            {modules.map((mod, index) => (
                <ModuleTile key={index} {...mod} />
            ))}
        </div>
    </div>
);

export default function AllModulesGrid() {
    const moduleData = {
        Operations: [
            { name: 'Scheduling & Calendar', micro: 'Drag-drop views, reminders, multi-doctor.', link: '/product/scheduling' },
            { name: 'Queue & Reminders', micro: 'Queue controls, SMS/email reminders.', link: '/product/scheduling#reminders' },
            { name: 'Multi-Branch', micro: 'Branches, locations, shared resources.', link: '/product/multibranch' },
        ],
        Financials: [
            { name: 'Billing & Payments', micro: 'Invoices, receipts, discounts, reconciliation.', link: '/product/billing' },
            { name: 'Insurance & Claims', micro: 'Authorizations, submissions, statuses, follow-ups.', link: '/product/insurance' },
            { name: 'Reports & Exports', micro: 'Auditable reports, CSV/PDF exports.', link: '/product/reports' },
        ],
        Clinical: [
            { name: 'EHR (Clinical Notes)', micro: 'Templates, structured fields, attachments.', link: '/product/ehr' },
            { name: 'Lab & Results', micro: 'Orders, result entry, printables.', link: '/product/lab' },
            { name: 'Dentistry', micro: 'Tooth charting, procedures, imaging.', link: '/product/dentistry' },
            { name: 'Oncology', micro: 'Protocols, regimens, visits, timelines.', link: '/product/oncology' },
        ],
        Security: [
            { name: 'Roles & Permissions (RBAC)', micro: 'Role matrix and permission toggles.', link: '/product/multibranch#roles-permissions' },
            { name: 'Audit Logs', micro: 'Event trails and filters.', link: '/product/security#audit' },
            { name: 'Encryption & Backups', micro: 'Transit/at-rest encryption, backups.', link: '/product/security#encryption' },
        ],
        'Patient Access': [
            { name: 'Patient Portal', micro: 'Self-service appointments, statements, results.', link: '/product/patient-portal' },
            { name: 'Integrations', micro: 'Messaging, payments, imaging, webhooks.', link: '/product/integrations' },
        ]
    };

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold text-gray-800">Explore the Platform Modules</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                        Explore the platform modules grouped by operations, financials, clinical tools, security, and patient access.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {Object.entries(moduleData).map(([groupTitle, modules]) => (
                        <ModuleGroup key={groupTitle} title={groupTitle} modules={modules} />
                    ))}
                </div>
            </div>
        </section>
    );
}