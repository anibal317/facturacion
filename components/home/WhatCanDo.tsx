export default function WhatCanDo() {
  return (
    <section id='actions' className="relative flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white py-20 h-auto cursor-default">
      <div className="absolute inset-0 bg-[url('/backgrounds/wave-pattern.svg')] bg-no-repeat h-[400%]" />
      <div className="relative z-10 mx-auto px-4 container">
        <h2 className="mb-12 font-bold text-3xl text-blue-900 text-center md:text-4xl lg:text-5xl">
          Dinamismo y flexibilidad, priorizamos tus objetivos
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-2xl text-blue-700 text-center md:text-3xl">
          Trabajamos en equipo con metodologías ágiles centradas en el desarrollo iterativo e incremental, adaptándonos a cada proyecto con flexibilidad, rapidez y eficiencia.
        </p>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-xl">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-xl border-none transition-all">
            <div className="p-6">
              <h3 className="mb-2 font-semibold text-blue-900">Extensa experiencia</h3>
              <p className="text-blue-700">
                Nos permite abordar una amplia diversidad de proyectos para industrias, empresas, organizaciones e instituciones de diferentes sectores.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg hover:shadow-xl border-none transition-all">
            <div className="p-6">
              <h3 className="mb-2 font-semibold text-blue-900">Innovación</h3>
              <p className="text-blue-700">
                Es el corazón de nuestro enfoque, impulsando soluciones creativas y eficientes para desafíos complejos en diversos campos.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-xl border-none transition-all">
            <div className="p-6">
              <h3 className="mb-2 font-semibold text-blue-900">Compromiso</h3>
              <p className="text-blue-700">
                Con la excelencia y la satisfacción del cliente guía cada proyecto que emprendemos, asegurando resultados de alta calidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}