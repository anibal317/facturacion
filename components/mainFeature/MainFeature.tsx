import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MainFeature() {
    return (
        <section id="mainFeature" className="flex flex-col justify-center items-center gap-4 bg-gray-100 p-6 pt-12 h-96">
            <h1 className="mb-4 font-bold text-2xl">
                Nuestro principal producto
            </h1>
            <h2 className="mb-4 text-xl">
                Order Flow es un software de facturación electrónica y gestión contable diseñado especialmente para pymes en Argentina.
            </h2>
            <p className="mb-4">
                Emite tus facturas electrónicas ante la AFIP con facilidad: genera comprobantes sin límite, gestiona una cantidad limitada de clientes, administra un inventario ilimitado de productos, controla tu stock, crea listas de precios y actualiza precios de forma masiva, entre muchas opciones más.
            </p>
            <div className="flex justify-center">
                <Link href="/products/invoices" className="bg-neutral-900 hover:bg-neutral-900/90 shadow px-4 py-2 rounded text-neutral-50">
                    Order Flow
                </Link>
            </div>
        </section>



    );
}