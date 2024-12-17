import Footer from '../footer/Footer';
import Navbar from '../navBar/Navigation';
import "@/app/globals.css"
import 'tailwindcss/tailwind.css';
interface LayoutProps {
  children: React.ReactNode
  variant: 'home' | 'feature'
}

const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <div className="z-0 flex flex-col min-h-screen">
      <Navbar variant={variant} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

