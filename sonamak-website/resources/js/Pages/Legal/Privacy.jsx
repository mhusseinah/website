import React from 'react';
import LegalPageLayout from '@/Layouts/LegalPageLayout';

export default function Privacy() {
    return (
        <LegalPageLayout pageTitle="Privacy Policy">
            <p className="lead">Last updated: September 21, 2025</p>

            <p>Your privacy is important to us. It is Sonamak's policy to respect your privacy regarding any information we may collect from you across our website.</p>

            <h2 className="font-bold text-2xl mt-8 mb-4">1. Information We Collect</h2>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>

            <h2 className="font-bold text-2xl mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc list-inside my-4">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            </ul>

            <h2 className="font-bold text-2xl mt-8 mb-4">3. Log Files and Cookies</h2>
            <p>Sonamak follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. For more detailed information, please see our Cookies Policy.</p>

            <p><em>This is a placeholder document. The full, legally-binding Privacy Policy should be drafted by a qualified legal professional, especially considering the handling of data under regulations like GDPR and HIPAA.</em></p>
        </LegalPageLayout>
    );
}