import Benefits from "@/components/home/Benefits";
import Welcoming from "@/components/home/Welcoming";


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <main className="z-[-2] flex flex-col mt-8 min-w-screen scroll-smooth">
        <Welcoming />
        <Benefits />
      </main>
    </div>
  )
}
