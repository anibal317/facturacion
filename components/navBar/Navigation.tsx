import Link from 'next/link'
import { useState } from 'react'
import { ReceiptIcon, ChevronDown } from 'lucide-react'
import { NavigationData, NavLink } from '../../types/navigation'
import data from "@/data/navigation.json"

interface NavigationProps {
  data: NavigationData;
}

export function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  const renderNavLink = (link: NavLink) => (
    <Link key={link.href} className="text-sm font-medium hover:underline underline-offset-4" href={link.href}>
      {link.text}
    </Link>
  )

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href={data.logo.href}>
        <ReceiptIcon className="h-6 w-6" />
        <span className="sr-only">{data.logo.text}</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
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
    </header>
  )
}

