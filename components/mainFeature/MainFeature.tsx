import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MainFeature() {
    return (
        <section id="mainFeature" className="flex sm:flex-row flex-col scroll-smooth h-[100svh] md:mt-32 mt-14">
            <div className=" flex flex-col justify-center items-center gap-4 mx-10 text-center">
                <h1 className="mb-6 text-4xl font-bold uppercase text-center text-[#3b73c2] sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl">
                    PRODUCTO ESTRELLA
                </h1>
                <h2 className="mb-4 text-3xl text-[#1f2358] font-bold">
                    Order Flow es un software de facturación electrónica y gestión contable diseñado especialmente para pymes en Argentina.
                </h2>
                <p className="mb-4 text-2xl">
                    Emite tus facturas electrónicas ante la AFIP con facilidad: genera comprobantes sin límite, gestiona una cantidad limitada de clientes, administra un inventario ilimitado de productos, controla tu stock, crea listas de precios y actualiza precios de forma masiva, entre muchas opciones más.
                </p>
                <Link href="/products/invoices"
                    className="h-[200px] w-[400px] bg-[#171f55] py-28 rounded-[4%] flex justify-center items-center hover:bg-[#3b73c2] transition-colors duration-300">
                    <div className="flex h-full justify-center items-center">
                        <span className=" text-white font-bold text-8xl">Order Flow</span>
                    </div>
                </Link>
            </div>
        </section >
    );
}