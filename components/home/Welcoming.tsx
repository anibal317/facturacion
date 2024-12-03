export default function Welcoming() {
    return (
        <section className="scroll-smooth" id="welcoming">
            <div className="relative flex justify-center items-center w-full h-screen overflow-hidden">
                <img
                    src="./aboutUs.webp"
                    alt="About Us"
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <p className="relative z-10 px-4 max-w-8xl text-center text-lg text-white md:text-xl lg:text-5xl">
                    Order Flow es un software de facturación electrónica y gestión contable diseñado especialmente para pymes en Argentina.
                </p>
            </div>
            <div id="actions" className="relative flex justify-center items-center w-full h-[900px] overflow-hidden">
                <img
                    src="./invoicesHome.webp"
                    alt="About Us"
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <p className="relative z-10 px-4 max-w-8xl text-center text-lg text-white text-wrap md:text-xl lg:text-5xl">
                    Emite tus facturas electrónicas ante la AFIP con facilidad: genera comprobantes sin límite, gestiona una cantidad limitada de clientes, administra un inventario ilimitado de productos, controla tu stock, crea listas de precios y actualiza precios de forma masiva, entre muchas opciones mas.
                </p>
            </div>
        </section>
    )
};
