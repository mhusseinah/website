import React from 'react';
import ModulePageLayout from '@/Layouts/ModulePageLayout';

export default function Billing() {
    const pageData = {
        moduleName: "Billing & Claims",
        pageTitle: "Billing & Claims | Sonamak",
        problem: "Simplify invoicing, track payments, and manage insurance workflows to improve revenue cycle management.",
        solution: "Sonamak’s billing module automates the creation of invoices, tracks payments, and provides tools to manage insurance claims, reducing manual work and improving financial clarity.",
        features: [
            {
                title: "Automated Invoicing",
                description: "Generate invoices automatically from scheduled appointments and services rendered. Apply discounts and track payment status."
            },
            {
                title: "Insurance & Claims Workflows",
                description: "Manage payer contracts, track prior authorizations, and monitor the entire lifecycle of an insurance claim from submission to payment."
            },
            {
                title: "Payment Recording & Reconciliation",
                description: "Record patient copays, insurance payments, and other transactions. Reconcile accounts with clear reports."
            },
            {
                title: "Financial Reporting",
                description: "Generate reports on revenue, outstanding balances, and claim statuses to get a clear view of your clinic's financial health."
            }
        ],
        outcomes: [
            {
                metric: "Faster Invoicing",
                description: "Reduce the time it takes to generate and send invoices to patients and payers."
            },
            {
                metric: "Improved Collections",
                description: "Better tracking of outstanding balances and claim statuses helps improve collection rates."
            },
            {
                metric: "Clearer Financial Reporting",
                description: "Gain better insights into your revenue cycle with detailed, auditable reports."
            }
        ],
        screenshots: [
            { src: 'https://placehold.co/800x600/e2e8f0/4a5568?text=Billing+Dashboard', alt: 'A screenshot of the Sonamak billing dashboard.' }
        ],
        faq: [
            { q: "Can Sonamak integrate with our payment gateway?", a: "We support integrations with several major payment gateways. Please see our Integrations page for more details." },
            { q: "Does this handle different insurance payer rules?", a: "The system allows you to configure rules and contracts for different payers to help streamline the claims process." }
        ],
        cta: {
            title: "Ready for a clearer financial picture?",
            description: "See how our billing and claims tools can help you improve your revenue cycle.",
            buttonText: "Book a Demo",
            link: "/demo"
        }
    };

    return <ModulePageLayout {...pageData} />;
}