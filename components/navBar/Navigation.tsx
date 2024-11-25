import Link from 'next/link'
import { useState } from 'react'
import { ReceiptIcon, ChevronDown, Menu, X } from 'lucide-react'
import { NavigationData, NavLink } from '../../types/navigation'
import data from "@/data/navigation.json"

export function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const renderNavLink = (link: NavLink) => (
    <Link 
      key={link.href} 
      className="text-sm font-medium hover:underline underline-offset-4" 
      href={link.href}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {link.text}
    </Link>
  )

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-[#4e637c] text-[#fff]">
      <Link className="flex items-center justify-center" href={data.logo.href}>
        <ReceiptIcon className="h-6 w-6" />
        <span className="sr-only">{data.logo.text}</span>
      </Link>
      
      {/* Mobile menu button */}
      <button
        className="ml-auto md:hidden"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop navigation */}
      <nav className="hidden md:flex ml-auto gap-4 items-center">
        {data.mainLinks.map(renderNavLink)}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
          >
            Más <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              {data.dropdownLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-[#4e637c] z-20 md:hidden">
          <nav className="flex flex-col items-center py-4">
            {data.mainLinks.map(renderNavLink)}
            {data.dropdownLinks.map(renderNavLink)}
          </nav>
        </div>
      )}
    </header>
  )
}

