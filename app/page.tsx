import Clients from "@/components/clients/Clients";
import Contacto from "@/components/contact/Contacto";
import Benefits from "@/components/home/Benefits";
import Welcoming from "@/components/home/Welcoming";
import WhatCanDo from "@/components/home/WhatCanDo";
import Layout from "@/components/layout/Layout"
import MainFeature from "@/components/mainFeature/MainFeature";
import OnTop from "@/components/onTop/onTop";

export default function Home() {

  return (
    <Layout variant="home">
      <div className="flex flex-col overflow-hidden scroll-smooth">
        <main className="flex flex-col scroll-smooth">
          <Welcoming />
          <WhatCanDo />
          <Benefits />
          <MainFeature />
          <Clients />
          <Contacto />
          <OnTop positionX="3rem" positionY="3rem" showThreshold={100} />
        </main>
      </div>
    </Layout>
  )
}
