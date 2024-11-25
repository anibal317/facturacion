'use client'
import Contacto from "../Contacto";


export default function page() {
    return (
        <div className="bg-gray-600 h-screen w-scree pt-16">
            <div className="rounded-sm mb-3 ml-[45%] h-[4%] w-[10%] bg-white flex items-center justify-center">
                <a href="./">Volver al Inicio</a>
            </div>

            <Contacto />
        </div>
    )
};
