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
        <section>
            <h1>Nuestos clientes que confían en nosotros</h1>
            <Carousel images={imagesAcercaDe} speed={60} />
        </section>
    )
};
