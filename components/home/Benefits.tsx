// Benefits.js
'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { benefits } from '../../data/benefitsData'; // Asegúrate de que la ruta sea correcta

export default function Benefits() {
    return (
        <section id="benefits" className="relative py-16 lg:py-24">
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="./choices.webp"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            <div className="relative z-10 mx-auto px-4 container">
                <h2 className="mb-12 font-bold text-3xl text-center text-white lg:text-4xl">Nuestros Beneficios</h2>
                <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="bg-white bg-opacity-90 hover:bg-opacity-100 transition-all duration-300">
                            <CardHeader>
                                <div className="flex justify-center">{benefit.icon}</div>
                                <CardTitle className="text-center text-gray-800 text-xl">
                                    {benefit.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-gray-600">{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}