import plansData from "@/data/plans.json";
import { PricingPlan } from "@/types/pricing";
import { PricingCard } from "../pracingCard/pricing-card";

export default function PricingSection() {
  
  return (
    <section id="precios" className="flex justify-center bg-[#cbd1d7] py-12 md:py-24 lg:py-20">
      <div className="flex flex-wrap justify-center gap-8">
        {plansData.plans.map((plan: PricingPlan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}
