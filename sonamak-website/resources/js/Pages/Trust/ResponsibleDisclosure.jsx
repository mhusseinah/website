import React from 'react';
import { Head, Link } from '@inertiajs/react';
import TrustPageLayout from '@/Layouts/TrustPageLayout';

export default function ResponsibleDisclosure() {
    return (
        <TrustPageLayout title="Responsible Disclosure">
            <p className="lead">
                The security of our systems is a top priority. We appreciate the work of security researchers and believe that responsible disclosure of security vulnerabilities helps us ensure the security and privacy of our users.
            </p>

            <h2>Reporting a Vulnerability</h2>
            <p>
                If you believe you have discovered a security vulnerability in a Sonamak service, please report it to us as soon as possible. We ask that you follow these guidelines:
            </p>
            <ul>
                <li>Email your findings to <a href="mailto:security@sonamak.com">security@sonamak.com</a>.</li>
                <li>Provide sufficient information to reproduce the vulnerability, including a description of the issue, the steps to reproduce it, and the potential impact.</li>
                <li>Do not access, modify, or exfiltrate any data that does not belong to you.</li>
                <li>Give us a reasonable amount of time to resolve the issue before any public disclosure.</li>
            </ul>

            <h2>Our Commitment</h2>
            <p>
                We are committed to working with the security community to validate and respond to all legitimate reports. We will not take legal action against you or suspend your account if you follow these responsible disclosure guidelines.
            </p>
            <p>
                While we do not currently offer a public bug bounty program, we appreciate your efforts and may offer recognition for significant findings.
            </p>

            <h2>Scope</h2>
            <p>
                This policy applies to the Sonamak platform and services. It does not apply to third-party services or integrations.
            </p>
        </TrustPageLayout>
    );
}