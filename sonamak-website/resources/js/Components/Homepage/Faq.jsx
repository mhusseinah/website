import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

const FaqItem = ({ q, a, link }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
            >
                <span className="text-lg font-medium text-gray-800">{q}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            {isOpen && (
                <div className="pb-4 pr-8">
                    <p className="text-gray-600">{a}</p>
                    {link && (
                         <Link href={link.href} className="mt-2 inline-block text-blue-500 hover:underline">
                            {link.text} &rarr;
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
};

export default function Faq() {
    const faqData = [
        {
            q: "How is Sonamak priced and what plans are available?",
            a: "Sonamak uses tiered subscriptions with optional add-ons. Pricing can vary by clinic size, selected modules, and billing cycle. Regional taxes or fees may apply.",
            link: { href: "/pricing", text: "Visit the Pricing page" }
        },
        {
            q: "Who owns our data and how can we export it?",
            a: "You own your data. Within Sonamak you can export reports, lists, and transaction details as CSV or PDF. For data-processing roles, retention, and deletion requests, see our DPA.",
            link: { href: "/trust/dpa", text: "See our DPA" }
        },
        {
            q: "How do we get started and migrate our existing data?",
            a: "Start with the Getting Started guide to configure branches, roles, and core modules. For migration, we provide import templates and guided services depending on scope and data quality.",
            link: { href: "/getting-started", text: "Read the guide" }
        },
        {
            q: "What support do you offer and how is uptime handled?",
            a: "Support is available through documented channels with response targets by plan. Uptime targets and incident procedures are defined in our SLA, and real-time availability is shown on the Status page.",
            link: { href: "/trust/sla", text: "View SLA and Status" }
        },
        {
            q: "How does Sonamak support HIPAA and can we sign a BAA?",
            a: "Sonamak provides HIPAA-aligned features such as role-based access, audit logging, and encryption. Compliance also depends on your internal policies and configuration. A Business Associate Agreement (BAA) is available for eligible plans.",
            link: { href: "/trust/hipaa", text: "Learn about HIPAA features" }
        },
        {
            q: "Does the platform support Arabic (RTL) and bilingual content?",
            a: "Yes. Sonamak supports English and Arabic, with an RTL interface for Arabic. Content is localized at the UI level; acronyms like HIPAA and EHR remain in Latin characters.",
            link: { href: "/docs", text: "See documentation" }
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>
                <div className="mt-12 max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}