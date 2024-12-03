export default function Benefits() {
    return (
        <section className="flex justify-center gap-4 pt-4">
            <div className="flex flex-col bg-[#ffffff] shadow-xl rounded-2xl w-[500px]">
                <figure className="flex justify-center items-center rounded-2xl">
                    <img src="./checkList.png" alt="Card Preview" className="rounded-t-2xl w-24 h-auto" />
                </figure>
                <div className="flex flex-col justify-center p-4">
                    <div className="pb-6 font-bold text-[#374151] text-2xl">Todo Incluido</div>
                    <div className="text-[#374151] text-lg">Los pagos mensuales incluyen todos nuestros serviciox.</div>
                </div>
            </div>
            <div className="flex flex-col bg-[#ffffff] shadow-xl pt-2 rounded-2xl w-[500px]">
                <figure className="flex justify-center items-center rounded-2xl">
                    <img src="./noExtraCost.png" alt="Card Preview" className="rounded-t-2xl w-24 h-auto" />
                </figure>
                <div className="flex flex-col justify-center p-4">
                    <div className="pb-6 font-bold text-[#374151] text-2xl">Sin costo extra</div>
                    <div className="text-[#374151] text-lg">No cobramos costos de licencias, actualizaciones ni mantenimiento.</div>
                </div>
            </div>
            <div className="flex flex-col bg-[#ffffff] shadow-xl pt-2 rounded-2xl w-[500px]">
                <figure className="flex justify-center items-center rounded-2xl">
                    <img src="./noContracts.png" alt="Card Preview" className="rounded-t-2xl w-36 h-auto" />
                </figure>
                <div className="flex flex-col justify-center p-4">
                    <div className="pb-6 font-bold text-[#374151] text-2xl">Sin contratos</div>
                    <div className="text-[#374151] text-lg">No pedimos un periodo minimo de permanencia.</div>
                </div>
            </div>
            <div className="flex flex-col bg-[#ffffff] shadow-xl pt-2 rounded-2xl w-[500px]">
                <figure className="flex justify-center items-center rounded-2xl">
                    <img src="./noInvoice.png" alt="Card Preview" className="rounded-t-2xl w-24 h-auto" />
                </figure>
                <div className="flex flex-col justify-center p-4">
                    <div className="pb-6 font-bold text-[#374151] text-2xl">Sin ataduras</div>
                    <div className="text-[#374151] text-lg">Puedes cancelar el servicio cuando quieras.</div>
                </div>
            </div>
        </section>
    )
}
