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
        if (!response.ok) {
          throw new Error("Error fetching benefits");
        }
        const data = await response.json();
        setBenefits(data.data); // Asumiendo que el endpoint devuelve un array de beneficios
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBenefits();
  }, []);

  if (loading) return <div className="text-center">Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section id="benefits" className="relative flex flex-col justify-center items-center py-16 lg:py-24">
      <div className="absolute inset-0 bg-[url('/backgrounds/circuit-board.svg')] bg-no-repeat-y w-full h-full" />
      <div className="relative mx-auto px-4 container">

        <h2 className="mb-12 font-bold text-3xl text-center lg:text-4xl">Nuestros Beneficios</h2>
        <div className="justify-center items-center gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((benefit: Feature, index) => (
            <FeatureCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              isStrikethrough={benefit.isStrikethrough}
              className="hover:bg-opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}