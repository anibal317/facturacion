import { Check, Crown, Info } from 'lucide-react'
import { PricingPlan } from "../../types/pricing"

interface PricingCardProps {
  plan: PricingPlan
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className="w-[300px] rounded-lg border-2 border-blue-600 bg-white overflow-hidden">
      {plan.isRecommended && (
        <div className="bg-[#FF5C00] text-white px-4 py-1 flex items-center justify-between">
          <span className="font-semibold">MÁS ELEGIDO</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-white text-lg">★</span>
            ))}
            <Crown className="w-5 h-5 ml-1" />
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-gray-600 text-xl">{plan.title}</h2>
          <h3 className="text-2xl font-bold">{plan.subtitle}</h3>
          <p className="text-sm text-gray-600 mt-2">
            Recursos potentes para<br />impulsar tu expansión
          </p>
        </div>

        <div className="text-center mb-6">
          {plan.discount && plan.discountedPrice && (
            <div className="flex items-center justify-center gap-2">
              <span className="text-gray-400 line-through">${plan.originalPrice.toLocaleString()}</span>
              <span className="text-blue-600 font-bold px-2 py-1 rounded-full bg-blue-100">
                {plan.discount}% OFF
              </span>
            </div>
          )}
          <div className="flex items-baseline justify-center mt-2">
            <span className="text-blue-600 text-4xl font-bold">
              ${(plan.discountedPrice || plan.originalPrice).toLocaleString()}
            </span>
            <span className="text-gray-600 ml-1">/mes</span>
          </div>
          {plan.freeMonths && (
            <div className="text-blue-600 font-semibold mt-2">
              Incluye GRATIS {plan.freeMonths} MESES
            </div>
          )}
        </div>

        <button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-3 rounded-lg mb-6">
          CONTINUAR
        </button>

        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="text-gray-600">
                  {feature.text}
                  {feature.isPremium && (
                    <Crown className="w-4 h-4 text-yellow-500 inline ml-1" />
                  )}
                </span>
                {feature.savings && (
                  <span className="text-gray-400 text-sm ml-1">
                    (ahorrá: {feature.savings})
                  </span>
                )}
              </div>
              {feature.hasInfo && (
                <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              )}
            </li>
          ))}
        </ul>

        <button className="w-full text-blue-600 text-sm font-semibold mt-6">
          Ver todas las características
        </button>
      </div>
    </div>
  )
}

