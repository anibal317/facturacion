export default function Welcoming() {
    return (
        <section id="welcoming" className=" flex sm:flex-row flex-col scroll-smooth h-[100vh]" >
            <article className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center overflow-hidden w-[60vw]">
                    <p className="welcomingText">
                        Somos una empresa de desarrollo de software
                    </p>

                    <p className="pt-12 welcomingText">
                        Acompañamos a nuestros clientes en todo el proceso, asegurando el éxito.
                    </p>
                </div>
            </article>
            <article className="flex justify-center items-center">
                <img src='/welcoming.png' className="h-[70%] md:h-auto"/>
            </article>
        </section >
    );
}