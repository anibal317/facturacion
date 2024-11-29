import { Fira_Code } from 'next/font/google'
import Image from 'next/image'

const firaCode = Fira_Code({ subsets: ['latin'] })

export default function UnderConstruction() {
  return (
    <div className="flex justify-center items-center bg-[#72a9e8] p-4 sm:h-[85.5vh] md:h-[85.5vh] lg:h-screen">
      <div className="bg-white/90 shadow-lg backdrop-blur-sm rounded-lg w-full max-w-2xl">
        <div className="flex flex-col items-center space-y-6 p-6 text-center">
          <span className="bg-[#ff9d9d] px-4 py-1 rounded-full font-semibold text-sm text-white">
            Sitio en Desarrollo
          </span>
          
          <div className="relative w-64 md:w-80 h-64 md:h-80">
            <Image
              src="../../UnderAle.webp"
              alt="Developer illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="space-y-4">
            <h1 className="font-bold text-[#2d3748] text-3xl md:text-4xl">
              Sitio En Construcción
            </h1>
            
            <div className={firaCode.className}>
              <p className="text-[#4a5568] text-sm md:text-base">
                {'<div className="coming-soon">'}
              </p>
              <p className="py-2 font-medium text-[#ff9d9d] text-base md:text-lg">
                Estamos trabajando en algo increíble
              </p>
              <p className="text-[#4a5568] text-sm md:text-base">
                {'</div>'}
              </p>
            </div>

            <p className="mx-auto max-w-md text-[#4a5568]">
              Nuestro sitio está actualmente en desarrollo. 
              Pronto traeremos una nueva experiencia web emocionante.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

