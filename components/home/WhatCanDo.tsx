import AnimatedCard from "../animatedCard/AnimatedCard";

export default function WhatCanDo() {
    return (
        <section id="actions" className="pt-12 pb-4 animate-jump-in scroll-smooth">
            <div className="relative flex flex-col justify-center items-center gap-3 w-full h-[150px] break-words overflow-hidden">
                <p className="relative z-10 px-4 max-w-8xl text-center text-lg md:text-xl lg:text-5xl animate-fade-up">
                    Dinamismo y flexibilidad,
                    priorizamos tus objetivos
                </p>
                <p className="relative z-10 px-4 max-w-8xl text-center text-lg md:text-xl lg:text-2xl animate-fade-up">
                    Trabajamos en equipo con metodologías ágiles centradas en
                    el desarrollo iterativo e incremental, adaptándonos a cada
                    proyecto con flexibilidad, rapidez y eficiencia.

                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 bg-white dark:bg-gray-900 p-4">
                <AnimatedCard
                    title="Nuestra"
                    description="extensa experiencia nos permite abordar una amplia diversidad de proyectos para industrias, empresas, organizaciones e instituciones de diferentes sectores."
                    highlightedWords={[
                        "extensa experiencia",
                        "diversidad de",
                        "diferentes"
                    ]}
                />
                <AnimatedCard
                    title="Innovación"
                    description="es el corazón de nuestro enfoque, impulsando soluciones creativas y eficientes para desafíos complejos en diversos campos."
                    highlightedWords={[
                        "corazón",
                        "soluciones creativas",
                        "desafíos complejos"
                    ]}
                />
                <AnimatedCard
                    title="Compromiso"
                    description="con la excelencia y la satisfacción del cliente guía cada proyecto que emprendemos, asegurando resultados de alta calidad."
                    highlightedWords={[
                        "excelencia",
                        "satisfacción del cliente",
                        "alta calidad"
                    ]}
                />
            </div>
        </section>
    )
};
