import React from 'react';
import SolutionPageLayout from '@/Layouts/SolutionPageLayout';
import { Link } from '@inertiajs/react';

export default function Oncology() {
    return (
        <SolutionPageLayout
            pageTitle="Solutions for Oncology"
            heroTitle="An ERP for Modern Oncology Centers"
            heroSubtitle="Manage complex treatment protocols, multi-visit regimens, and detailed clinical documentation with a platform built to support the unique needs of oncology care."
        >
            <h2 className="text-3xl font-bold">Coordinate Complex Cancer Care</h2>
            <p className="mt-4 text-lg">
                Oncology care involves intricate, long-term treatment plans. Sonamak provides the tools to manage this complexity, from initial diagnosis through every cycle of treatment, ensuring data consistency and clear communication across your care team.
            </p>

            <div className="mt-8">
                <h3 className="text-2xl font-bold">Key Features for Oncology</h3>
                <ul className="mt-4 list-disc list-inside space-y-4">
                    <li>
                        <strong>Protocol & Regimen Management:</strong> Define and manage standard treatment protocols and apply them to patient-specific regimens. Track cycles, visits, and dosage adjustments with precision.
                    </li>
                    <li>
                        <strong>Complex Visit Scheduling:</strong> Easily schedule and coordinate multi-step visits that may involve consultations, infusions, and lab work, all within a single patient timeline.
                    </li>
                    <li>
                        <strong>Specialized Clinical Notes:</strong> Utilize templates designed for oncology, including fields for staging, toxicity assessments, and performance status, ensuring comprehensive documentation.
                    </li>
                    <li>
                        <strong>Lab & Results Tracking:</strong> Integrate lab orders and results directly into the patient's chart, providing a clear, chronological view of their progress and response to treatment.
                    </li>
                </ul>
            </div>

            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold">Relevant Modules</h3>
                <p className="mt-2">This solution is powered by a combination of our core modules:</p>
                <div className="mt-4 flex flex-wrap gap-4">
                    <Link href="/product/oncology" className="font-semibold text-blue-600 hover:underline">Oncology (TumorsAdv) Module &rarr;</Link>
                    <Link href="/product/scheduling" className="font-semibold text-blue-600 hover:underline">Scheduling & Calendar &rarr;</Link>
                    <Link href="/product/lab" className="font-semibold text-blue-600 hover:underline">Lab & Results &rarr;</Link>
                    <Link href="/product/ehr" className="font-semibold text-blue-600 hover:underline">EHR (Clinical Notes) &rarr;</Link>
                </div>
            </div>
        </SolutionPageLayout>
    );
}