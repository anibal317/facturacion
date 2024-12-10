'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

interface Logo {
  icon: string
  text: string
  href: string
}

interface NavLink {
  text: string
  href: string
}

interface NavData {
  logo: Logo
  links: NavLink[]
}

interface NavbarProps {
  variant: 'home' | 'feature'
}

const Navbar: React.FC<NavbarProps> = ({ variant }) => {
  const [navData, setNavData] = useState<NavData | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const fetchNavData = async () => {
      try {
        const res = await fetch('/navLinks.json')
        const data = await res.json()
        setNavData(data[variant])
      } catch (error) {
        console.error('Error fetching nav data:', error)
      }
    }
    fetchNavData()
  }, [variant])

  if (!navData) return null

  const navStyles = {
    home: 'fixed bg-[#FFC107] w-full text-[#333] z-50',
    feature: 'fixed bg-[#001F3F] w-full text-[#fff] z-50',
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`${navStyles[variant]}`}>
      <div className="mx-auto px-4 lg:px-6 container">
        <div className="flex justify-between items-center h-14">
          <Link href={navData.logo.href} className="flex items-center">
            <Image src={navData.logo.icon} alt="Logo" width={32} height={32} className="w-8 h-8" />
            <span className="ml-2 font-bold text-lg sm:text-xl lg:text-2xl">{navData.logo.text}</span>
          </Link>
          {/* Cambiamos el breakpoint de 'md' a 'lg' para evitar solapamiento en 768px */}
          <div className="lg:flex space-x-4 hidden">
            {navData.links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm lg:text-base hover:underline">
                {link.text}
              </Link>
            ))}
          </div>
          {/* Ajustamos el botón del menú para que aparezca hasta 1023px */}
          <button className="lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Menú móvil: visible hasta 1023px */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navData.links.map((link) => (
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
  )
}

export default Navbar

