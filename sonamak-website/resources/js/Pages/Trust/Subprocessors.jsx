import React from 'react';
import { Head } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Subprocessors() {
    return (
        <TrustPageLayout title="Subprocessors">
            <p className="lead">
                To provide our services, Sonamak engages a number of third-party service providers (subprocessors) that may process customer data. We have carefully vetted these subprocessors for their security and privacy practices.
            </p>

            <h2>Our Vetting Process</h2>
            <p>
                Before engaging any subprocessor, we conduct a thorough due diligence review to ensure they meet our high standards for security and compliance. This includes reviewing their security certifications, data protection policies, and entering into appropriate contractual agreements.
            </p>

            <h2>List of Subprocessors</h2>
            <p>
                Below is a list of our key subprocessors and the services they provide. This list may be updated from time to time.
            </p>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 mt-6">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subprocessor</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Amazon Web Services (AWS)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Cloud Infrastructure and Hosting</td>
                            <td className="px-6 py-4 whitespace-nowrap">USA / Middle East</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Google Workspace</td>
                            <td className="px-6 py-4 whitespace-nowrap">Internal Communications &amp; Collaboration</td>
                            <td className="px-6 py-4 whitespace-nowrap">Global</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Stripe</td>
                            <td className="px-6 py-4 whitespace-nowrap">Payment Processing</td>
                            <td className="px-6 py-4 whitespace-nowrap">USA</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Twilio SendGrid</td>
                            <td className="px-6 py-4 whitespace-nowrap">Transactional Email Delivery</td>
                            <td className="px-6 py-4 whitespace-nowrap">USA</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Updates</h2>
            <p>
                We will provide notice of any new subprocessors by updating this page. We recommend checking this page periodically for any changes.
            </p>
        </TrustPageLayout>
    );
}