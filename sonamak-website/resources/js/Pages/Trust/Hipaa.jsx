import { Head, Link } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Hipaa() {
    const pageContent = (
        <>
            <Head title="HIPAA Compliance" />
            <h1 className="text-4xl font-bold">HIPAA Compliance</h1>
            <p className="mt-4 text-lg text-gray-600">
                Sonamak provides features to help US healthcare providers and business associates maintain compliance with the Health Insurance Portability and Accountability Act (HIPAA).
            </p>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Shared Responsibility</h2>
                <p className="mt-2 text-gray-600">
                    While Sonamak provides a secure, HIPAA-aligned platform, achieving full compliance is a shared responsibility. Your organization must implement and enforce its own policies, procedures, and training. This page outlines the key platform features that support your compliance program.
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Administrative & Technical Safeguards</h2>
                <p className="mt-2 text-gray-600">Our platform includes the following key technical safeguards to help you protect electronic Protected Health Information (ePHI):</p>
                <ul className="mt-4 list-disc list-inside space-y-2">
                    <li><strong>Access Controls:</strong> Role-Based Access Control (RBAC) allows you to enforce the principle of least privilege, ensuring users can only access the minimum necessary ePHI.</li>
                    <li><strong>Audit Controls:</strong> Detailed, tamper-evident audit logs record access and modifications to ePHI, providing a clear history of activity.</li>
                    <li><strong>Integrity Controls:</strong> Data is protected from improper alteration or destruction through encryption and secure data handling procedures.</li>
                    <li><strong>Transmission Security:</strong> All data is encrypted in transit using TLS to protect it as it travels over the internet.</li>
                </ul>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Business Associate Agreement (BAA)</h2>
                <p className="mt-2 text-gray-600">
                   For customers in the USA who handle ePHI, Sonamak offers a Business Associate Agreement (BAA). This agreement outlines our respective responsibilities for protecting health information under HIPAA.
                </p>
                <div className="mt-4">
                     <Link href="/request-baa" className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
                        Request a BAA
                    </Link>
                </div>
            </div>
             <p className="text-xs text-gray-500 mt-12">Last updated: September 21, 2025</p>
        </>
    );

    return <TrustPageLayout children={pageContent} />;
}