import React from 'react';
import LegalPageLayout from '@/Layouts/LegalPageLayout';

export default function Terms() {
    return (
        <LegalPageLayout pageTitle="Terms of Service">
            <p className="lead">Last updated: September 21, 2025</p>

            <p>Welcome to Sonamak. These terms and conditions outline the rules and regulations for the use of our website and services.</p>

            <h2 className="font-bold text-2xl mt-8 mb-4">1. Introduction</h2>
            <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Sonamak if you do not agree to all of the terms and conditions stated on this page.</p>

            <h2 className="font-bold text-2xl mt-8 mb-4">2. Intellectual Property Rights</h2>
            <p>Other than the content you own, under these Terms, Sonamak and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.</p>

            <h2 className="font-bold text-2xl mt-8 mb-4">3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul className="list-disc list-inside my-4">
                <li>Publishing any Website material in any other media.</li>
                <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
                <li>Publicly performing and/or showing any Website material.</li>
                <li>Using this Website in any way that is or may be damaging to this Website.</li>
            </ul>

            <p><em>This is a placeholder document. The full, legally-binding Terms of Service should be drafted by a qualified legal professional.</em></p>
        </LegalPageLayout>
    );
}