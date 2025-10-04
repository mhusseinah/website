import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Index({ auth, laravelVersion, phpVersion }) {
    const valueCards = [
        { title: 'Operational Efficiency', description: 'Streamline appointments, rescheduling, and queues across branches and teams.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Financial Clarity', description: 'Invoice, record payments, and monitor revenue with clear, auditable reports.', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
        { title: 'Clinical Workflows', description: 'Structured EHR notes, orders, and attachments keep documentation consistent.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { title: 'Security & Compliance', description: 'RBAC, audit logs, and encryption help protect data and operations.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    ];

    const modules = [
        { name: 'Scheduling & Calendar', link: '/product/scheduling' },
        { name: 'Billing & Payments', link: '/product/billing' },
        { name: 'Insurance & Claims', link: '/product/insurance' },
        { name: 'Inventory & Stores', link: '/product/inventory' },
        { name: 'EHR (Clinical Notes)', link: '/product/ehr' },
        { name: 'Lab & Results', link: '/product/lab' },
        { name: 'Patient Portal', link: '/product/patient-portal' },
        { name: 'Analytics & Reports', link: '/product/analytics' },
        { name: 'Roles & Permissions (RBAC)', link: '/product/multibranch' },
    ];

    const faqs = [
        { q: 'How is Sonamak priced and what plans are available?', a: 'Sonamak uses tiered subscriptions with optional add-ons. Pricing can vary by clinic size, selected modules, and billing cycle. Regional taxes or fees may apply. Visit the Pricing page for current plans and currency options, or talk to Sales for a tailored quote.', link: '/pricing' },
        { q: 'Who owns our data and how can we export it?', a: 'You own your data. Within Sonamak you can export reports, lists, and transaction details as CSV or PDF. For data-processing roles, retention, and deletion requests, see our DPA. For full migrations or backups, contact Support.', link: '/trust/dpa' },
        { q: 'How do we get started and migrate our existing data?', a: 'Start with the Getting Started guide to configure branches, roles, and core modules. For migration, we provide import templates and guided services depending on scope and data quality. We’ll help plan sequencing and validation before go-live.', link: '/getting-started' },
        { q: 'What support do you offer and how is uptime handled?', a: 'Support is available through documented channels with response targets by plan. Uptime targets and incident procedures are defined in our SLA, and real-time availability is shown on the Status page.', link: '/trust/sla' },
        { q: 'How does Sonamak support HIPAA and can we sign a BAA?', a: 'Sonamak provides HIPAA-aligned features such as role-based access, audit logging, and encryption. Compliance also depends on your internal policies and configuration. A Business Associate Agreement (BAA) is available for eligible plans via a request process.', link: '/trust/hipaa' },
        { q: 'Does the platform support Arabic (RTL) and bilingual content?', a: 'Yes. Sonamak supports English and Arabic, with an RTL interface for Arabic. Content is localized at the UI level; acronyms like HIPAA and EHR remain in Latin characters. See documentation for language and accessibility details.', link: '/docs' },
    ];

    return (
        <MainLayout>
            <Head title="Clinic Management Platform" />
            <div className="bg-white">
                {/* Hero Section */}
                <section className="container mx-auto px-6 py-24 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Clinic Management ERP for Multi‑Branch Practices</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Operating since January 2019 in the Middle East and since January 2025 in the USA, with HIPAA‑aligned features for secure, reliable workflows.</p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <Link href="/demo" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">Book a Demo</Link>
                        <Link href="/request-baa" className="bg-gray-200 text-gray-800 px-8 py-3 rounded-md font-semibold hover:bg-gray-300 transition">Request BAA Info</Link>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">HIPAA‑Aligned: RBAC, audit logs, encryption in transit and at rest. <Link href="/trust" className="text-blue-600 hover:underline">Learn more</Link></p>
                </section>

                {/* Credibility Ribbon */}
                <section className="bg-gray-50 py-8">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                            <div className="font-semibold text-gray-700">Operating since 2019 (ME)</div>
                            <div className="font-semibold text-gray-700">USA presence since 2025</div>
                            <div className="font-semibold text-gray-700">EN/AR Interface with RTL</div>
                            <div className="font-semibold text-gray-700">HIPAA‑aligned Controls</div>
                            <div className="font-semibold text-gray-700">Multi-branch Ready</div>
                        </div>
                    </div>
                </section>


                {/* Value Proposition Cards */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800">A Unified Platform for Your Entire Practice</h2>
                        <p className="text-center text-gray-600 mt-2">Unify scheduling, billing, inventory, analytics, and patient access.</p>
                        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {valueCards.map(card => (
                                <div key={card.title} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={card.icon}></path></svg>
                                    <h3 className="mt-4 text-xl font-semibold text-gray-800">{card.title}</h3>
                                    <p className="mt-2 text-gray-600">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Modules Preview Grid */}
                <section className="bg-gray-50 py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800">Comprehensive Modules for Every Need</h2>
                        <p className="text-center text-gray-600 mt-2">Explore the core modules that unify your clinic’s operations.</p>
                        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            {modules.map(module => (
                                <Link key={module.name} href={module.link} className="block p-6 bg-white rounded-lg shadow hover:bg-blue-50 transition">
                                    <h4 className="font-semibold text-gray-800">{module.name}</h4>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link href="/product" className="text-blue-600 font-semibold hover:underline">See all modules &rarr;</Link>
                        </div>
                    </div>
                </section>

                {/* Security & Compliance Snapshot */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-800">Security and Compliance You Can Trust</h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                                We provide HIPAA-aligned controls like Role-Based Access Control (RBAC), audit logging, and encryption to help you meet your compliance obligations.
                            </p>
                            <div className="mt-8 flex justify-center space-x-4">
                                <Link href="/trust" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">View Trust Center</Link>
                                <Link href="/request-baa" className="bg-gray-200 text-gray-800 px-8 py-3 rounded-md font-semibold hover:bg-gray-300 transition">Request BAA Info</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-gray-50 py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>
                        <div className="mt-12 max-w-4xl mx-auto">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                                            <span>{faq.q}</span>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                            </span>
                                        </summary>
                                        <p className="text-gray-600 mt-3 p-4 pt-0 group-open:animate-fadeIn">
                                            {faq.a} <Link href={faq.link} className="text-blue-600 hover:underline">Learn more</Link>.
                                        </p>
                                    </details>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}