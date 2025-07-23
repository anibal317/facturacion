'use client'
import Spinner from "@/components/spinner/Spinner";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

// Define el tipo de las propiedades
interface FAQ {
    id: number;
    value: string;
    question: string;
    answer: string;
}

export default function Faqs() {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/faqs`);
                if (!response.ok) {
                    throw new Error("Error fetching FAQs");
                }
                const data = await response.json();
                setFaqs(data.data); // Asumiendo que el endpoint devuelve un array de FAQs
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFAQs();
    }, []);

    if (loading) return (<div className="absolute flex justify-center items-center"><Spinner /></div>);
    if (error) return <div>Error: {error}</div>;

    return (
        <section id="faqs" className="relative flex justify-center items-center bg-gradient-to-r from-white to-blue-50  pb-16 divide-y divide-dashed w-full h-[100svh]">
            <div className="relative mx-auto px-4 max-w-7xl container">
                <h2 className="mb-12 font-bold text-3xl text-center sm:text-5xl tracking-tighter uppercase">Preguntas Frecuentes</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq) => (
                        <AccordionItem key={faq.value} value={faq.value}>
                            <AccordionTrigger className="font-semibold text-2xl">{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                <div className="lg:prose-lg prose text-xl" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}