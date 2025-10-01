import { Head } from '@inertiajs/react';
import CompanyPageLayout from '@/Layouts/CompanyPageLayout';

export default function About() {
    const pageContent = (
        <>
            <Head title="About Sonamak" />
            <h1 className="text-4xl font-bold">About Sonamak</h1>
            <p className="mt-4 text-lg text-gray-600">
                Our mission is to empower medical and dental clinics with a unified, intelligent, and secure platform that streamlines operations and improves patient care.
            </p>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Our Story</h2>
                <p className="mt-2 text-gray-700">
                    Founded in January 2019, Sonamak began with a focus on delivering a lean, efficient, and bilingual (Arabic/English) clinic management solution for the dynamic healthcare market in the Middle East. We quickly became a trusted partner for clinics seeking to modernize their operations, from scheduling and billing to detailed clinical documentation.
                </p>
                <p className="mt-4 text-gray-700">
                    After years of proven success and continuous improvement, we are excited to bring Sonamak to the United States in January 2025. Our US offering is built on the same reliable foundation but has been meticulously adapted to meet the stringent security and compliance requirements of HIPAA, ensuring that US practices have a platform they can trust.
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Our Values</h2>
                <ul className="mt-4 list-disc list-inside space-y-2">
                    <li><strong>Operator-Centric:</strong> We build for the people who run clinics every day—the managers, front desk staff, physicians, and accountants.</li>
                    <li><strong>Credible & Compliant:</strong> We make no compromises on security and compliance. Our platform is built with HIPAA-aligned features at its core.</li>
                    <li><strong>Clear & Clinical:</strong> We believe in clarity over jargon. Our platform is designed to be intuitive and easy to use, without sacrificing power.</li>
                </ul>
            </div>
        </>
    );

    return <CompanyPageLayout children={pageContent} />;
}