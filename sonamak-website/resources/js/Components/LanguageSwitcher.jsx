import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function LanguageSwitcher() {
    const { locales, currentLocale, currentUrl } = usePage().props;

    const getLocalizedUrl = (locale) => {
        const newUrl = new URL(currentUrl);
        const pathSegments = newUrl.pathname.split('/').filter(Boolean);

        // If the first segment is a supported locale, remove it
        if (locales[pathSegments[0]]) {
            pathSegments.shift();
        }

        // Add the new locale prefix if it's not the default
        if (locale !== 'en') { // Assuming 'en' is the default
            pathSegments.unshift(locale);
        }

        newUrl.pathname = pathSegments.join('/');
        return newUrl.href;
    };

    return (
        <div className="flex items-center space-x-4">
            {Object.keys(locales).map((locale) => (
                <Link
                    key={locale}
                    href={getLocalizedUrl(locale)}
                    className={`text-sm font-medium ${currentLocale === locale ? 'text-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    {locales[locale].native}
                </Link>
            ))}
        </div>
    );
}