import Clients from "@/components/clients/Clients";
import Contacto from "@/components/contact/Contacto";
import Benefits from "@/components/home/Benefits";
import Welcoming from "@/components/home/Welcoming";
import WhatCanDo from "@/components/home/WhatCanDo";
import Layout from "@/components/layout/Layout"
import MainFeature from "@/components/mainFeature/MainFeature";
import Whatsapp from "@/components/Whatsapp/Whatsapp";

export default function Home() {

  return (
    <Layout variant="home">
      <div className="flex flex-col overflow-hidden scroll-smooth">
        <main className="flex flex-col mt-8 scroll-smooth">
          <Welcoming />
          <WhatCanDo />
          <Benefits />
          <MainFeature />
          <Clients />
          <Contacto />
          <Whatsapp phoneNumber="2314405020" positionX="40px" positionY="50px" />
        </main>
      </div>
    </Layout>
  )
}
