export default function MainSection() {
  return (
    <section id="orderFlow" className="relative flex justify-center items-center py-12 md:py-24 lg:py-32 xl:py-48 pt-64 h-screen">
      <div className="relative mx-auto px-4 container">

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
            <div className="border- border-[#303F9F] border-t-2 w-3/4"></div>
            <div className="space-x-4">
              <h1 className="text-[2rem]">Principales caracteristicas:</h1>
              <article className="flex flex-col items-start text-left">
                <aside className="gap-16 grid grid-cols-2 pt-6">

                  <ul className="space-y-3 list-disc">
                    <li className="">Facturación Electrónica</li>
                    <li className="">Guardá clientes y productos sin límites.</li>
                    <li className="">Cree fácil facturas digitales, electrónicas</li>
                    <li className="">Verifica el stock en tiempo real</li>
                    <li className="">Lleva el cuenta corriente de cliente y provedores</li>
                    <li className="">Maneje deferentes listas de precios</li>
                  </ul>
                  <ul className="space-y-3 list-disc">
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
          </div>
        </div>
      </div>
    </section>
  )
};
