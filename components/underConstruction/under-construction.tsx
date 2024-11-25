import { Fira_Code } from 'next/font/google'
import Image from 'next/image'

const firaCode = Fira_Code({ subsets: ['latin'] })

export default function UnderConstruction() {
  return (
    <div className="bg-[#72a9e8] flex items-center justify-center p-4 lg:h-[86.8vh] md:h-[85.5vh] sm:h-[85.5vh] h-[82.5vh]">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
        <div className="p-6 flex flex-col items-center text-center space-y-6">
          <span className="bg-[#ff9d9d] text-white px-4 py-1 rounded-full text-sm font-semibold">
            Sitio en Desarrollo
          </span>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="../../UnderAle.webp"
              alt="Developer illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2d3748]">
              Sitio En Construcción
            </h1>
            
            <div className={firaCode.className}>
              <p className="text-[#4a5568] text-sm md:text-base">
                {'<div className="coming-soon">'}
              </p>
              <p className="text-[#ff9d9d] font-medium text-base md:text-lg py-2">
                Estamos trabajando en algo increíble
              </p>
              <p className="text-[#4a5568] text-sm md:text-base">
                {'</div>'}
              </p>
            </div>

            <p className="text-[#4a5568] max-w-md mx-auto">
              Nuestro sitio está actualmente en desarrollo. 
              Pronto traeremos una nueva experiencia web emocionante.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

