import React from 'react';

const Capability = ({ text }) => (
    <li className="flex items-center">
        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        <span>{text}</span>
    </li>
);

export default function KeyCapabilities() {
    const capabilities = [
        'Multi-branch architecture for clinics and centers.',
        'Fine-grained roles (RBAC) across users.',
        'Detailed audit trails and filters.',
        'CSV/PDF exports across modules.',
        'Patient Portal for access and transparency.',
        'Integration hooks and webhooks.',
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800">Platform Capabilities</h2>
                    <div className="mt-8">
                        <ul className="space-y-4 text-lg text-gray-700">
                            {capabilities.map((cap, index) => (
                                <Capability key={index} text={cap} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}