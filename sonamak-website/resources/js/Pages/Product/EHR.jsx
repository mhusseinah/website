import React from 'react';
import ModulePageLayout from '@/Layouts/ModulePageLayout';

export default function EHR() {
    const pageData = {
        moduleName: "EMR/EHR (Clinical Notes)",
        pageTitle: "EMR/EHR | Sonamak",
        problem: "Standardize clinical documentation and ensure all patient information is consistent, secure, and easily accessible.",
        solution: "Our EHR module provides structured templates for clinical notes, allowing for consistent data capture. Securely attach images, documents, and lab results directly to a patient's record.",
        features: [
            {
                title: "Customizable Clinical Notes",
                description: "Create or use pre-built templates for different visit types and specialties to ensure consistent documentation."
            },
            {
                title: "Secure Attachments",
                description: "Upload and attach various file types, including images, PDFs, and lab reports, to a patient's electronic record."
            },
            {
                title: "Structured Data Fields",
                description: "Capture key patient data in structured fields for easier reporting and analysis, reducing reliance on free text."
            },
            {
                title: "Version History & Audit Trails",
                description: "Track changes to clinical notes over time with a complete version history and link to the platform's audit log."
            }
        ],
        outcomes: [
            {
                metric: "Improved Documentation Quality",
                description: "Templates and structured data lead to more complete and consistent patient records."
            },
            {
                metric: "Faster Charting",
                description: "Clinicians can complete notes more quickly by using predefined templates for common visit types."
            },
            {
                metric: "Centralized Patient Information",
                description: "All relevant clinical information is stored in one secure, easily accessible place."
            }
        ],
        screenshots: [
            { src: 'https://placehold.co/800x600/e2e8f0/4a5568?text=EHR+Interface', alt: 'A screenshot of the Sonamak EHR interface.' }
        ],
        faq: [
            { q: "Is the EHR data encrypted?", a: "Yes, all patient data, including EHR notes and attachments, is encrypted both in transit and at rest." },
            { q: "Can we create our own note templates?", a: "Yes, the system includes a template builder that allows you to create and customize your own clinical note templates." }
        ],
        cta: {
            title: "Ready for structured, secure clinical notes?",
            description: "Discover how our EHR can improve documentation quality and save your clinicians time.",
            buttonText: "Request a Demo",
            link: "/demo"
        }
    };

    return <ModulePageLayout {...pageData} />;
}