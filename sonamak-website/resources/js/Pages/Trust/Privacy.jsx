import React from 'react';
import { Head } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function Privacy() {
    return (
        <TrustPageLayout title="Privacy Policy">
            <p className="lead">
                Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
                We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
                Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
            </p>
            <ul>
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the site.</li>
                <li>Request feedback and to contact you about your use of the site.</li>
            </ul>

            <h2>3. Data Security</h2>
            <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2>4. Contact Us</h2>
            <p>
                If you have questions or comments about this Privacy Policy, please contact us through the main contact form.
            </p>
        </TrustPageLayout>
    );
}