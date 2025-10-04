import React from 'react';
import { Head, Link } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Dpa() {
    return (
        <TrustPageLayout title="Data Processing Addendum (DPA)">
            <p className="lead">
                This Data Processing Addendum ("DPA") forms part of the Master Subscription Agreement or other written or electronic agreement between Sonamak and Customer for the purchase of online services from Sonamak.
            </p>

            <h2>1. Purpose and Scope</h2>
            <p>
                This DPA reflects the parties’ agreement with respect to the terms governing the processing of personal data under the applicable data protection laws. It is designed to help our customers meet their compliance obligations under various data protection regimes, including the GDPR.
            </p>

            <h2>2. Roles and Responsibilities</h2>
            <p>
                Sonamak acts as a "data processor" while the customer acts as a "data controller." We will only process personal data on behalf of and in accordance with your instructions.
            </p>

            <h2>3. How to Obtain a DPA</h2>
            <p>
                Our DPA is available to all customers. To request a copy for review and signature, please contact our sales or compliance team.
            </p>
            <div className="mt-8">
                <Link href={route('contact-us')} className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition no-underline">
                    Contact Us for a DPA
                </Link>
            </div>
        </TrustPageLayout>
    );
}