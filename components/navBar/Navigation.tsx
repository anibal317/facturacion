'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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
    home: 'fixed flex items-center bg-[#4e637c] px-4 lg:px-6 w-screen h-14 text-[#fff]',
    feature: 'fixed flex items-center bg-[#4e637c] px-4 lg:px-6 w-screen h-14 text-[#fff]',
  }

  return (
    <nav className={`p-4 ${navStyles[variant]}`}>
      <div className="mx-auto container">
        <div className="flex justify-between items-center">
          <Link href={navData.logo.href} className="flex items-center">
            <Image src={navData.logo.icon} alt="Logo" width={40} height={40} />
            <span className="ml-2 font-bold text-2xl">{navData.logo.text}</span>
          </Link>
          <ul className="flex space-x-4">
            {navData.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

