'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BarChart, Clock, DollarSign, ReceiptIcon } from "lucide-react"

import Link from "next/link";
import Contacto from "./Contacto";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <ReceiptIcon className="h-6 w-6" />
          <span className="sr-only">FacturaFácil</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 ">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#caracteristicas">
            Características
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#precios">
            Precios
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contacto">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex flex-col min-w-screen">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center items-center">
          <div className="container px-4 md:px-6 w-full">
            <div className="flex flex-col items-center space-y-4 text-center w-full">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Facturación Simple
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Simplifica tu proceso de facturación con nuestro plugin intuitivo y potente.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Prueba Gratis</Button>
                <Button variant="outline">Más Información</Button>
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
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Planes de Precios</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Básico</CardTitle>
                  <CardDescription>Para pequeños negocios</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">$19/mes</div>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" /> Hasta 100 facturas/mes</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" /> Soporte por email</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" /> Informes básicos</li>
                  </ul>
                  <Button className="w-full mt-6">Elegir Plan</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Para negocios en crecimiento</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">$49/mes</div>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" /> Facturas ilimitadas</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" /> Soporte prioritario</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" /> Informes avanzados</li>
                  </ul>
                  <Button className="w-full mt-6">Elegir Plan</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Empresarial</CardTitle>
                  <CardDescription>Para grandes empresas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">$99/mes</div>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" /> Facturas ilimitadas</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" /> Soporte 24/7</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" /> API personalizada</li>
                  </ul>
                  <Button className="w-full mt-6">Elegir Plan</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
          <Contacto />
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 FacturaFácil. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}
