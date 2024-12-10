import { Feature } from "../../types/iconTypes";
import featuresData from "../../data/benefitsData.json";
import { FeatureCard } from "../featureCard/FeatureCard";

export default function MainFeatures() {
  const features: Feature[] = featuresData as Feature[];

  if (features.length === 0) {
    console.error("No se encontraron características en mainBenefits.json");
    return null;
  }

  return (
    <div id="caracteristicas" className="bg-[#72a9e8] dark:bg-gray-800 py-12 md:py-24 lg:py-32">
      <div className="mx-auto px-4 container">
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
    </div>
  );
}

