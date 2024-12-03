export default function Benefits() {
    return (
        <section className="relative flex justify-center items-center w-full h-screen overflow-hidden">
            <img
                src="./choices.webp"
                alt="About Us"
                className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <article className="flex gap-3 mr-2 ml-2 w-screen h-[250px]">

                <div className="relative z-10 flex flex-col bg-[#ffffff] bg-opacity-50 shadow-xl pt-2 rounded-2xl w-1/4">

                    <figure className="flex justify-center items-center rounded-2xl">
                        <img src="./checkList.png" alt="Card Preview" className="rounded-t-2xl w-24 h-auto" />
                    </figure>
                    <div className="flex flex-col justify-center p-4">
                        <div className="pb-6 font-bold text-[#374151] text-2xl">Todo Incluido</div>
                        <div className="text-[#374151] text-lg">Los pagos mensuales incluyen todos nuestros serviciox.</div>
                    </div>
                </div>
                <div className="relative z-10 flex flex-col bg-[#ffffff] bg-opacity-50 shadow-xl pt-2 rounded-2xl w-1/4">
                    <figure className="flex justify-center items-center rounded-2xl">
                        <img src="./noExtraCost.png" alt="Card Preview" className="rounded-t-2xl w-24 h-auto" />
                    </figure>
                    <div className="flex flex-col justify-center p-4">
                        <div className="pb-6 font-bold text-[#374151] text-2xl">Sin costo extra</div>
                        <div className="text-[#374151] text-lg">No cobramos costos de licencias, actualizaciones ni mantenimiento.</div>
                    </div>
                </div>
                <div className="relative z-10 flex flex-col bg-[#ffffff] bg-opacity-50 shadow-xl pt-2 rounded-2xl w-1/4">
                    <figure className="flex justify-center items-center rounded-2xl">
                        <img src="./noContracts.png" alt="Card Preview" className="rounded-t-2xl w-36 h-auto" />
                    </figure>
                    <div className="flex flex-col justify-center p-4">
                        <div className="pb-6 font-bold text-[#374151] text-2xl">Sin contratos</div>
                        <div className="text-[#374151] text-lg">No pedimos un periodo minimo de permanencia.</div>
                    </div>
                </div>
                <div className="relative z-10 flex flex-col bg-[#ffffff] bg-opacity-60 shadow-xl pt-2 rounded-2xl w-1/4">
                    <figure className="flex justify-center items-center rounded-2xl">
                        <img src="./noInvoice.png" alt="Card Preview" className="rounded-t-2xl w-24 h-auto" />
                    </figure>
                    <div className="flex flex-col justify-center p-4">
                        <div className="pb-6 font-bold text-2xl text-blue-600">Sin ataduras</div>
                        <div className="font-bold text-blue-600 text-lg">Puedes cancelar el servicio cuando quieras.</div>
                    </div>
                </div>
            </article>
        </section>
    )
}
