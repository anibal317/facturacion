import Footer from '../footer/Footer';
import "@/app/globals.css"
import 'tailwindcss/tailwind.css';
import ContactNavbar from '../contactNave/contactNav';
import Header from '../header/header';
import Navbar from '../navBar/Navigation';
interface LayoutProps {
  children: React.ReactNode
  variant: 'home' | 'feature'
}

const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <div className="z-0 flex flex-col min-h-screen">
      <Header/>
      <ContactNavbar/>
      <Navbar variant={variant} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

