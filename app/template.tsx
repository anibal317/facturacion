'use client'
import Footer from "@/components/footer/Footer";
import Whatsapp from "@/components/Whatsapp/Whatsapp";
import { Navigation } from "@/components/navBar/Navigation";
import FloatingButton from "@/components/floatingButton/FloatingButton";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navigation />
            {children}
            <Whatsapp phoneNumber="542314401066" positionX="30px" positionY="110px" />
            <FloatingButton
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                positionX="32px"
                positionY="65px"
                ariaLabel="Volver arriba"
            >
                <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8 13.8599L10.87 10.8C11.0125 10.6416 11.1868 10.5149 11.3815 10.4282C11.5761 10.3415 11.7869 10.2966 12 10.2966C12.2131 10.2966 12.4239 10.3415 12.6185 10.4282C12.8132 10.5149 12.9875 10.6416 13.13 10.8L16 13.8599" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </FloatingButton>
            {/* <Footer /> */}
        </>
    )
}