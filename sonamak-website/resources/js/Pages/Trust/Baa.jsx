import React from 'react';
import { Head, Link } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Baa() {
    return (
        <TrustPageLayout title="Business Associate Agreement (BAA)">
            <p className="lead">
                Sonamak is prepared to sign a Business Associate Agreement (BAA) with covered entities and business associates as required under HIPAA. This agreement outlines our mutual responsibilities regarding Protected Health Information (PHI).
            </p>

            <h2>What is a BAA?</h2>
            <p>
                A BAA is a written contract between a covered entity and a business associate. It is required by law for HIPAA compliance and serves to clarify and limit the permissible uses and disclosures of PHI by the business associate, based on the relationship between the parties and the activities or services being performed by the business associate.
            </p>

            <h2>Our Commitment</h2>
            <p>
                Our BAA establishes the permitted and required uses of PHI by Sonamak, provides that we will not use or disclose PHI other than as permitted or required by the agreement or as required by law, and requires us to use appropriate safeguards to prevent unauthorized use or disclosure of PHI.
            </p>

            <h2>How to Request a BAA</h2>
            <p>
                Our BAA is available to customers on eligible plans. To initiate the process, please contact our compliance team through the request form. We will review your request and provide you with our standard BAA for your review and signature.
            </p>

            <div className="mt-8">
                <Link href={route('request-baa')} className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition no-underline">
                    Request BAA Information
                </Link>
            </div>
        </TrustPageLayout>
    );
}