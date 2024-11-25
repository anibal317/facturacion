'use client'
import { Button } from "@/components/ui/button"
import plansData from "@/data/plans.json"
import { PricingPlan } from "@/types/pricing"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BarChart, Clock, ReceiptIcon } from "lucide-react"

import Contacto from "./Contacto";
import { PricingCard } from "@/components/pracingCard/pricing-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <span className="sr-only">FacturaFácil</span>
      <main className="flex flex-col min-w-screen">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center items-center">
          <div className="container px-4 md:px-6 w-full">
            <div className="flex flex-col items-center space-y-4 text-center w-full">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Facturación Simple
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Simplifica tu proceso de facturación con nuestro sistema intuitivo y potente.
                </p>
              </div>
              <Button>Prueba Gratis</Button>
              <div className="space-x-4">
                <article className="flex items-start text-left">
                  <ul className=" list-disc">
                    <h1 className="text-[2rem]">Principales caracteristicas:</h1>
                    <li className="">Guardá clientes y productos sin límites.</li>
                    <li className="">Cree fácil facturas digitales, electrónicas</li>
                    <li className="">Verifica el stock en tiempo real</li>
                    <li className="">Lleva el cuenta corriente de cliente y provedores</li>
                    <li className="">Aumenta el precio de tus productos de forma masiva</li>
                    <li className="">Genere libro de iva rapidamente</li>
                    <li className="">Revise estadisticas se su Empresa</li>
                    <li className="">Gestion de cajas</li>
                    <li className="">Importacion y exportacion de productos y clientes</li>
                    <li className="">Genere presupuestos</li>
                    <li className="">Maneje deferentes listas de precios</li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section id="caracteristicas" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Características Principales</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
                  <CardTitle>Fácil de Usar</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Interfaz intuitiva que se integra perfectamente con WordPress.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart className="w-10 h-10 text-blue-500 mb-4" />
                  <CardTitle>Informes Detallados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Genera informes completos para un mejor control de tus finanzas.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="w-10 h-10 text-purple-500 mb-4" />
                  <CardTitle>Ahorro de Tiempo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Automatiza tus procesos de facturación y ahorra horas cada mes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="precios" className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
          <div className="flex flex-wrap gap-8 justify-center">
            {plansData.plans.map((plan: PricingPlan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
          <Contacto />
        </section>
      </main>
    </div>
  )
}
