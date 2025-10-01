import { Head, Link } from '@inertiajs/react';
import CompanyPageLayout from '@/Layouts/CompanyPageLayout';

export default function Partners() {
    const pageContent = (
        <>
            <Head title="Partners" />
            <h1 className="text-4xl font-bold">Partner with Sonamak</h1>
            <p className="mt-4 text-lg text-gray-600">
                Join us in our mission to bring modern, efficient, and secure software to clinics around the world. We offer a range of partnership opportunities for resellers and technology providers.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-xl">Reseller Partners</h3>
                    <p className="mt-2 text-gray-700">
                        For consultants and IT providers who serve the healthcare industry. Offer Sonamak to your clients and earn a commission while helping them modernize their practice. We provide full sales and technical training.
                    </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-xl">Technology Partners</h3>
                    <p className="mt-2 text-gray-700">
                        For companies with complementary technologies, such as payment gateways, imaging solutions, or advanced analytics platforms. Integrate your solution with Sonamak to offer a seamless experience to our shared customers.
                    </p>
                </div>
            </div>

            <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold">Become a Partner</h2>
                <p className="mt-2 text-gray-600">If you're interested in becoming a partner, please get in touch.</p>
                <div className="mt-4">
                    <Link href="/contact-us" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
                        Contact Partnerships
                    </Link>
                </div>
            </div>
        </>
    );

    return <CompanyPageLayout children={pageContent} />;
}