'use client'

import { useEffect } from 'react'
import MainFeatures from "@/components/features/MainFeatures";
import MainSection from "@/components/features/MainSection"
import PricingSection from "@/components/features/PricingSection";
import Contacto from '@/components/contact/Contacto';
import Layout from '@/components/layout/Layout';
import Faqs from '@/components/faqs/Faqs';
import FeatureSection from '@/components/featureSection/FeatureSection';
import OnTop from '@/components/onTop/onTop';

export default function Page() {
    useEffect(() => {
        // Aplicar la clase scroll-smooth al elemento html
        document.documentElement.classList.add('scroll-smooth')
        document.documentElement.classList.add('overflow-x-hidden')

        // Verificar si hay un hash en la URL
        const hash = window.location.hash;
        if (hash === '#precios') {
            // Esperar a que los componentes se monten
            setTimeout(() => {
                const preciosSection = document.getElementById('precios');
                if (preciosSection) {
                    preciosSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);

    return (
        <Layout variant='feature'>
            <section>
                <MainSection />
                <MainFeatures />
                <PricingSection />
                <FeatureSection />
                <Faqs />
                <Contacto />
            </section>
            <OnTop positionX="3rem" positionY="3rem" showThreshold={100} />
        </Layout>
    )
};
