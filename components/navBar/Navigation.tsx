import Link from 'next/link'
import { useState } from 'react'
import { ReceiptIcon, ChevronDown, Menu, X } from 'lucide-react'
import { NavLink } from '../../types/navigation'
import data from "@/data/navigation.json"

export function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const renderNavLink = (link: NavLink & { enabled?: boolean }) => {
    if (link.enabled === false) return null;
    return (
      <Link 
        key={link.href} 
        className="font-medium text-sm underline-offset-4 hover:underline" 
        href={link.href}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {link.text}
      </Link>
    )
  }

  const enabledMainLinks = data.mainLinks.filter(link => link.enabled !== false)
  const enabledDropdownLinks = data.dropdownLinks.filter(link => link.enabled !== false)

  return (
    <header className="fixed flex items-center bg-[#4e637c] px-4 lg:px-6 w-screen h-14 text-[#fff]">
      <Link className="flex justify-center items-center" href={data.logo.href}>
        <img src={data.logo.icon} alt={data.logo.text} className="w-12 h-10" />
        <span className="sr-only">{data.logo.text}</span>
      </Link>
      
      {/* Mobile menu button */}
      <button
        className="md:hidden ml-auto"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop navigation */}
      <nav className="md:flex items-center gap-4 hidden ml-auto">
        {enabledMainLinks.map(renderNavLink)}
        {data.dropdownEnabled && enabledDropdownLinks.length > 0 && (
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center font-medium text-sm underline-offset-4 hover:underline"
            >
              Productos <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="right-0 z-10 absolute bg-white shadow-lg mt-2 py-1 rounded-md w-48">
                {enabledDropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block hover:bg-gray-100 px-4 py-2 text-gray-700 text-sm"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="top-14 right-0 left-0 z-20 absolute md:hidden bg-[#4e637c]">
          <nav className="flex flex-col items-center py-4">
            {enabledMainLinks.map(renderNavLink)}
            {enabledDropdownLinks.map(renderNavLink)}
          </nav>
        </div>
      )}
    </header>
  )
}

