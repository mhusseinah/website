import React from 'react';
import SolutionPageLayout from '@/Layouts/SolutionPageLayout';
import { Link } from '@inertiajs/react';

export default function Dentistry() {
    return (
        <SolutionPageLayout
            pageTitle="Solutions for Dentistry"
            heroTitle="A Modern ERP for Dental Clinics"
            heroSubtitle="Streamline everything from patient charting and imaging to billing and insurance claims with a platform designed for the unique workflows of a dental practice."
        >
            <h2 className="text-3xl font-bold">The Complete Solution for Your Dental Practice</h2>
            <p className="mt-4 text-lg">
                Sonamak provides a unified platform that replaces fragmented software. Manage patient records, appointments, and billing in one place, reducing administrative overhead and allowing your team to focus on patient care.
            </p>

            <div className="mt-8">
                <h3 className="text-2xl font-bold">Key Features for Dentistry</h3>
                <ul className="mt-4 list-disc list-inside space-y-4">
                    <li>
                        <strong>Dental Charting:</strong> Interactive teeth charts allow for quick and accurate documentation of existing conditions, treatment plans, and completed procedures.
                    </li>
                    <li>
                        <strong>Procedure & Treatment Planning:</strong> Easily create and manage multi-step treatment plans. Track progress and link procedures directly to billing codes.
                    </li>
                    <li>
                        <strong>Integrated Imaging:</strong> While not a PACS, Sonamak allows you to attach and view patient X-rays, photos, and other images directly within the patient's record for easy reference.
                    </li>
                    <li>
                        <strong>Specialized Billing:</strong> Handle complex dental billing, including insurance claims with specific dental codes, patient co-pays, and multi-payment plans.
                    </li>
                </ul>
            </div>

            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold">Relevant Modules</h3>
                <p className="mt-2">This solution is powered by a combination of our core modules:</p>
                <div className="mt-4 flex flex-wrap gap-4">
                    <Link href="/product/dentistry" className="font-semibold text-blue-600 hover:underline">Dentistry Module &rarr;</Link>
                    <Link href="/product/scheduling" className="font-semibold text-blue-600 hover:underline">Scheduling & Calendar &rarr;</Link>
                    <Link href="/product/billing" className="font-semibold text-blue-600 hover:underline">Billing & Claims &rarr;</Link>
                    <Link href="/product/ehr" className="font-semibold text-blue-600 hover:underline">EHR (Clinical Notes) &rarr;</Link>
                </div>
            </div>
        </SolutionPageLayout>
    );
}