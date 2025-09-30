import React from 'react';
import { Link } from '@inertiajs/react';

const TestimonialCard = ({ quote, meta, link }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg">
        <p className="text-gray-600 italic">"{quote}"</p>
        <p className="mt-4 font-semibold text-gray-800">— {meta}</p>
        {link && (
            <Link href={link} className="mt-4 text-sm text-blue-500 hover:underline">
                Read the case study
            </Link>
        )}
    </div>
);

export default function Testimonials() {
    const testimonialsData = [
        {
            quote: "Switching our daily scheduling to Sonamak cut the back-and-forth at reception and made rescheduling predictable. Staff actually see the same day getting calmer instead of chaotic.",
            meta: "Clinic Manager — Multi-specialty clinic — Cairo, Egypt",
            link: "/case-studies",
        },
        {
            quote: "Billing, discounts, and payments now reconcile cleanly. I can trace every invoice and export month-end reports without chasing spreadsheets.",
            meta: "Accountant — Dental group — Dubai, UAE",
            link: "/case-studies",
        },
        {
            quote: "Role-based access and audit logs gave us the visibility we needed. The Trust Center clarified responsibilities and helped us align policy with configuration.",
            meta: "Compliance/IT Lead — Diagnostic center — Houston, USA",
            link: "/case-studies",
        },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">Trusted by Clinic Leaders</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}