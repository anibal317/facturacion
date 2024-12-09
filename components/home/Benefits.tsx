'use client'

import { Feature } from "../../types/iconTypes";
import benefits from "../../data/mainBenefits.json";
import { FeatureCard } from "../featureCard/FeatureCard";
import Image from 'next/image';

export default function Benefits() {
  return (
    <div id="benefits" className="relative py-16 lg:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/choices.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 mx-auto px-4 container">
        <h2 className="mb-12 font-bold text-3xl text-center text-white lg:text-4xl">Nuestros Beneficios</h2>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit: Feature, index) => (
            <FeatureCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              color={benefit.color}
              isStrikethrough={benefit.isStrikethrough}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

