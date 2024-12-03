'use client'

import { useEffect } from 'react'
import MainFeatures from "@/components/features/MainFeatures";
import MainSection from "@/components/features/MainSection"
import Contacto from "../../../components/contact/Contacto";
import PricingSection from "@/components/features/PricingSection";
export default function page() {
    useEffect(() => {
        // Aplicar la clase scroll-smooth al elemento html
        document.documentElement.classList.add('scroll-smooth')
    }, [])
    return (
        <section>
            <MainSection />
            <MainFeatures />
            <PricingSection />
            <Contacto />
        </section>
    )
};
