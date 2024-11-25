'use client'
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";
import Whatsapp from "@/components/Whatsapp/Whatsapp";
import { Navigation } from "@/components/navBar/Navigation";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = !pathname.includes('admin');
    return (
        <>
            <Navigation/>
            {children}
            <Whatsapp phoneNumber="542314401066" positionX="30px" positionY="90px"/>
            <Footer />
        </>
    )
}