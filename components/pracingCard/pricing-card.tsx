import { Check, Crown, Info, X } from 'lucide-react';
import { PricingPlan } from "@/types/pricing";
import Modal from "../modal/Modal";
import { useState } from "react";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const modalContent = (
    <div className="space-y-4">
      <p className="font-semibold text-lg">Características del plan:</p>
      <ul className="space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            {feature.isPremium ? (
              <X className="flex-shrink-0 mt-0.5 w-5 h-5 text-red-500" />
            ) : (
              <Check className="flex-shrink-0 mt-0.5 w-5 h-5 text-[#4CAF50]" />
            )}
            <div className="flex-1">
              <span className="text-gray-600">
                {feature.text}{" "}
                {feature.savings !== null && feature.savings !== undefined && (
                  <span className="ml-1 text-gray-400 text-sm">
                    (ahorrá: {feature.savings})
                  </span>
                )}
              </span>
            </div>
            {feature.hasInfo && <Info className="flex-shrink-0 mt-0.5 w-4 h-4 text-blue-600" />}
          </li>
        ))}
      </ul>
      <p className="mt-4">
        Precio: $
        {(plan.discountedPrice || plan.originalPrice).toLocaleString()}/mes
        {plan.discount && (
          <span className="ml-2 font-semibold text-green-600">{plan.discount}% de descuento</span>
        )}
      </p>
      {plan.freeMonths && (
        <p className="font-semibold text-blue-600">Incluye {plan.freeMonths} meses GRATIS</p>
      )}
      <p className="text-gray-600">
        Puntos de venta: {plan.purchasePoints}
      </p>
    </div>
  );

  return (
    <div
      className={`border-2 ${
        plan.isRecommended ? "bg-gray-600" : "bg-white"
      } border-blue-600 rounded-lg w-[370px] overflow-hidden`}
    >
      {plan.isRecommended ? (
        <div className="flex justify-between items-center bg-[#007bff] px-4 py-1 text-white recommended-badge">
          <span className="font-semibold">MÁS ELEGIDO</span>
          <Crown className="ml-1 w-5 h-5" />
        </div>
      ):(
        <div className='bg-white h-[30px]'></div>
      )}
      <div className={`p-6 ${plan.isRecommended ? "bg-gray-600 text-white" : "bg-white"}`}>
        <div className="mb-6 text-center">
          <h2 className={`text-xl font-bold ${plan.isRecommended ? "text-white" : "text-gray-600"}`}>
            {plan.title}
          </h2>
          {plan.subtitle && (
            <h3 className={`font-bold text-2xl ${plan.isRecommended ? "text-white" : ""}`}>
              {plan.subtitle}
            </h3>
          )}
        </div>
        <div className="mb-6 text-center">
          <span className="font-bold text-4xl">
            ${(plan.discountedPrice || plan.originalPrice).toLocaleString()}
          </span>
        </div>
        <ul className="space-y-4 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              {feature.isPremium ? (
                <X className="flex-shrink-0 mt-0.5 w-5 h-5 text-red-500" />
              ) : (
                <Check className="flex-shrink-0 mt-0.5 w-5 h-5 text-[#4CAF50]" />
              )}
              <div className="flex-1">
                <span className={`${plan.isRecommended ? "text-white" : "text-gray-600"}`}>
                  {feature.text}
                  {feature.savings !== null && feature.savings !== undefined && (
                    <span className="ml-1 text-gray-400 text-sm">
                      (ahorrá: {feature.savings})
                    </span>
                  )}
                </span>
              </div>
              {feature.hasInfo && <Info className="flex-shrink-0 mt-0.5 w-4 h-4 text-blue-600" />}
            </li>
          ))}
        </ul>
        <div className="mb-6">
          <span className={`${plan.isRecommended ? "text-white" : "text-gray-600"}`}>
            Puntos de venta: {typeof plan.purchasePoints === 'number' ? plan.purchasePoints : plan.purchasePoints}
          </span>
        </div>
        <button
          onClick={handleOpenModal}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md w-full text-white"
        >
          Continuar
        </button>
        <Modal isOpen={showModal} onClose={handleCloseModal} title={`Detalles del plan ${plan.title}`} content={modalContent} />
      </div>
    </div>
  );
}

