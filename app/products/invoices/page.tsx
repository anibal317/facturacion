'use client'

import { useEffect } from 'react'
import MainFeatures from "@/components/home/MainFeatures";
import MainSection from "@/components/home/MainSection"
import Contacto from "../../Contacto";
import PricingSection from "@/components/home/PricingSection";
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
