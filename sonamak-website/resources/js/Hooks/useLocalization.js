import { usePage } from '@inertiajs/react';

export default function useLocalization() {
    const { locale, translations } = usePage().props;

    /**
     * Translate the given key.
     */
    const trans = (key) => {
        return translations[key] || key;
    };

    return {
        trans,
        locale,
        isRtl: locale === 'ar',
    };
}