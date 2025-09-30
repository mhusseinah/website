import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

// A generic FAQ component for reuse
const FaqItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="border-t border-gray-200 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left flex justify-between items-center">
                <span className="font-semibold">{q}</span>
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <div className="mt-2 text-gray-600">{a}</div>}
        </div>
    );
};

export default function ModulePageLayout({
    moduleName,
    pageTitle,
    problem,
    solution,
    features,
    outcomes,
    screenshots,
    faq,
    cta,
}) {
    const page = (
        <>
            <Head title={pageTitle || moduleName} />

            {/* Hero Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold">{moduleName}</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">{problem}</p>
                </div>
            </section>

            {/* Solution & Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold">The Solution</h2>
                        <p className="mt-4 text-lg text-gray-700">{solution}</p>
                        <ul className="mt-6 space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <div>
                                        <h4 className="font-semibold">{feature.title}</h4>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {screenshots && screenshots.length > 0 && (
                            <img src={screenshots[0].src} alt={screenshots[0].alt} className="rounded-lg shadow-2xl" />
                        )}
                    </div>
                </div>
            </section>

            {/* Outcomes Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold">Outcomes & Impact</h2>
                    <div className="mt-8 grid md:grid-cols-3 gap-8">
                        {outcomes.map((outcome, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg">
                                <h3 className="font-bold text-xl">{outcome.metric}</h3>
                                <p className="text-gray-600">{outcome.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            {faq && faq.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                        {faq.map((item, index) => (
                            <FaqItem key={index} {...item} />
                        ))}
                    </div>
                </section>
            )}

             {/* CTA Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold">{cta.title}</h2>
                    <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">{cta.description}</p>
                    <div className="mt-8">
                        <Link href={cta.link} className="px-8 py-3 bg-white text-blue-600 text-lg font-semibold rounded-md hover:bg-gray-100 transition-colors">
                           {cta.buttonText}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );

    // Apply the main layout
    return <MainLayout children={page} />;
}