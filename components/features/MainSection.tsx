import { Clock } from "lucide-react";
import Image from "next/image";

export default function MainSection() {
  return (
    <section id="orderFlow" className="scroll-smooth w-full lg:h-[100vh] bg-[#171f55] text-white flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-full">
        <article className="hidden lg:block">
          <Image
            src="/orderFlow.png"
            alt="Order Flow"
            width={20}
            height={20} // Adjust height based on width
            className="h-[40rem] w-[40rem] lg:h-[40rem] lg:w-[40rem]"
          />
        </article>
        <article className="flex flex-col max-w-[85%] lg:max-w-[55%] mt-2 mb-2 lg:mr-10 justify-center items-center">
          <h1 className="font-bold text-6xl text-center sm:text-xl md:text-5xl lg:text-6xl/none tracking-tighter uppercase">
            Order Flow
          </h1>
          <p className="text-3xl text-center">
            Simplifica tu proceso de facturación con nuestro sistema intuitivo y potente.
          </p>
          <div className="space-x-4 mt-4">
            <h1 className="text-[2rem] text-[#4eaae1] uppercase font-bold text-center">Características Principales</h1>
            <article className="flex flex-col items-start text-left">
              <aside>

                <ul className="list-disc">
                  <li className="">Facturación Electrónica</li>
                  <li className="">Guardá clientes y productos sin límites.</li>
                  <li className="">Cree fácil facturas digitales, electrónicas</li>
                  <li className="">Verifica el stock en tiempo real</li>
                  <li className="">Lleva el cuenta corriente de cliente y provedores</li>
                  <li className="">Maneje deferentes listas de precios</li>
                </ul>
                <ul className="list-disc mt-4">
                  <li className="">Aumenta el precio de tus productos de forma masiva</li>
                  <li className="">Genere libro de iva rapidamente</li>
                  <li className="">Revise estadisticas se su Empresa</li>
                  <li className="">Gestion de cajas</li>
                  <li className="">Importacion y exportacion de productos y clientes</li>
                  <li className="">Genere presupuestos</li>
                </ul>
              </aside>
            </article>
          </div>

        </article>
      </div>

      <article className="max-w-[90%] flex flex-col lg:flex-row justify-center items-center mt-4 mb-4 pl-2">
        <aside className="flex justify-center items-center mb-4">
          <Image
            src="../signal.png"
            width={10}
            height={10}
            className="w-[2rem] h-[2rem] lg:w-[5rem] lg:h-[5rem] mr-2"
            alt="" />
          <div className="flex flex-col justify-center">
            <h1 className="text-[1rem] lg:text-[2rem] uppercase font-bold">
              INFORMES DETALLADOS
            </h1>
            <p className="text-[1rem] lg:text-[1.5rem]">Genera informes completos para un mejor control de tus finanzas.</p>
          </div>
        </aside>
        <aside className="flex lg:ml-10 justify-center items-center">
          <Clock className="w-[3rem] h-[3rem] lg:w-[7rem] lg:h-[7rem] mr-2" />
          <div className="flex flex-col justify-center">
            <h1 className="text-[1rem] lg:text-[2rem] uppercase font-bold">
              AHORRO DE TIEMPO
            </h1>
            <p className="text-[1rem] lg:text-[1.5rem]">Automatiza tus procesos de facturación y ahorrá horas cada mes.</p>
          </div>
        </aside>
      </article>
    </section >
  )
};
