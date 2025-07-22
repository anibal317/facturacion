'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { headerLogo } from '@/types/headerLogo'; // Asegúrate de que la ruta sea correcta
import { usePathname } from 'next/navigation';


const Header = () => {
  const [data, setLogo] = useState<headerLogo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchLogoData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/navigation`);
        if (!response.ok) {
          throw new Error("Error fetching clients");
        }
        const data = await response.json();
        setLogo(data[0]); // Asumiendo que la respuesta tiene la estructura que proporcionaste
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchLogoData();
  }, []);
  const logoPath = pathname?.includes('products/invoices')
    ? `../${data?.logoIcon || '/'}`
    : data?.logoIcon || '/';
  return (
    <header className="bg-[#3871c1] shadow-sm px-6 py-4">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        {/* Logo alineado a la izquierda */}
        <div className="flex flex-row flex-shrink-0 justify-center items-center">
          <Link href="/">
            <Image
              src={logoPath || '/'} // Reemplaza con la ruta de tu logo
              alt={data?.logoText || '/'}
              width={120}
              height={40}
              className="w-auto h-10"
            />
          </Link>
          <span className="hidden md:block ml-2 font-bold text-[210%] text-white">
            {data?.logoText}
          </span>
        </div>

        {/* Imagen central (opcional - solo visible en desktop) */}
        <div className="hidden md:block flex-grow mx-4 max-w-2xl text-center">
          <Image
            src="/appHeader.png" // Reemplaza con tu imagen central
            alt="Imagen central"
            width={400}
            height={80}
            className="mx-auto w-auto h-20 object-contain"
          />
        </div>

        {/* Botón PLANES alineado a la derecha */}
        <div className="flex-shrink-0">
          <Link
            href="/products/invoices#precios"
            className="bg-white hover:bg-gray-100 px-6 py-2 border-2 border-black rounded-none font-bold text-black transition-colors"
          >
            PLANES
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;