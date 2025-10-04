import React from 'react';
import { Head, Link } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Hipaa() {
    return (
        <TrustPageLayout title="HIPAA Compliance">
            <p className="lead">
                For healthcare providers in the United States, complying with the Health Insurance Portability and Accountability Act (HIPAA) is a critical requirement. Sonamak provides a platform with features designed to help you meet your HIPAA obligations for protecting Patient Health Information (PHI).
            </p>

            <h2>Our Commitment to HIPAA</h2>
            <p>
                Sonamak is committed to providing a secure platform for our customers. For US healthcare entities, this includes signing a Business Associate Agreement (BAA) and implementing safeguards to protect PHI.
            </p>
            <p>
                <strong>Note:</strong> While Sonamak provides a HIPAA-aligned platform, using our software does not automatically make your organization HIPAA compliant. Compliance is a shared responsibility that includes your organization's policies, procedures, and how you configure and use our platform.
            </p>

            <h3>Key Safeguards</h3>
            <p>We have implemented administrative, technical, and physical safeguards to help you protect PHI:</p>

            <h4>1. Administrative Safeguards</h4>
            <ul>
                <li><strong>Security Officer:</strong> We have designated a Security Officer responsible for developing and implementing our security policies and procedures.</li>
                <li><strong>Risk Analysis:</strong> We conduct regular risk assessments to identify and mitigate potential threats to PHI.</li>
                <li><strong>Employee Training:</strong> Our team is trained on security best practices and HIPAA requirements.</li>
                <li><strong>BAA Availability:</strong> We offer a BAA to covered entities and their business associates.</li>
            </ul>

            <h4>2. Technical Safeguards</h4>
            <ul>
                <li><strong>Access Control:</strong> Role-Based Access Control (RBAC) allows you to restrict access to PHI based on user roles and responsibilities.</li>
                <li><strong>Audit Controls:</strong> Detailed audit logs track access and activity within the platform, helping you monitor for unauthorized access.</li>
                <li><strong>Data Encryption:</strong> All PHI is encrypted in transit using TLS and at rest using industry-standard encryption protocols.</li>
                <li><strong>Integrity Controls:</strong> We use checksums and other measures to ensure that PHI is not improperly altered or destroyed.</li>
            </ul>

            <h4>3. Physical Safeguards</h4>
            <ul>
                <li><strong>Data Centers:</strong> Our platform is hosted in secure, SOC 2-compliant data centers with strict access controls.</li>
                <li><strong>Workstation Security:</strong> We enforce policies to secure workstations that access PHI.</li>
            </ul>

            <h2>Business Associate Agreement (BAA)</h2>
            <p>
                A BAA is a legal agreement that outlines each party's responsibilities when handling PHI. We will sign a BAA with covered entities as part of our commitment to helping you meet your HIPAA compliance obligations.
            </p>
            <p>
                To learn more or to request a BAA, please contact our compliance team.
            </p>
            <div className="mt-8">
                <Link href={route('request-baa')} className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition no-underline">
                    Request BAA Information
                </Link>
            </div>
        </TrustPageLayout>
    );
}