import React from 'react';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Product */}
                    <div>
                        <h3 className="font-bold mb-4">Product</h3>
                        <ul>
                            <li><Link href="/product" className="hover:text-blue-400">Overview</Link></li>
                            <li><Link href="/product/scheduling" className="hover:text-blue-400">Scheduling</Link></li>
                            <li><Link href="/product/ehr" className="hover:text-blue-400">EHR</Link></li>
                            <li><Link href="/product/billing" className="hover:text-blue-400">Billing</Link></li>
                            <li><Link href="/product/inventory" className="hover:text-blue-400">Inventory</Link></li>
                            <li><Link href="/product/oncology" className="hover:text-blue-400">Oncology</Link></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="font-bold mb-4">Solutions</h3>
                        <ul>
                            <li><Link href="/solutions/dentistry" className="hover:text-blue-400">Dentistry</Link></li>
                            <li><Link href="/solutions/oncology" className="hover:text-blue-400">Oncology</Link></li>
                            <li><Link href="/solutions/owner-ceo" className="hover:text-blue-400">For Owners</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-bold mb-4">Resources</h3>
                        <ul>
                            <li><Link href="/resources" className="hover:text-blue-400">Resources Hub</Link></li>
                            <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
                            <li><Link href="/case-studies" className="hover:text-blue-400">Case Studies</Link></li>
                            <li><Link href="/help" className="hover:text-blue-400">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-bold mb-4">Company</h3>
                        <ul>
                            <li><Link href="/company/about" className="hover:text-blue-400">About Us</Link></li>
                            <li><Link href="/company/careers" className="hover:text-blue-400">Careers</Link></li>
                            <li><Link href="/company/partners" className="hover:text-blue-400">Partners</Link></li>
                            <li><Link href="/contact-us" className="hover:text-blue-400">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Trust & Compliance */}
                    <div>
                        <h3 className="font-bold mb-4">Trust & Compliance</h3>
                        <ul>
                            <li><Link href="/trust" className="hover:text-blue-400">Trust Center</Link></li>
                            <li><Link href="/trust/hipaa" className="hover:text-blue-400">HIPAA</Link></li>
                            <li><Link href="/trust/security" className="hover:text-blue-400">Security</Link></li>
                            <li><Link href="/status" className="hover:text-blue-400">Status</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Sonamak. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="/legal/terms" className="hover:text-blue-400">Terms</Link>
                        <Link href="/legal/privacy" className="hover:text-blue-400">Privacy</Link>
                        <Link href="/legal/cookies" className="hover:text-blue-400">Cookies</Link>
                        <Link href="/accessibility" className="hover:text-blue-400">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}