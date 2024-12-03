'use client'
import Contacto from "../../components/contact/Contacto";


export default function page() {
    return (
        <div className="bg-gray-600 pt-16 w-scree h-screen">
            <div className="flex justify-center items-center bg-white mb-3 ml-[45%] rounded-sm w-[10%] h-[4%]">
                <a href="./">Volver al Inicio</a>
            </div>

            <Contacto />
        </div>
    )
};
