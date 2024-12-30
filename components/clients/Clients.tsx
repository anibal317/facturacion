'use client'
import { useEffect, useState } from "react";
import Carousel from "../carousel/Carousel";
import Spinner from "../spinner/Spinner";

interface Client {
    id: number;
    name:string;
    img: string;
    link: string;
    active: boolean;
    ordering: number;
}

export default function Clients() {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/clients`);
                if (!response.ok) {
                    throw new Error("Error fetching clients");
                }
                const data = await response.json();
                setClients(data.data); // Asumiendo que la respuesta tiene la estructura que proporcionaste
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchClients();
    }, []);

    if (loading) return <Spinner/>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section id="clients" className="relative z-8 flex flex-col justify-center w-full h-screen overflow-hidden">
            <img
                src="./clients.jpeg"
                alt="About Us"
                className="absolute w-full h-full object-cover"
            />
            <div className="relative z-10 flex flex-col bg-[#ffffff] bg-opacity-50 shadow-xl pt-2 rounded-2xl">
                <h1 className="font-extrabold text-5xl text-blue-500 text-center">Hoy contamos con más de 250 clientes</h1>
                <Carousel images={clients} speed={60} />
            </div>
        </section>
    );
}