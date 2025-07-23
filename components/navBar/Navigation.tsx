'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const fetchNavData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/navigation`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();

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
    setActiveLink(window.location.pathname);
  }, []);

  const mapSectionToNavData = (section: any) => {
    return {
      logo: {
        icon: section.logoIcon,
        text: section.logoText,
        href: section.logoHref,
      },
      links: section.link
        .filter((link: any) => link.enabled)
        .map((link: any) => ({
          text: link.text,
          href: link.href,
        })),
    };
  };

  if (!navData || !navData[variant]) return null;

  const { logo, links } = navData[variant];

  const navStyles = {
    home: 'bg-[#f4f3f3] w-full text-[#1f265a] z-50 font-bold text-center',
    feature: 'bg-[#f4f3f3] w-full text-[#1f265a] z-50 font-bold text-center' // Updated to match home
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${navStyles[variant]}`}>
      <div className="mx-auto px-4 lg:px-6 flex items-center justify-center">
        <div className="flex justify-between items-center h-14">

          <div className="hidden lg:flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-md lg:text-xl hover:underline py-2 px-3 ${activeLink === link.href ? 'bg-opacity-20 bg-black border-b-2 border-white' : ''
                  }`}
              >
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
                className={`block hover:bg-[#5a7290] px-3 py-2 rounded-md font-medium text-sm hover:text-white ${activeLink === link.href ? 'bg-opacity-20 bg-black border-b-2 border-white' : ''
                  }`}
                onClick={() => {
                  toggleMenu();
                  setActiveLink(link.href);
                }}
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

