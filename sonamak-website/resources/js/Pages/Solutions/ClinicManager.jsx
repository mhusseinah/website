import React from 'react';
import SolutionPageLayout from '@/Layouts/SolutionPageLayout';
import { Link } from '@inertiajs/react';

export default function ClinicManager() {
    return (
        <SolutionPageLayout
            pageTitle="Solutions for Clinic Managers"
            heroTitle="The Command Center for Daily Operations"
            heroSubtitle="Empower your front desk, manage staff schedules, and optimize patient flow with tools designed to make your clinic run smoothly and efficiently."
        >
            <h2 className="text-3xl font-bold">Streamline Your Clinic's Daily Rhythm</h2>
            <p className="mt-4 text-lg">
                As a clinic manager, you are the hub of daily operations. Sonamak is designed to give you the control and visibility you need to reduce patient wait times, prevent staff burnout, and ensure your clinic's resources are used effectively.
            </p>

            <div className="mt-8">
                <h3 className="text-2xl font-bold">Key Features for Clinic Managers</h3>
                <ul className="mt-4 list-disc list-inside space-y-4">
                    <li>
                        <strong>Advanced Scheduling & Queue Management:</strong> Get a clear view of the day's schedule, manage walk-ins, and track patient status from check-in to check-out to minimize bottlenecks.
                    </li>
                    <li>
                        <strong>Staff & Resource Coordination:</strong> Manage schedules for doctors, nurses, and rooms in one place. Avoid double-bookings and ensure you always have the right staff and equipment available.
                    </li>
                    <li>
                        <strong>Inventory & Consumables Tracking:</strong> Set reorder points and receive automatic alerts for low-stock items, preventing last-minute shortages of critical supplies.
                    </li>
                    <li>
                        <strong>Operational Reporting:</strong> Generate daily or weekly reports on patient volume, wait times, and no-show rates to identify areas for operational improvement.
                    </li>
                </ul>
            </div>

            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold">Relevant Modules</h3>
                <p className="mt-2">This solution is powered by a combination of our core modules:</p>
                <div className="mt-4 flex flex-wrap gap-4">
                    <Link href="/product/scheduling" className="font-semibold text-blue-600 hover:underline">Scheduling & Calendar &rarr;</Link>
                    <Link href="/product/inventory" className="font-semibold text-blue-600 hover:underline">Inventory & Stores &rarr;</Link>
                    <Link href="/product/reports" className="font-semibold text-blue-600 hover:underline">Reports & Exports &rarr;</Link>
                    <Link href="/product/multibranch" className="font-semibold text-blue-600 hover:underline">Multi-Branch & Roles &rarr;</Link>
                </div>
            </div>
        </SolutionPageLayout>
    );
}