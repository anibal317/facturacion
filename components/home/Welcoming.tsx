export default function Welcoming() {
    return (
        <section id="welcoming" className="flex sm:flex-row flex-col scroll-smooth h-[100vh]" >
            <article className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center overflow-hidden w-[60vw] ml-4">
                    <p className="welcomingText">
                        Somos una empresa de desarrollo de software
                    </p>

                    <p className="welcomingText pt-12">
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