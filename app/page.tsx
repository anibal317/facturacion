'use client'
import { useEffect } from 'react'
import MainFeatures from "@/components/home/MainFeatures";
import MainSection from "@/components/home/MainSection"
import Contacto from "./Contacto";
import PricingSection from "@/components/home/PricingSection";

export default function Home() {
  useEffect(() => {
    // Aplicar la clase scroll-smooth al elemento html
    document.documentElement.classList.add('scroll-smooth')
  }, [])
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col min-w-screen">
        <MainSection />
        <MainFeatures />
        <PricingSection/>
        <Contacto />
      </main>
    </div>
  )
}
