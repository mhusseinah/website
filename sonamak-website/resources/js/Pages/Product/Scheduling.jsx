import React from 'react';
import ModulePageLayout from '@/Layouts/ModulePageLayout';

export default function Scheduling() {
    const pageData = {
        moduleName: "Scheduling & Calendar",
        pageTitle: "Scheduling & Calendar | Sonamak",
        problem: "Manage complex schedules, reduce no-shows, and handle walk-ins without the chaos.",
        solution: "Sonamak provides a centralized, drag-and-drop calendar that simplifies appointment booking, rescheduling, and resource management across multiple doctors and locations.",
        features: [
            {
                title: "Drag-and-Drop Calendar",
                description: "Visually manage appointments with an intuitive calendar interface. Easily move and resize bookings."
            },
            {
                title: "Multi-Doctor & Location Views",
                description: "View schedules for multiple physicians, rooms, or equipment in a single, unified calendar."
            },
            {
                title: "Automated Reminders",
                description: "Reduce no-shows with automated SMS and email reminders sent to patients before their appointments."
            },
            {
                title: "No-Show & Walk-In Handling",
                description: "Mark no-shows with a single click and easily accommodate walk-in patients without disrupting the schedule."
            }
        ],
        outcomes: [
            {
                metric: "Reduced No-Shows",
                description: "Automated reminders help significantly lower the rate of missed appointments."
            },
            {
                metric: "Improved Front-Desk Efficiency",
                description: "Less time spent on phone calls for booking and rescheduling."
            },
            {
                metric: "Optimized Resource Utilization",
                description: "Better visibility into doctor and equipment availability prevents double-bookings."
            }
        ],
        screenshots: [
            { src: 'https://placehold.co/800x600/e2e8f0/4a5568?text=Scheduling+Calendar', alt: 'A screenshot of the Sonamak scheduling calendar.' }
        ],
        faq: [
            { q: "Can the calendar sync with Google Calendar?", a: "We are exploring integrations with third-party calendars. Currently, all scheduling is managed within the Sonamak platform." },
            { q: "How are recurring appointments handled?", a: "You can set up recurring appointments daily, weekly, or monthly with customizable end dates." }
        ],
        cta: {
            title: "Ready to streamline your scheduling?",
            description: "See how our calendar can bring predictability and efficiency to your front desk.",
            buttonText: "Book a Demo",
            link: "/demo"
        }
    };

    return <ModulePageLayout {...pageData} />;
}