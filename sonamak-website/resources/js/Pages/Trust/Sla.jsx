import React from 'react';
import { Head, Link } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Sla() {
    return (
        <TrustPageLayout title="Service Level Agreement (SLA)">
            <p className="lead">
                This Service Level Agreement ("SLA") outlines the uptime commitments and support response times for the Sonamak platform. Our goal is to provide a reliable and consistently available service.
            </p>

            <h2>Uptime Commitment</h2>
            <p>
                Sonamak targets a <strong>99.9% uptime</strong> for our core services, measured on a monthly basis. Uptime is defined as the percentage of time the platform is available and responsive to requests, excluding scheduled maintenance.
            </p>
            <p>
                Scheduled maintenance will be announced at least 48 hours in advance and will be performed during off-peak hours whenever possible.
            </p>
            <p>
                For real-time and historical uptime information, please visit our status page.
            </p>
            <div className="mt-4 mb-8">
                <Link href={route('status')} className="text-blue-600 hover:underline">
                    View Status Page &rarr;
                </Link>
            </div>

            <h2>Support Response Times</h2>
            <p>
                Our support team is available to assist with any issues you may encounter. Response times vary based on the severity of the issue and your support plan.
            </p>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 mt-6">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity Level</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Response Target</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap"><strong>Urgent:</strong> Critical system failure</td>
                            <td className="px-6 py-4 whitespace-nowrap">1 Business Hour</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap"><strong>High:</strong> Significant feature impairment</td>
                            <td className="px-6 py-4 whitespace-nowrap">4 Business Hours</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap"><strong>Normal:</strong> General questions or minor issues</td>
                            <td className="px-6 py-4 whitespace-nowrap">1 Business Day</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Exclusions</h2>
            <p>
                This SLA does not apply to any performance or availability issues that are:
            </p>
            <ul>
                <li>Caused by factors outside of our reasonable control (force majeure).</li>
                <li>Resulting from your or third-party hardware, software, or services.</li>
                <li>Resulting from your failure to adhere to any required configurations or use the services as intended.</li>
            </ul>
        </TrustPageLayout>
    );
}