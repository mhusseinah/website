import React from 'react';
import SolutionPageLayout from '@/Layouts/SolutionPageLayout';
import { Link } from '@inertiajs/react';

export default function OwnerCeo() {
    return (
        <SolutionPageLayout
            pageTitle="Solutions for Owners & CEOs"
            heroTitle="The Platform for Clinic Growth and Oversight"
            heroSubtitle="Gain complete visibility into your practice's financial health, operational efficiency, and clinical outcomes from a single, unified dashboard."
        >
            <h2 className="text-3xl font-bold">Make Data-Driven Decisions</h2>
            <p className="mt-4 text-lg">
                As a clinic owner or CEO, you need more than just an operational tool—you need a strategic asset. Sonamak provides the high-level reporting and multi-branch controls necessary to monitor performance, identify growth opportunities, and ensure long-term stability.
            </p>

            <div className="mt-8">
                <h3 className="text-2xl font-bold">Key Features for Owners & CEOs</h3>
                <ul className="mt-4 list-disc list-inside space-y-4">
                    <li>
                        <strong>Centralized Financial Reporting:</strong> Access real-time dashboards showing revenue, expenses, and profitability across all your branches. No more consolidating spreadsheets at the end of the month.
                    </li>
                    <li>
                        <strong>Multi-Branch Management:</strong> Standardize operations across multiple locations with centralized user roles, permissions, and reporting, ensuring consistent quality of care and financial controls.
                    </li>
                    <li>
                        <strong>Key Performance Indicators (KPIs):</strong> Track critical metrics like patient acquisition cost, lifetime value, and resource utilization to measure what matters most to your business.
                    </li>
                    <li>
                        <strong>Audit & Compliance Oversight:</strong> Easily access audit logs and security configurations to ensure your practice remains compliant and your data remains secure, protecting your business from risk.
                    </li>
                </ul>
            </div>

            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold">Relevant Modules</h3>
                <p className="mt-2">This solution is powered by a combination of our core modules:</p>
                <div className="mt-4 flex flex-wrap gap-4">
                    <Link href="/product/analytics" className="font-semibold text-blue-600 hover:underline">Analytics & BI &rarr;</Link>
                    <Link href="/product/multibranch" className="font-semibold text-blue-600 hover:underline">Multi-Branch & Roles &rarr;</Link>
                    <Link href="/product/reports" className="font-semibold text-blue-600 hover:underline">Reports & Exports &rarr;</Link>
                    <Link href="/trust" className="font-semibold text-blue-600 hover:underline">Trust Center &rarr;</Link>
                </div>
            </div>
        </SolutionPageLayout>
    );
}