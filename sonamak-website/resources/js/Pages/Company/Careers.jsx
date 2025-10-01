import { Head, Link } from '@inertiajs/react';
import CompanyPageLayout from '@/Layouts/CompanyPageLayout';

const JobOpening = ({ title, location, type }) => (
    <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
        <div>
            <h3 className="font-bold text-lg text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{location} &bull; {type}</p>
        </div>
        <div>
            <Link href="#" className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-semibold rounded-md hover:bg-gray-200">
                Apply
            </Link>
        </div>
    </div>
);

export default function Careers() {
    // In a real app, this data would come from the controller
    const openings = [
        { title: 'Senior Backend Engineer (PHP/Laravel)', location: 'USA (Remote)', type: 'Full-time' },
        { title: 'Frontend Engineer (React)', location: 'USA (Remote)', type: 'Full-time' },
        { title: 'Product Manager, Compliance', location: 'Houston, USA', type: 'Full-time' },
        { title: 'Customer Support Specialist (Bilingual AR/EN)', location: 'Cairo, Egypt', type: 'Full-time' },
    ];

    const pageContent = (
        <>
            <Head title="Careers at Sonamak" />
            <h1 className="text-4xl font-bold">Careers</h1>
            <p className="mt-4 text-lg text-gray-600">
                Join our mission to build the future of clinic management. We're a passionate, distributed team dedicated to helping healthcare providers succeed.
            </p>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Our Culture & Benefits</h2>
                <p className="mt-2 text-gray-700">
                    We believe in a culture of ownership, clarity, and collaboration. We offer competitive salaries, comprehensive health benefits, flexible remote work options, and a generous professional development budget to help you grow your skills.
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Open Positions</h2>
                <div className="mt-4 space-y-4">
                    {openings.map((job, index) => (
                        <JobOpening key={index} {...job} />
                    ))}
                </div>
            </div>
        </>
    );

    return <CompanyPageLayout children={pageContent} />;
}