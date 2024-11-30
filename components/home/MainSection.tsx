import { Button } from "@/components/ui/button"

export default function MainSection() {
  return (
    <section className="flex justify-center items-center bg-[#4e91e2] py-12 md:py-24 lg:py-32 xl:py-48 w-full text-white">
      <span className="sr-only">FacturaFácil</span>
      <div className="px-4 md:px-6 h-full container">
        <div className="flex flex-col items-center space-y-4 w-full text-center">
          <div className="space-y-2">
            <h1 className="font-bold text-3xl text-black sm:text-4xl md:text-5xl lg:text-6xl/none tracking-tighter">
              Order Flow
            </h1>
            <p className="mx-auto max-w-[700px]">
              Simplifica tu proceso de facturación con nuestro sistema intuitivo y potente.
            </p>
          </div>
          <Button>Prueba Gratis</Button>
          <div className="space-x-4">
            <article className="flex items-start text-left">
              <ul className="list-disc">
                <h1 className="text-[2rem]">Principales caracteristicas:</h1>
                <li className="">Guardá clientes y productos sin límites.</li>
                <li className="">Cree fácil facturas digitales, electrónicas</li>
                <li className="">Verifica el stock en tiempo real</li>
                <li className="">Lleva el cuenta corriente de cliente y provedores</li>
                <li className="">Aumenta el precio de tus productos de forma masiva</li>
                <li className="">Genere libro de iva rapidamente</li>
                <li className="">Revise estadisticas se su Empresa</li>
                <li className="">Gestion de cajas</li>
                <li className="">Importacion y exportacion de productos y clientes</li>
                <li className="">Genere presupuestos</li>
                <li className="">Maneje deferentes listas de precios</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
};
