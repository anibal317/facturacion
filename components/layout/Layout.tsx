import Footer from '../footer/Footer';
import Navbar from '../navBar/Navigation';
import "@/app/globals.css"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bolivar Software",
  description: "compañia de sistemas",
};
interface LayoutProps {
  children: React.ReactNode
  variant: 'home' | 'feature'
}

const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar variant={variant} />
      <main className="flex-grow mx-auto px-4 py-8 container">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout


