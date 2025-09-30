import React from 'react';

const JourneyCard = ({ role, flow }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800">{role}</h3>
        <p className="mt-2 text-gray-600">{flow}</p>
    </div>
);

export default function RoleJourneys() {
    const journeys = [
        {
            role: 'Owner/CEO',
            flow: 'See KPIs, reliability notes, and growth levers; drill to modules, then book a demo.',
        },
        {
            role: 'Clinic Manager',
            flow: 'Manage schedules, staffing, inventory, and daily issues from one place.',
        },
        {
            role: 'Front Desk',
            flow: 'Book, reschedule, and queue efficiently with reminders that reduce back-and-forth.',
        },
        {
            role: 'Physician',
            flow: 'Capture notes, order labs, review results, and sign off quickly.',
        },
        {
            role: 'Accountant',
            flow: 'Track invoices, payments, discounts, claims, and reconcile month-end.',
        },
        {
            role: 'Compliance & IT',
            flow: 'Define roles, monitor audit trails, validate encryption and backups, and request BAA.',
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">Workflows for Every Role</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {journeys.map((journey, index) => (
                        <JourneyCard key={index} {...journey} />
                    ))}
                </div>
            </div>
        </section>
    );
}