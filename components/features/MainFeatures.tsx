import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BarChart, Clock } from "lucide-react"


export default function MainFeatures() {
  return (
    <section id="caracteristicas" className="h-screen py-12 md:py-24 lg:py-32 bg-[#72a9e8] dark:bg-gray-800 flex justify-center items-center">
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
  )
};
