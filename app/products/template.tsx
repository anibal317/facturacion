'use client'
import Whatsapp from "@/components/Whatsapp/Whatsapp";
import { Navigation } from "@/components/navBar/Navigation";
import navData from "@/data/featureNavigation.json"

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navigation
                logo={navData.logo}
                mainLinks={navData.mainLinks}
                dropdownLinks={navData.dropdownLinks}
                dropdownEnabled={navData.dropdownEnabled}
            />
            {children}
            <Whatsapp phoneNumber="542314401066" positionX="30px" positionY="110px" />
        </>
    )
}