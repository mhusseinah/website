import React, { useEffect } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import useLocalization from '@/Hooks/useLocalization';

export default function MainLayout({ children }) {
    const { locale, isRtl } = useLocalization();

    useEffect(() => {
        document.documentElement.lang = locale;
        document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    }, [locale, isRtl]);

    return (
        <div key={locale} className="min-h-screen bg-gray-100">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}