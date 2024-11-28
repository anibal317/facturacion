import { Check, Crown, Info, X } from 'lucide-react';
import { PricingPlan } from "../../types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className={`border-2 ${plan.isRecommended?'bg-gray-600':'bg-white'} border-blue-600 rounded-lg w-[300px] overflow-hidden`}>
      {/* {plan.isRecommended && (
        <div className="flex justify-between items-center bg-[#FF5C00] px-4 py-1 text-white recommended-badge">
          <span className="font-semibold">MÁS ELEGIDO</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-lg text-white">★</span>
            ))}
            <Crown className="ml-1 w-5 h-5" />
          </div>
        </div>
      )} */}

      <div className={`p-6 ${plan.isRecommended?'bg-gray-600 text-white':'bg-white'}`}>
        <div className="mb-6 text-center">
          <h2 className={`${plan.isRecommended?'bg-gray-600 text-white':'bg-white'} text-gray-600 text-xl`}>{plan.title}</h2>
          <h3 className={`${plan.isRecommended?'bg-gray-600 text-white':'bg-white'} font-bold text-2xl`}>{plan.subtitle}</h3>
          <p className={`${plan.isRecommended?'bg-gray-600 text-white':'bg-white'} mt-2 text-gray-600 text-sm`}>
            Recursos potentes para<br />impulsar tu expansión
          </p>
        </div>

        <div className="mb-6 text-center">
          {plan.discount && plan.discountedPrice && (
            <div className="flex justify-center items-center gap-2">
              <span className={`${plan.isRecommended?'bg-gray-600 text-white':'bg-white'} text-gray-400 line-through`}>${plan.originalPrice.toLocaleString()}</span>
              <span className={`${plan.isRecommended?'bg-gray-600 text-white':'bg-white'}  px-2 py-1 rounded-full font-bold `}>
                {plan.discount}% OFF
              </span>
            </div>
          )}
          <div className="flex justify-center items-baseline mt-2">
            <span className={`${plan.isRecommended?'bg-gray-600 text-yellow-500':'bg-white text-blue-600'} font-bold text-4xl`}>
              ${(plan.discountedPrice || plan.originalPrice).toLocaleString()}
            </span>
            <span className={`${plan.isRecommended?'bg-gray-600 text-yellow-500':'bg-white'} ml-1 text-gray-600`}>/mes</span>
          </div>
          {plan.freeMonths && (
            <div className="mt-2 font-semibold text-blue-600">
              Incluye GRATIS {plan.freeMonths} MESES
            </div>
          )}
        </div>

        <button className="bg-[#4CAF50] hover:bg-[#45a049] mb-6 py-3 rounded-lg w-full font-bold text-white">
          CONTINUAR
        </button>

        <ul className={`space-y-4`}>
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              {feature.isPremium ? (
                <X className="flex-shrink-0 mt-0.5 w-5 h-5 text-red-500" />
              ) : (
                <Check className="flex-shrink-0 mt-0.5 w-5 h-5 text-[#4CAF50]" />
              )}
              <div className="flex-1">
                <span className={`${plan.isRecommended?'bg-gray-600 text-white':'bg-white'} text-gray-600`}>
                  {feature.text} {feature.savings && (
                    <span className="ml-1 text-gray-400 text-sm">
                      (ahorrá: {feature.savings})
                    </span>
                  )}
                </span>
              </div>
              {feature.hasInfo && <Info className={`${plan.isRecommended?'bg-gray-600 text-white':'bg-white'} flex-shrink-0 mt-0.5 w-4 h-4 text-blue-600`} />}
            </li>
          ))}
        </ul>

        {/* <button className="mt-6 w-full font-semibold text-blue-600 text-sm">
          Ver todas las características
        </button> */}
      </div>
    </div>
  );
}