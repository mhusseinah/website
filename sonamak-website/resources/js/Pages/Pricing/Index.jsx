import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const PricingToggle = ({ selectedRegion, setSelectedRegion }) => (
    <div className="flex justify-center items-center p-1 bg-gray-200 rounded-full w-max mx-auto">
        <button
            onClick={() => setSelectedRegion('ME')}
            className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors ${
                selectedRegion === 'ME' ? 'bg-white text-gray-800 shadow' : 'bg-transparent text-gray-600'
            }`}
        >
            Middle East
        </button>
        <button
            onClick={() => setSelectedRegion('USA')}
            className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors ${
                selectedRegion === 'USA' ? 'bg-white text-gray-800 shadow' : 'bg-transparent text-gray-600'
            }`}
        >
            USA
        </button>
    </div>
);

const PricingCard = ({ plan, isSelected }) => (
    <div className={`border rounded-lg p-6 flex flex-col ${plan.featured ? 'border-blue-500' : 'border-gray-200'}`}>
        {plan.featured && <div className="text-center mb-4 font-semibold text-blue-500">Most Popular</div>}
        <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
        <div className="mt-4 text-center text-gray-900">
            <span className="text-4xl font-extrabold">{plan.price}</span>
            <span className="text-base font-medium text-gray-500">/{plan.period}</span>
        </div>
        <p className="mt-2 text-center text-xs text-gray-500">{plan.currencyNote}</p>
        <ul className="mt-8 space-y-4 text-sm text-gray-600 flex-grow">
            {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <Link href={plan.cta.link} className={`mt-8 block w-full text-center py-3 px-6 rounded-md font-semibold ${plan.featured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
            {plan.cta.text}
        </Link>
    </div>
);

const FaqItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-t border-gray-200 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left flex justify-between items-center">
                <span className="font-semibold">{q}</span>
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <div className="mt-2 text-gray-600">{a}</div>}
        </div>
    );
};

export default function PricingIndex() {
    const [selectedRegion, setSelectedRegion] = useState('USA');

    const pricingData = {
        ME: [
            { name: 'Essential', price: 'EGP 1,500', period: 'mo', currencyNote: 'Billed annually. SAR/AED available.', features: ['Scheduling & Calendar', 'Basic Billing', '5 Staff Accounts', 'Standard Support'], cta: { text: 'Start Trial', link: '/trial' } },
            { name: 'Professional', price: 'EGP 3,000', period: 'mo', currencyNote: 'Billed annually. SAR/AED available.', featured: true, features: ['All of Essential, plus:', 'EHR & Clinical Notes', 'Insurance & Claims', 'Inventory Module', '20 Staff Accounts', 'Priority Support'], cta: { text: 'Request Quote', link: '/contact-sales' } },
            { name: 'Enterprise', price: 'Custom', period: 'yr', currencyNote: 'Custom pricing for multi-branch clinics.', features: ['All of Professional, plus:', 'Multi-Branch Management', 'Advanced Analytics', 'Dedicated Onboarding', 'SLA', 'API Access'], cta: { text: 'Contact Sales', link: '/contact-sales' } },
        ],
        USA: [
            { name: 'Practice', price: '$299', period: 'mo', currencyNote: 'Per provider, billed annually.', features: ['Scheduling & Calendar', 'Standard Billing', 'EHR & Clinical Notes', '10 Staff Accounts', 'Standard Support'], cta: { text: 'Start Trial', link: '/trial' } },
            { name: 'Compliance', price: '$499', period: 'mo', currencyNote: 'Per provider, billed annually.', featured: true, features: ['All of Practice, plus:', 'Insurance & Claims Workflows', 'Patient Portal', 'BAA Included', 'HIPAA-aligned Controls', 'Priority Support'], cta: { text: 'Request a Demo', link: '/demo' } },
            { name: 'Enterprise', price: 'Custom', period: 'yr', currencyNote: 'For large practices and groups.', features: ['All of Compliance, plus:', 'Multi-Branch Management', 'Advanced Security & Audit', 'Dedicated Compliance Officer', 'Custom SLA', 'API Access'], cta: { text: 'Talk to Compliance', link: '/contact-sales' } },
        ]
    };

    const faqData = [
        { q: "What are the billing cycles?", a: "Our standard plans are billed annually. We find this simplifies accounting for both our clients and us. Monthly options may be available for certain enterprise plans." },
        { q: "Is there a discount for paying annually?", a: "The prices shown are for annual billing, which already includes a discount compared to month-to-month options where available. " },
        { q: "What's involved in onboarding and data migration?", a: "Onboarding is guided by our support team. We provide templates for data import. For complex migrations from existing systems, we offer a dedicated migration service for a one-time fee." },
    ];

    return (
        <MainLayout>
            <Head title="Pricing" />

            <section className="bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Choose the plan that fits your practice size and compliance needs. All plans are backed by our dedicated support team.</p>
                    <div className="mt-8">
                        <PricingToggle selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pricingData[selectedRegion].map((plan, index) => (
                            <PricingCard key={index} plan={plan} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-8">Pricing FAQs</h2>
                    {faqData.map((item, index) => (
                        <FaqItem key={index} {...item} />
                    ))}
                </div>
            </section>

        </MainLayout>
    );
}