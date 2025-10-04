import React from 'react';
import { Head, Link } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Security() {
    return (
        <TrustPageLayout title="Security Measures">
            <p className="lead">
                At Sonamak, we are committed to protecting your data with robust security infrastructure and practices. Our security program is designed to safeguard your information at every layer of our platform.
            </p>

            <h2>Our Security Framework</h2>
            <p>
                We employ a multi-layered security approach, covering infrastructure, application, and data protection to ensure the confidentiality, integrity, and availability of your information.
            </p>

            <h3>Data Encryption</h3>
            <ul>
                <li><strong>Encryption in Transit:</strong> All data transmitted between you and the Sonamak platform is encrypted using industry-standard Transport Layer Security (TLS 1.2 or higher).</li>
                <li><strong>Encryption at Rest:</strong> All underlying databases, files, and backups are encrypted at rest using AES-256, one of the strongest block ciphers available.</li>
            </ul>

            <h3>Infrastructure Security</h3>
            <ul>
                <li><strong>Secure Data Centers:</strong> Our platform is hosted in leading cloud environments that are SOC 2, ISO 27001, and PCI DSS compliant.</li>
                <li><strong>Network Security:</strong> We utilize Virtual Private Clouds (VPCs), firewalls, and network access control lists to isolate and protect our network infrastructure.</li>
                <li><strong>Vulnerability Management:</strong> We continuously scan our infrastructure for vulnerabilities and apply patches in a timely manner.</li>
            </ul>

            <h3>Application Security</h3>
            <ul>
                <li><strong>Role-Based Access Control (RBAC):</strong> Granular permissions ensure users can only access the information necessary for their roles.</li>
                <li><strong>Audit Logging:</strong> Comprehensive audit trails record significant events, providing visibility into platform activity.</li>
                <li><strong>Secure Development:</strong> Our development lifecycle includes security reviews, code analysis, and testing for common vulnerabilities (e.g., OWASP Top 10).</li>
                <li><strong>Authentication:</strong> We support strong password policies and offer Multi-Factor Authentication (MFA) for enhanced account security. (Note: check plan for availability)</li>
            </ul>

            <h3>Backups and Disaster Recovery</h3>
            <p>
                We perform regular, automated backups of your data. These backups are encrypted and stored in a separate, secure location. Our disaster recovery plan is tested periodically to ensure we can restore service promptly in the event of a major outage.
            </p>

            <div className="mt-8">
                <Link href={route('trust.responsible-disclosure')} className="text-blue-600 hover:underline">
                    Report a vulnerability &rarr;
                </Link>
            </div>
        </TrustPageLayout>
    );
}