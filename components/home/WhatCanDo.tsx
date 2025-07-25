export default function WhatCanDo() {
  return (
    <section id='actions' className="flex flex-col scroll-smooth h-[100svh] w-full">
      <div className="mx-auto bg-[#171f55] w-full">
        <h2 className="font-bold text-3xl text-white text-center md:text-4xl lg:text-5xl p-2">
          Dinamismo y flexibilidad, priorizamos tus objetivos
        </h2>
      </div>
      <div className="text-2xl lg:text-5xl px-10 lg:px-[15vh]  text-center font-medium">
        <p className=" mt-10">
          Trabajamos en equipo con metodologías ágiles
        </p>
        <p className="">
          y nos centramos en el desarrollo de una plataforma eficiente
        </p>
        <p className="mb-10">
          y segura. Nos adaptamos a tu proyecto con flexibilidad y rapidez
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-2 justify-center lg:py-12 lg:pl-40 lg:pr-60 text-xl bg-[#3871c1] text-white">
        <div className="flex flex-row items-center mt-2 mb-5">
          <img src="/Tick.png" className="w-[14vh]" alt="" />
          <div className="">
            <h3 className="font-bold text-xl lg:text-3xl">Extensa experiencia</h3>
            <p className="text-[1rem] lg:text-2xl">
              Nos permite abordar una amplia diversidad de proyectos para industrias, empresas, organizaciones e instituciones de diferentes sectores.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-2 mb-5">
          <img src="/Tick.png" className="w-[14vh]" alt="" />
          <div className="">
            <h3 className="font-bold text-xl lg:text-3xl">Innovación</h3>
            <p className="text-[1rem] lg:text-2xl">
              Es el corazón de nuestro enfoque, impulsando soluciones creativas y eficientes para desafíos complejos en diversos campos.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-2 mb-5">
          <img src="/Tick.png" className="w-[14vh]" alt="" />
          <div className="">
            <h3 className="font-bold text-xl lg:text-3xl">Compromiso</h3>
            <p className="text-[1rem] lg:text-2xl">
              Con la excelencia y la satisfacción del cliente guía cada proyecto que emprendemos, asegurando resultados de alta calidad.
            </p>
          </div>
        </div>
      </div>
    </section >
  );
}