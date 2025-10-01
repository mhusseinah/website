import React from 'react';
import { Link } from '@inertiajs/react';
import ResourceIndexLayout from '@/Layouts/ResourceIndexLayout';

const CaseStudyPreview = ({ title, customer, excerpt, slug }) => (
    <div className="border rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow">
        <div className="p-6">
            <p className="text-sm font-semibold text-blue-600">{customer}</p>
            <h2 className="mt-2 text-2xl font-bold">
                <Link href={`/case-studies/${slug}`} className="hover:text-blue-600">{title}</Link>
            </h2>
            <p className="mt-4 text-gray-700">{excerpt}</p>
            <Link href={`/case-studies/${slug}`} className="mt-4 inline-block font-semibold text-blue-600 hover:underline">
                Read Full Study &rarr;
            </Link>
        </div>
    </div>
);

export default function CaseStudiesIndex() {
    // In a real application, this data would come from the controller
    const studies = [
        {
            title: 'How a Multi-Specialty Clinic Reduced No-Shows by 30%',
            customer: 'Cairo Central Clinic',
            excerpt: 'By implementing automated SMS and email reminders with Sonamak, Cairo Central Clinic dramatically reduced their no-show rate, leading to a significant increase in revenue and resource utilization.',
            slug: 'cairo-central-clinic-no-shows'
        },
        {
            title: 'Streamlining Dental Billing and Claims for a Growing Practice',
            customer: 'Dubai Dental Group',
            excerpt: 'Dubai Dental Group cut their administrative time on billing by half, improved claim accuracy, and gained clearer financial insights after unifying their workflows on the Sonamak platform.',
            slug: 'dubai-dental-group-billing'
        },
        {
            title: 'Achieving HIPAA-Aligned Operations for a US Diagnostic Center',
            customer: 'Houston Diagnostics',
            excerpt: 'Houston Diagnostics leveraged Sonamak\'s RBAC and detailed audit logs to strengthen their compliance posture and streamline their operations ahead of their annual HIPAA audit.',
            slug: 'houston-diagnostics-hipaa'
        }
    ];

    return (
        <ResourceIndexLayout
            pageTitle="Case Studies"
            heroTitle="Customer Success Stories"
            heroSubtitle="See how clinics and medical centers like yours have streamlined operations, improved patient care, and achieved their growth goals with Sonamak."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {studies.map((study, index) => (
                    <CaseStudyPreview key={index} {...study} />
                ))}
            </div>
        </ResourceIndexLayout>
    );
}