import React from 'react';
import { Link } from '@inertiajs/react';
import ResourceIndexLayout from '@/Layouts/ResourceIndexLayout';

const PostPreview = ({ title, excerpt, date, slug }) => (
    <div className="border-b border-gray-200 pb-8 mb-8">
        <h2 className="text-2xl font-bold hover:text-blue-600">
            <Link href={`/blog/${slug}`}>{title}</Link>
        </h2>
        <p className="mt-2 text-sm text-gray-500">{date}</p>
        <p className="mt-4 text-gray-700">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="mt-4 inline-block font-semibold text-blue-600 hover:underline">
            Read More &rarr;
        </Link>
    </div>
);

export default function BlogIndex() {
    // In a real application, this data would come from the controller
    const posts = [
        {
            title: 'Introducing Our New Patient Portal',
            date: 'September 20, 2025',
            excerpt: 'We are excited to announce the launch of our new patient portal, designed to give patients more control over their healthcare journey. See what\'s new.',
            slug: 'introducing-patient-portal'
        },
        {
            title: '5 Tips for Reducing No-Shows at Your Clinic',
            date: 'September 15, 2025',
            excerpt: 'No-shows can be a major drain on a clinic\'s resources. Here are five practical tips, supported by our platform, to help you reduce missed appointments.',
            slug: '5-tips-for-reducing-no-shows'
        },
        {
            title: 'Understanding HIPAA: What You Need to Know About Technical Safeguards',
            date: 'September 10, 2025',
            excerpt: 'HIPAA compliance can be complex. In this post, we break down what the technical safeguards mean and how Sonamak helps you meet them.',
            slug: 'understanding-hipaa-technical-safeguards'
        }
    ];

    return (
        <ResourceIndexLayout
            pageTitle="Blog"
            heroTitle="Sonamak Blog"
            heroSubtitle="Product updates, clinic operations best practices, and compliance tips."
        >
            <div className="max-w-3xl mx-auto">
                {posts.map((post, index) => (
                    <PostPreview key={index} {...post} />
                ))}
            </div>
        </ResourceIndexLayout>
    );
}