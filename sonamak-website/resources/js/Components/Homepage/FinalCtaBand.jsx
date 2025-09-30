import React from 'react';
import { Link } from '@inertiajs/react';

export default function FinalCtaBand() {
    return (
        <section className="bg-blue-600">
            <div className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold text-white">
                    See Sonamak in Action
                </h2>
                <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
                    Book a live walkthrough or talk to our team about your clinic’s needs.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                    <Link
                        href="/demo"
                        className="px-8 py-3 bg-white text-blue-600 text-lg font-semibold rounded-md hover:bg-gray-100 transition-colors"
                    >
                        Book a Demo
                    </Link>
                    <Link
                        href="/contact-sales"
                        className="px-8 py-3 border border-white text-white text-lg font-semibold rounded-md hover:bg-white hover:text-blue-600 transition-colors"
                    >
                        Talk to Sales
                    </Link>
                </div>
            </div>
        </section>
    );
}