'use client'
import Whatsapp from "@/components/Whatsapp/Whatsapp";
import { Navigation } from "@/components/navBar/Navigation";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navigation />
            {children}
            <Whatsapp phoneNumber="542314401066" positionX="30px" positionY="110px" />
        </>
    )
}