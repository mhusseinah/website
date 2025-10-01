import { Head, Link } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

const Pillar = ({ title, description }) => (
    <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
);

export default function TrustIndex() {
    const pageContent = (
        <>
            <Head title="Trust Center" />
            <h1 className="text-4xl font-bold">Trust, Security, and Compliance</h1>
            <p className="mt-4 text-lg text-gray-600">
                HIPAA-aligned features and documented processes support safe, reliable operations: role-based access, audit logging, and encryption in transit and at rest—backed by backups and recovery.
            </p>
            <div className="mt-6 flex space-x-4">
                <Link href="/trust/security" className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">View Security Details</Link>
                <Link href="/request-baa" className="px-5 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300">Request a BAA</Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Pillar title="RBAC (Roles & Permissions)" description="Assign least-privilege access per role and location." />
                <Pillar title="Audit Logging" description="Track access and configuration changes with searchable trails." />
                <Pillar title="Encryption" description="TLS in transit; encryption at rest for stored data." />
                <Pillar title="Backups & Recovery" description="Scheduled backups and tested recovery procedures." />
            </div>

            <div className="mt-12 border-t pt-8">
                <h2 className="text-2xl font-bold">Shared Responsibility</h2>
                <p className="mt-2 text-gray-600">
                    Security and compliance are shared between your organization and Sonamak. Correct configuration, staff training, and internal policies are essential alongside platform controls. We provide guidance and tooling; you govern how your data is used.
                </p>
            </div>

            <div className="mt-12 border-t pt-8">
                <h2 className="text-2xl font-bold">Explore Our Policies</h2>
                <p className="mt-2 text-gray-600">
                    Dive deeper into our specific controls, policies, and agreements.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/trust/hipaa" className="font-semibold text-blue-600 hover:underline">HIPAA Compliance &rarr;</Link>
                    <Link href="/trust/security" className="font-semibold text-blue-600 hover:underline">Security Measures &rarr;</Link>
                    <Link href="/trust/privacy" className="font-semibold text-blue-600 hover:underline">Privacy Notice &rarr;</Link>
                    <Link href="/trust/dpa" className="font-semibold text-blue-600 hover:underline">Data Processing Addendum (DPA) &rarr;</Link>
                    <Link href="/trust/baa" className="font-semibold text-blue-600 hover:underline">Business Associate Agreement (BAA) &rarr;</Link>
                    <Link href="/trust/subprocessors" className="font-semibold text-blue-600 hover:underline">Subprocessors &rarr;</Link>
                    <Link href="/trust/sla" className="font-semibold text-blue-600 hover:underline">Service Level Agreement (SLA) &rarr;</Link>
                    <Link href="/status" className="font-semibold text-blue-600 hover:underline">System Status &rarr;</Link>
                </div>
            </div>
             <p className="text-xs text-gray-500 mt-12">Last updated: September 21, 2025</p>
        </>
    );

    return <TrustPageLayout children={pageContent} />;
}