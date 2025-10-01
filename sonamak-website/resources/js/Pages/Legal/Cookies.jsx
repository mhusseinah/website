import React from 'react';
import LegalPageLayout from '@/Layouts/LegalPageLayout';

export default function Cookies() {
    return (
        <LegalPageLayout pageTitle="Cookies Policy">
            <p className="lead">Last updated: September 21, 2025</p>

            <h2 className="font-bold text-2xl mt-8 mb-4">What Are Cookies</h2>
            <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.</p>

            <h2 className="font-bold text-2xl mt-8 mb-4">How We Use Cookies</h2>
            <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

            <h2 className="font-bold text-2xl mt-8 mb-4">Disabling Cookies</h2>
            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site.</p>

            <h2 className="font-bold text-2xl mt-8 mb-4">The Cookies We Set</h2>
            <ul className="list-disc list-inside my-4">
                <li><strong>Account related cookies:</strong> If you create an account with us, then we will use cookies for the management of the signup process and general administration.</li>
                <li><strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page.</li>
                <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it, such as your preferred language.</li>
            </ul>

            <p><em>This is a placeholder document. The full, legally-binding Cookies Policy should be drafted by a qualified legal professional.</em></p>
        </LegalPageLayout>
    );
}