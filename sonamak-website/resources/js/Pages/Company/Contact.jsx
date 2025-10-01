import { Head, Link } from '@inertiajs/react';
import CompanyPageLayout from '@/Layouts/CompanyPageLayout';

const ContactCard = ({ title, description, ctaLink, ctaText }) => (
    <div className="border border-gray-200 rounded-lg p-6 text-center">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="mt-2 text-gray-600 h-16">{description}</p>
        <div className="mt-4">
            <Link href={ctaLink} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
                {ctaText} &rarr;
            </Link>
        </div>
    </div>
);

export default function Contact() {
    const pageContent = (
        <>
            <Head title="Contact Us" />
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-600">
                We're here to help. Please direct your inquiry to the appropriate team below.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-8">
                <ContactCard
                    title="Sales"
                    description="For questions about pricing, plans, or how Sonamak can fit your practice."
                    ctaLink="/contact-sales"
                    ctaText="Contact Sales"
                />
                <ContactCard
                    title="Support"
                    description="For existing customers who need technical assistance."
                    ctaLink="/help"
                    ctaText="Visit Help Center"
                />
                <ContactCard
                    title="Partnerships"
                    description="For inquiries about our reseller or technology partner programs."
                    ctaLink="/company/partners"
                    ctaText="Learn More"
                />
            </div>
        </>
    );

    return <CompanyPageLayout children={pageContent} />;
}