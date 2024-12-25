import { Feature } from "../../types/iconTypes";
import { FeatureCard } from "../featureCard/FeatureCard";
import { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";

export default function MainFeatures() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/benefits?sec=feature`);
        if (!response.ok) {
          throw new Error("Error fetching features");
        }
        const data = await response.json();
        setFeatures(data.data); // Asumiendo que el endpoint devuelve un array de características
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  if (features.length === 0) {
    console.error("No se encontraron características en el endpoint");
    return null;
  }

  return (
    <section id="caracteristicas" className="relative py-12 md:py-24 lg:py-32 w-full h-screen">
      <div className="absolute inset-0 bg-[url('/backgrounds/circuit-board.svg')] bg-cover bg-no-repeat-y" />

      <div className="relative mx-auto px-4 container">
        <h2 className="mb-12 font-bold text-3xl text-center sm:text-5xl tracking-tighter">Características Principales</h2>
        <div className="gap-6 lg:gap-12 grid md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              isStrikethrough={feature.isStrikethrough}
            />
          ))}
        </div>
      </div>
    </section>
  );
}