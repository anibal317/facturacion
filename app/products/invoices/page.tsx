'use client'

import { useEffect } from 'react'
import MainFeatures from "@/components/features/MainFeatures";
import MainSection from "@/components/features/MainSection"
import PricingSection from "@/components/features/PricingSection";
import Contacto from '@/components/contact/Contacto';
import Layout from '@/components/layout/Layout';
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
                <Contacto />
            </section>
        </Layout>
    )
};
