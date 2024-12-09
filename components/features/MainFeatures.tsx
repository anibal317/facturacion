import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BarChart, Clock, Headphones,PieChart } from "lucide-react";
import { Feature } from "../../types/iconTypes";
import data from "../../data/mainFeatures.json"; // Asegúrate de usar la ruta correcta

// Cambia el tipo de iconMap para aceptar props de SVG
const iconMap: Record<Feature['icon'], React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    CheckCircle,
    BarChart,
    Clock,
    Headphones,  
    PieChart,    
};

export default function MainFeatures() {
    const features: Feature[] = data as Feature[]; // O usa la validación

    return (
        <section id="caracteristicas" className="flex justify-center items-center bg-[#72a9e8] dark:bg-gray-800 py-12 md:py-24 lg:py-32 h-screen">
            <div className="px-4 md:px-6 container">
                <h2 className="mb-12 font-bold text-3xl text-center sm:text-5xl tracking-tighter">Características Principales</h2>
                <div className="gap-6 lg:gap-12 grid lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon]; // TypeScript ahora sabe que feature.icon es un icono válido
                        return (
                            <Card key={index}>
                                <CardHeader>
                                    <IconComponent className={`w-10 h-10 ${feature.color} mb-4`} />
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{feature.description}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}