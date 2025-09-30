import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

// Product Overview Page Sections
import ProductHero from '@/Components/Product/ProductHero';
import PlatformPillars from '@/Components/Product/PlatformPillars';
import AllModulesGrid from '@/Components/Product/AllModulesGrid';
import KeyCapabilities from '@/Components/Product/KeyCapabilities';
import RoleJourneys from '@/Components/Product/RoleJourneys';
import ProductGallery from '@/Components/Product/ProductGallery';

export default function ProductIndex() {
    return (
        <>
            <Head title="Product Overview" />

            <ProductHero />
            <PlatformPillars />
            <AllModulesGrid />
            <KeyCapabilities />
            <RoleJourneys />
            <ProductGallery />

            {/* A final CTA could be added here, similar to the homepage */}
        </>
    );
}

ProductIndex.layout = page => <MainLayout children={page} />;