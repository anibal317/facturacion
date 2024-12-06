import Clients from "@/components/clients/Clients";
import Contacto from "@/components/contact/Contacto";
import Benefits from "@/components/home/Benefits";
import Welcoming from "@/components/home/Welcoming";
import Layout from "@/components/layout/Layout"

export default function Home() {

  return (
    <Layout variant="home">

      <div className="flex flex-col scroll-smooth">
        <main className="z-[-2] flex flex-col mt-8 min-w-screen scroll-smooth">
          <Welcoming />
          <Clients/>
          <Benefits />
          <Contacto />
        </main>
      </div>
    </Layout>
  )
}
