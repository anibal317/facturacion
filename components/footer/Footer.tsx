'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { NavLink } from '../../types/navigation';

export default function Footer() {
    const [featureLinks, setFeatureLinks] = useState<NavLink[]>([]);
    const [isExploreOpen, setIsExploreOpen] = useState(false);

    useEffect(() => {
        const fetchNavData = async () => {
            try {
                const res = await fetch('/api/navLinks');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                // Accede a los enlaces de la sección 'feature'
                setFeatureLinks(data.feature.links.filter((link: NavLink) => link.enabled !== false));
            } catch (error) {
                console.error('Error fetching nav data:', error);
            }
        };
        fetchNavData();
    }, []);

    const renderNavLink = (link: NavLink & { enabled?: boolean }) => {
        if (link.enabled === false) return null;
        return (
            <Link
                key={link.href}
                className="font-medium text-sm underline-offset-4 hover:underline"
                href={link.href}
            >
                {link.text}
            </Link>
        );
    }

    const toggleExplore = () => {
        setIsExploreOpen(!isExploreOpen);
    }

    return (
        <footer className="bg-[#374151] text-[#e5e7eb]">
            <div className="mx-auto px-4 py-8 container">
                <div className="flex lg:flex-row flex-col justify-between items-center lg:items-start">
                    <div className="mb-8 lg:mb-0 text-center lg:text-left">
                        <div className="flex lg:flex-row flex-col items-center lg:items-start gap-4 mb-4">
                            <Image
                                src="/bolivarSoftwareWordOnly.png" // Asegúrate de que la ruta sea correcta
                                alt="Logo Preview"
                                width={60} // Proporciona el ancho
                                height={60} // Proporciona la altura
                                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                            />
                            <div className="mt-2 lg:mt-0 text-3xl lg:text-5xl">Bolívar SOFTWARE</div>
                        </div>
                        <div className="flex justify-center lg:justify-start gap-6 mt-4">
                            <a href="#" aria-label="Twitter"> {/* SVG de Twitter */}</a>
                            <a href="#" aria-label="YouTube"> {/* SVG de YouTube */}</a>
                            <a href="#" aria-label="Facebook"> {/* SVG de Facebook */}</a>
                            <a href="#" aria-label="Instagram"> {/* SVG de Instagram */}</a>
                        </div>
                    </div>
                    <div className="flex-col w-full lg:w-auto">
                        <button
                            onClick={toggleExplore}
                            className="flex justify-between items-center lg:hidden bg-[#4B5563] mb-4 px-4 py-2 rounded w-full text-white"
                        >
                            <span>Descubre</span>
                            <svg className={`w-4 h-4 transition-transform ${isExploreOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`${isExploreOpen ? 'block' : 'hidden'} lg:block`}>
                            <h3 className="mb-4 font-bold text-[#9ca3af] text-lg uppercase">Secciones</h3>
                            <div className="flex flex-col gap-2">
                                {featureLinks.map(renderNavLink)} {/* Usar los enlaces de feature */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-gray-500 my-8 border-t"></div>
                <div className="text-center">
                    ©  2024 Bolivar Software. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}