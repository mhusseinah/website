import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

// Homepage Sections
import Hero from '@/Components/Homepage/Hero';
import CredibilityRibbon from '@/Components/Homepage/CredibilityRibbon';
import ValueCards from '@/Components/Homepage/ValueCards';
import ModulesGrid from '@/Components/Homepage/ModulesGrid';
import Outcomes from '@/Components/Homepage/Outcomes';
import SecurityCompliance from '@/Components/Homepage/SecurityCompliance';
import SpecialtySolutions from '@/Components/Homepage/SpecialtySolutions';
import Integrations from '@/Components/Homepage/Integrations';
import Testimonials from '@/Components/Homepage/Testimonials';
import Faq from '@/Components/Homepage/Faq';
import FinalCtaBand from '@/Components/Homepage/FinalCtaBand';

export default function Welcome() {
    return (
        <MainLayout>
            <Head title="Clinic Management ERP for Multi-Branch Practices" />

            {/* Page Sections */}
            <Hero />
            <CredibilityRibbon />
            <ValueCards />
            <ModulesGrid />
            <Outcomes />
            <SecurityCompliance />
            <SpecialtySolutions />
            <Integrations />
            <Testimonials />
            <Faq />
            <FinalCtaBand />
        </MainLayout>
    );
}