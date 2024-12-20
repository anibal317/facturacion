'use client'

import { useEffect } from 'react'
import MainFeatures from "@/components/features/MainFeatures";
import MainSection from "@/components/features/MainSection"
import PricingSection from "@/components/features/PricingSection";
import Contacto from '@/components/contact/Contacto';
import Layout from '@/components/layout/Layout';
import Whatsapp from '@/components/Whatsapp/Whatsapp';
import Faqs from '@/components/faqs/Faqs';
import FeatureSection from '@/components/featureSection/FeatureSection';
export default function page() {
    useEffect(() => {
        // Aplicar la clase scroll-smooth al elemento html
        document.documentElement.classList.add('scroll-smooth')
    }, [])
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
            <Whatsapp phoneNumber="2314405020" positionX="40px" positionY="50px" />

        </Layout>
    )
};
