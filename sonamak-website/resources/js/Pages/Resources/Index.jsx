import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const ResourceCard = ({ href, title, description }) => (
    <Link href={href} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-bold text-blue-800">{title} &rarr;</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </Link>
);

export default function ResourcesIndex() {
    const resources = [
        {
            href: '/blog',
            title: 'Blog',
            description: 'Read about product updates, clinic operations best practices, and compliance tips.'
        },
        {
            href: '/case-studies',
            title: 'Case Studies',
            description: 'See how clinics like yours have streamlined operations and improved care with Sonamak.'
        },
        {
            href: '/help',
            title: 'Help Center',
            description: 'Find answers to your questions, access user guides, and contact our support team.'
        },
        {
            href: '/downloads',
            title: 'Downloads',
            description: 'Get our latest brochures, one-pagers, and other helpful materials.'
        },
        {
            href: '/webinars',
            title: 'Webinars',
            description: 'Watch recorded webinars on product features, industry trends, and more.'
        },
        {
            href: '/faq',
            title: 'General FAQ',
            description: 'Find answers to frequently asked questions about our platform and services.'
        },
    ];

    return (
        <MainLayout>
            <Head title="Resources" />
            <section className="bg-white py-12">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold">Resources Hub</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to get the most out of Sonamak and stay informed.
                    </p>
                </div>
            </section>
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((resource, index) => (
                            <ResourceCard key={index} {...resource} />
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}