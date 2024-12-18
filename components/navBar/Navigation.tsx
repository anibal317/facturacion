'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface Logo {
  icon: string;
  text: string;
  href: string;
}

interface NavLink {
  text: string;
  href: string;
}

interface NavData {
  home: {
    logo: Logo;
    links: NavLink[];
  };
  feature: {
    logo: Logo;
    links: NavLink[];
  };
}

interface NavbarProps {
  variant: 'home' | 'feature';
}

const Navbar: React.FC<NavbarProps> = ({ variant }) => {
  const [navData, setNavData] = useState<NavData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchNavData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/navigation`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();

        // Mapear datos al formato esperado
        const mappedData: NavData = {
          home: mapSectionToNavData(data.find((section: any) => section.section === 'HOME')),
          feature: mapSectionToNavData(data.find((section: any) => section.section === 'FEATURE')),
        };

        setNavData(mappedData);
      } catch (error) {
        console.error('Error fetching nav data:', error);
      }
    };

    fetchNavData();
  }, []);

  const mapSectionToNavData = (section: any) => {
    return {
      logo: {
        icon: section.logoIcon,
        text: section.logoText,
        href: section.logoHref,
      },
      links: section.link
        .filter((link: any) => link.enabled) // Filtrar solo enlaces habilitados
        .map((link: any) => ({
          text: link.text,
          href: link.href,
        })),
    };
  };

  if (!navData || !navData[variant]) return null;

  const { logo, links } = navData[variant];

  const navStyles = {
    home: 'fixed bg-[#1976D2] w-full text-[#fff] z-50',
    feature: 'fixed bg-[#001F3F] w-full text-[#fff] z-50',
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${navStyles[variant]}`}>
      <div className="mx-auto px-4 lg:px-6 container">
        <div className="flex justify-between items-center h-14">
          <Link href={logo.href} className="flex items-center">
            <Image src={logo.icon} alt="Logo" width={32} height={32} className="w-8 h-8" />
            <span className="ml-2 font-bold text-lg sm:text-xl lg:text-2xl">{logo.text}</span>
          </Link>
          <div className="lg:flex space-x-4 hidden">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm lg:text-base hover:underline">
                {link.text}
              </Link>
            ))}
          </div>
          <button className="lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block hover:bg-[#5a7290] px-3 py-2 rounded-md font-medium text-sm hover:text-white"
                onClick={toggleMenu}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
