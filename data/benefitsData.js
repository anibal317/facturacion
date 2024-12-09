// benefitsData.js
import { CheckCircle, DollarSign, Unlock, XCircle } from 'lucide-react';

export const benefits = [
    {
        icon: <CheckCircle className="h-12 w-12 text-green-600" />,
        title: "Todo Incluido",
        description: "Los pagos mensuales incluyen todos nuestros servicios.",
    },
    {
        icon: (
            <div className="relative">
                <DollarSign className="h-12 w-12 text-yellow-600" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[140%] h-0.5 bg-red-500 rotate-45 transform origin-center"></div>
                </div>
            </div>
        ),
        title: "Sin costo extra",
        description: "No cobramos costos de licencias, actualizaciones ni mantenimiento.",
    },
    {
        icon: <Unlock className="h-12 w-12 text-blue-600" />,
        title: "Sin contratos",
        description: "No pedimos un periodo mínimo de permanencia.",
    },
    {
        icon: <XCircle className="h-12 w-12 text-red-600" />,
        title: "Sin ataduras",
        description: "Puedes cancelar el servicio cuando quieras.",
    },
];