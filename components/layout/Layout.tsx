import Footer from '../footer/Footer';
import Navbar from '../navBar/Navigation';
import "@/app/globals.css"


interface LayoutProps {
  children: React.ReactNode
  variant: 'home' | 'feature'
}

const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <div className="flex flex-col">
      <Navbar variant={variant} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout


