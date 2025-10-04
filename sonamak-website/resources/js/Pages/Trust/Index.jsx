import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Index() {
    const trustPillars = [
        { title: 'RBAC (Roles & Permissions)', description: 'Assign least-privilege access per role and location.', link: '/trust/security' },
        { title: 'Audit Logging', description: 'Track access and configuration changes with searchable trails.', link: '/trust/security#audit' },
        { title: 'Encryption', description: 'TLS in transit; encryption at rest for stored data.', link: '/trust/security#encryption' },
        { title: 'Backups & Recovery', description: 'Scheduled backups and tested recovery procedures.', link: '/trust/security#backups' },
    ];

    const subpages = [
        { name: 'HIPAA', description: 'Our approach to supporting your HIPAA compliance.', link: 'trust.hipaa' },
        { name: 'Security', description: 'Technical safeguards and infrastructure hardening.', link: 'trust.security' },
        { name: 'Data Processing (DPA)', description: 'Our data processing and protection commitments.', link: 'trust.dpa' },
        { name: 'Business Associate (BAA)', description: 'Request a BAA for your organization.', link: 'trust.baa' },
        { name: 'Subprocessors', description: 'List of third-party services we use.', link: 'trust.subprocessors' },
        { name: 'SLA & Availability', description: 'Our service level and uptime commitments.', link: 'trust.sla' },
        { name: 'Responsible Disclosure', description: 'Our policy for security vulnerability reporting.', link: 'trust.responsible-disclosure' },
        { name: 'Privacy Policy', description: 'How we handle your data.', link: 'legal.privacy' },
    ];

    return (
        <MainLayout>
            <Head title="Trust Center" />

            <div className="bg-white">
                {/* Hero Section */}
                <section className="bg-gray-900 text-white">
                    <div className="container mx-auto px-6 py-24 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">Trust, Security, and Compliance</h1>
                        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                            HIPAA-aligned features and documented processes support safe, reliable operations: role-based access, audit logging, and encryption in transit and at rest—backed by backups and recovery.
                        </p>
                        <div className="mt-8 flex justify-center items-center space-x-4">
                            <Link href={route('trust.security')} className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                                View Security Details
                            </Link>
                            <Link href={route('request-baa')} className="text-gray-300 hover:text-white font-semibold transition">
                                Request a BAA
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Quick Facts / Pillars */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-center">
                            {trustPillars.map(pillar => (
                                <div key={pillar.title}>
                                    <h3 className="text-xl font-semibold text-gray-800">{pillar.title}</h3>
                                    <p className="mt-2 text-gray-600">{pillar.description}</p>
                                    <Link href={pillar.link} className="text-blue-600 font-semibold hover:underline mt-4 inline-block">Learn more &rarr;</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Shared Responsibility */}
                <section className="py-16">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold text-gray-800">A Shared Responsibility</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Security and compliance are shared between your organization and Sonamak. Correct configuration, staff training, and internal policies are essential alongside platform controls. We provide guidance and tooling; you govern how your data is used.
                        </p>
                    </div>
                </section>

                {/* Subpages Grid */}
                <section className="bg-gray-50 py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Explore Our Trust Documents</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {subpages.map(page => (
                                <Link key={page.name} href={route(page.link)} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition">
                                    <h4 className="text-lg font-bold text-gray-800">{page.name}</h4>
                                    <p className="mt-1 text-gray-600">{page.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                 {/* Contact & Last Updated */}
                 <div className="container mx-auto px-6 py-12 text-center text-gray-600">
                    <p>Have questions about the Trust Center or need a BAA? <Link href={route('contact-us')} className="text-blue-600 hover:underline">Contact Compliance</Link>.</p>
                    <p className="text-sm text-gray-500 mt-4">Last updated: September 21, 2025</p>
                </div>
            </div>
        </MainLayout>
    );
}