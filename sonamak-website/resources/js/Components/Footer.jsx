import React from 'react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Column 1: Logo & Mission */}
                    <div className="col-span-1 lg:col-span-2">
                        <ApplicationLogo className="block h-10 w-auto fill-current text-white" />
                        <p className="mt-4 text-gray-400 text-sm">
                            Sonamak is a comprehensive clinic management platform designed for modern healthcare providers in the Middle East and the USA.
                        </p>
                        <div className="mt-6">
                            <p className="text-sm text-gray-300">© {new Date().getFullYear()} Sonamak. All rights reserved.</p>
                        </div>
                    </div>

                    {/* Column 2: Product & Solutions */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Platform</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href={route('product.index')} className="text-gray-400 hover:text-white transition-colors">Product Overview</Link></li>
                            <li><Link href={route('solutions.index')} className="text-gray-400 hover:text-white transition-colors">Solutions</Link></li>
                            <li><Link href={route('pricing.index')} className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Trust & Resources */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Resources</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href={route('trust.index')} className="text-gray-400 hover:text-white transition-colors">Trust Center</Link></li>
                            <li><Link href={route('resources.blog.index')} className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href={route('resources.case-studies.index')} className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
                            <li><Link href={route('resources.help-center')} className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Company & Legal */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href={route('company.about')} className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href={route('company.careers')} className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href={route('company.partners')} className="text-gray-400 hover:text-white transition-colors">Partners</Link></li>
                            <li><Link href={route('contact-us')} className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4">
                        <Link href={route('legal.terms')} className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
                        <Link href={route('legal.privacy')} className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
                        <Link href={route('legal.cookies')} className="text-sm text-gray-400 hover:text-white">Cookie Policy</Link>
                        <Link href={route('trust.sla')} className="text-sm text-gray-400 hover:text-white">SLA</Link>
                        <Link href={route('accessibility')} className="text-sm text-gray-400 hover:text-white">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}