'use client'

import { Feature } from "../../types/iconTypes";
import { FeatureCard } from "../featureCard/FeatureCard";
import { useEffect, useState } from "react";

export default function Benefits() {
  const [benefits, setBenefits] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/benefits?sec=home`);
        if (!response.ok) throw new Error("Error al cargar beneficios");
        const data = await response.json();
        setBenefits(data.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBenefits();
  }, []);

  if (loading) return (
    <section className="py-8 px-4">
      <div className="text-center">Cargando beneficios...</div>
    </section>
  );

  if (error) return (
    <section className="py-8 px-4">
      <div className="text-center text-red-500">Error: {error}</div>
    </section>
  );

  return (
    <section id="benefits" className="flex sm:flex-row flex-col scroll-smooth lg:h-[100svh] md:mt-32">
      <div className="mt-14 md:mt-20 mx-auto w-full max-w-7xl ">
        <h2 className="mb-6 text-4xl font-bold uppercase text-center text-[#1b2358] sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl">
          Nuestros Beneficios
        </h2>
        
        {benefits.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No hay beneficios disponibles actualmente
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-3 lg:gap-4 sm:grid-cols-2 sm:gap-6 flex flex-col items-center">
            {benefits.map((benefit, index) => (
              <div key={`benefit-${index}`} className="w-[90vw] lg:w-full my-2">
                <FeatureCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  isStrikethrough={benefit.isStrikethrough}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}