import React from 'react';

const GalleryImage = ({ src, alt, caption }) => (
    <figure>
        <img className="rounded-lg shadow-lg" src={src} alt={alt} />
        <figcaption className="mt-2 text-sm text-center text-gray-600">{caption}</figcaption>
    </figure>
);

export default function ProductGallery() {
    const images = [
        {
            src: 'https://placehold.co/600x400/e2e8f0/4a5568?text=Scheduling+View',
            alt: 'Scheduling day view with drag-drop and reminders.',
            caption: 'Scheduling day view with drag-drop and reminders.',
        },
        {
            src: 'https://placehold.co/600x400/e2e8f0/4a5568?text=Billing+Register',
            alt: 'Billing register with invoices and receipts.',
            caption: 'Billing register with invoices and receipts.',
        },
        {
            src: 'https://placehold.co/600x400/e2e8f0/4a5568?text=EHR+Note',
            alt: 'EHR note with structured fields and attachments.',
            caption: 'EHR note with structured fields and attachments.',
        },
        {
            src: 'https://placehold.co/600x400/e2e8f0/4a5568?text=Audit+Log',
            alt: 'Audit log entries with filters.',
            caption: 'Audit log entries with filters.',
        },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">Explore the Interface</h2>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {images.map((image, index) => (
                        <GalleryImage key={index} {...image} />
                    ))}
                </div>
            </div>
        </section>
    );
}