import React from 'react';
import ArticleLayout from '@/Layouts/ArticleLayout';

export default function BlogShow({ slug }) {
    // In a real application, this data would come from the controller based on the slug
    const post = {
        title: 'Introducing Our New Patient Portal',
        author: 'The Sonamak Team',
        date: 'September 20, 2025',
        content: `
            <p>We are thrilled to announce the official launch of the new Sonamak Patient Portal, a powerful tool designed to empower patients and streamline communication with your clinic. This has been one of our most requested features, and we've worked hard to create an experience that is both intuitive and secure.</p>

            <h3 class="font-bold text-2xl mt-8 mb-4">What's New?</h3>
            <p>The new portal allows patients to:</p>
            <ul class="list-disc list-inside my-4">
                <li>View upcoming appointments and request new ones.</li>
                <li>Access their lab results and clinical summaries securely.</li>
                <li>View their billing statements and make payments online.</li>
                <li>Communicate with the clinic via secure messaging.</li>
            </ul>

            <h3 class="font-bold text-2xl mt-8 mb-4">Security First</h3>
            <p>As always, security is our top priority. The Patient Portal is built with the same robust, HIPAA-aligned security measures that protect the core Sonamak platform, including end-to-end encryption for all data.</p>

            <p class="mt-4">We believe this will be a game-changer for many of our clinics, helping to reduce administrative workload and improve patient engagement. We can't wait for you to start using it.</p>
        `
    };

    return (
        <ArticleLayout
            pageTitle={post.title}
            articleTitle={post.title}
            author={post.author}
            date={post.date}
            breadcrumb={{ href: '/blog', text: 'Back to Blog' }}
        >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </ArticleLayout>
    );
}