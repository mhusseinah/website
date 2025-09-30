import React from 'react';
import { Link } from '@inertiajs/react';

const SpecialtyTile = ({ name, description, link }) => (
    <Link href={link} className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
        <h4 className="font-bold text-gray-800">{name}</h4>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
    </Link>
);

export default function SpecialtySolutions() {
    const specialties = [
        { name: 'Dentistry', description: 'Charting, procedures, imaging, and billing streamlined for dental teams.', link: '/solutions/dentistry' },
        { name: 'Oncology', description: 'Protocols, visits, regimens, and results organized for oncology workflows.', link: '/solutions/oncology' },
        { name: 'OB/GYN', description: 'Scheduling, imaging, and records tailored to OB/GYN clinics.', link: '/solutions/ob-gyn' },
        { name: 'Diagnostic Centers', description: 'Orders, results, and reporting for labs and diagnostic centers.', link: '/solutions/diagnostics' },
        { name: 'Multi-Specialty', description: 'Unify departments with shared scheduling, billing, and analytics.', link: '/solutions/multi-specialty' },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">Built for Your Specialty</h2>
                <p className="mt-4 max-w-2xl mx-auto text-center text-gray-600">
                    Explore focused workflows and outcomes for common specialties.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {specialties.map((specialty, index) => (
                        <SpecialtyTile key={index} {...specialty} />
                    ))}
                </div>
            </div>
        </section>
    );
}