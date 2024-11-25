import plansData from "@/data/plans.json"
import { PricingPlan } from "@/types/pricing"
import { PricingCard } from "@/components/pracingCard/pricing-card"

export default function PricingSection() {
    return (
        <section id="precios" className="h-screen py-12 md:py-24 lg:py-32 flex justify-center items-center bg-[#cbd1d7]">
          <div className="flex flex-wrap gap-8 justify-center ">
            {plansData.plans.map((plan: PricingPlan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </section>
    )
};
