import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MainFeature() {
    return (
        <section id="mainFeature" className="relative flex flex-col justify-center items-center p-12 h-screen text-center">
            <div className="absolute inset-0 bg-[url('/backgrounds/hexagon-pattern.svg')] bg-no-repeat-y w-screen" />
            <div className="relative flex flex-col justify-center items-center gap-4">

                <h1 className="mb-4 font-bold text-4xl">
                    Nuestro principal producto
                </h1>
                <h2 className="mb-4 text-2xl">
                    Order Flow es un software de facturación electrónica y gestión contable diseñado especialmente para pymes en Argentina.
                </h2>
                <p className="mb-4 text-md">
                    Emite tus facturas electrónicas ante la AFIP con facilidad: genera comprobantes sin límite, gestiona una cantidad limitada de clientes, administra un inventario ilimitado de productos, controla tu stock, crea listas de precios y actualiza precios de forma masiva, entre muchas opciones más.
                </p>
                <div className="flex justify-center">
                    <Link href="/products/invoices" className="bg-neutral-900 hover:bg-neutral-900/90 shadow px-4 py-2 rounded text-neutral-50">
                        Order Flow
                    </Link>
                </div>
            </div>
        </section>



    );
}