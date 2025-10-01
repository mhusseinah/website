import React from 'react';
import ArticleLayout from '@/Layouts/ArticleLayout';

export default function CaseStudyShow({ slug }) {
    // In a real application, this data would come from the controller based on the slug
    const study = {
        title: 'How a Multi-Specialty Clinic Reduced No-Shows by 30%',
        customer: 'Cairo Central Clinic',
        date: 'October 5, 2025',
        content: `
            <p class="lead">Cairo Central Clinic, a busy multi-specialty facility in the heart of the city, was facing a common but costly problem: a high patient no-show rate that was impacting revenue and disrupting schedules. By implementing Sonamak's automated reminder system, they were able to reduce no-shows by nearly 30% in just three months.</p>

            <h3 class="font-bold text-2xl mt-8 mb-4">The Challenge: Lost Revenue and Wasted Time</h3>
            <p>With dozens of practitioners across multiple specialties, managing appointments was a complex, manual process. The front desk staff spent hours each day making reminder calls, but the no-show rate still hovered around 25%, leaving gaps in schedules and leading to significant lost revenue.</p>

            <h3 class="font-bold text-2xl mt-8 mb-4">The Solution: Automated, Multi-Channel Reminders</h3>
            <p>Sonamak's Scheduling module provided the perfect solution. The clinic was able to configure automated appointment reminders to be sent via both SMS and email at specific intervals (72 hours and 24 hours before the appointment). The system also allowed patients to confirm or request to reschedule with a single click.</p>

            <h3 class="font-bold text-2xl mt-8 mb-4">The Results</h3>
            <ul class="list-disc list-inside my-4">
                <li><strong>28% Reduction in No-Shows:</strong> Within the first quarter, the no-show rate dropped from 25% to just 18%.</li>
                <li><strong>5+ Hours Saved Daily:</strong> The front desk staff were freed from making manual reminder calls, allowing them to focus on in-person patient experience.</li>
                <li><strong>Improved Patient Satisfaction:</strong> Patients appreciated the convenient, non-intrusive reminders and the easy rescheduling process.</li>
            </ul>

            <p class="mt-4 font-semibold">"The automated reminders were a game-changer. We recovered thousands in potential lost revenue and our daily schedule is more predictable than ever," said the Clinic Manager.</p>
        `
    };

    return (
        <ArticleLayout
            pageTitle={`${study.title} | Case Study`}
            articleTitle={study.title}
            author={study.customer}
            date={study.date}
            breadcrumb={{ href: '/case-studies', text: 'Back to Case Studies' }}
        >
            <div dangerouslySetInnerHTML={{ __html: study.content }} />
        </ArticleLayout>
    );
}