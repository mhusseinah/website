import React from 'react';
import { Link } from '@inertiajs/react';

const Outcome = ({ text, link }) => (
    <div className="text-center">
        <p className="text-lg text-gray-700">{text}</p>
        {link && (
            <Link href={link} className="mt-2 inline-block text-blue-500 text-sm hover:underline">
                See how &rarr;
            </Link>
        )}
    </div>
);

export default function Outcomes() {
    const outcomesData = [
        {
            text: 'Reduce wait times and rescheduling friction with streamlined calendar and queue tools.',
            link: '/product/scheduling',
        },
        {
            text: 'Capture payments and track claims with clear invoices, reconciliations, and reports.',
            link: '/product/billing',
        },
        {
            text: 'Standardize notes and results with templates, structured fields, and attachments.',
            link: '/product/ehr',
        },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">Designed for Impact</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {outcomesData.map((outcome, index) => (
                        <Outcome key={index} {...outcome} />
                    ))}
                </div>
            </div>
        </section>
    );
}