import { Head, Link } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Security() {
    const pageContent = (
        <>
            <Head title="Security" />
            <h1 className="text-4xl font-bold">Platform Security</h1>
            <p className="mt-4 text-lg text-gray-600">
                We are committed to protecting your data with robust security measures at every layer of our platform.
            </p>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Encryption</h2>
                <ul className="mt-4 list-disc list-inside space-y-2">
                    <li><strong>Encryption in Transit:</strong> All data transmitted between your device and our servers is encrypted using industry-standard TLS (Transport Layer Security).</li>
                    <li><strong>Encryption at Rest:</strong> All of your data, including database records, files, and backups, is encrypted at rest using AES-256 encryption.</li>
                </ul>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Infrastructure & Hardening</h2>
                <p className="mt-2 text-gray-600">
                    Our platform is hosted on leading cloud infrastructure that provides a secure, scalable, and reliable environment. We follow industry best practices for environment hardening, including network firewalls, regular security patching, and secure configuration management.
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Backup & Disaster Recovery</h2>
                <p className="mt-2 text-gray-600">
                    We perform regular, automated backups of your data. In the event of a major outage, we have a tested disaster recovery plan to restore service and data in a timely manner.
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Single Sign-On (SSO) & Multi-Factor Authentication (MFA)</h2>
                <p className="mt-2 text-gray-600">
                    Where supported, we offer Single Sign-On (SSO) to allow your team to authenticate using your organization's identity provider. We also encourage the use of Multi-Factor Authentication (MFA) to add an extra layer of security to user accounts.
                </p>
                <p className="mt-2 text-sm text-gray-500">
                    (Note: Availability of SSO/MFA may depend on your plan. Please contact sales for more details.)
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Responsible Disclosure</h2>
                <p className="mt-2 text-gray-600">
                    We value the work of security researchers. If you believe you have found a security vulnerability in our platform, please see our <Link href="/trust/responsible-disclosure" className="text-blue-600 hover:underline">Responsible Disclosure</Link> policy.
                </p>
            </div>

            <p className="text-xs text-gray-500 mt-12">Last updated: September 21, 2025</p>
        </>
    );

    return <TrustPageLayout children={pageContent} />;
}