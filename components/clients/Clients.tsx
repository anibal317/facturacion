import Carousel from "../carousel/Carousel";

export default function Clients() {
    const imagesAcercaDe = [
        '/imgs/clients/arca.jpeg',
        '/imgs/clients/distripag.png',
        '/imgs/clients/globant.png',
        '/imgs/clients/std.png',
        '/imgs/clients/teracode.jpeg',
        '/imgs/clients/thor.jpg',
    ]
    return (
        <section id="clients" className="relative flex flex-col justify-center w-full h-screen overflow-hidden">
            <img
                src="./clients.jpeg"
                alt="About Us"
                className="absolute w-full h-full object-cover"
            />
            <div className="relative z-10 flex flex-col gap-4 bg-[#ffffff] bg-opacity-50 shadow-xl pt-2 rounded-2xl">

                <h1 className="font-extrabold text-5xl text-blue-500 text-center">Nuestos clientes que confían en nosotros</h1>
                <Carousel images={imagesAcercaDe} speed={60} />
            </div>
        </section>
    )
};
