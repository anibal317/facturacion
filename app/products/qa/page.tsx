'use client'
import Layout from "@/components/layout/Layout";
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

export default function Page() {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await fetch("https://facturacion-admin.onrender.com/api/faqs");
                if (!response.ok) {
                    throw new Error("Error fetching FAQs");
                }
                const data = await response.json();
                setFaqs(data); // Asumiendo que el endpoint devuelve un array de FAQs
            } catch (error:any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFAQs();
    }, []);

    if (loading) return (<div className="flex justify-center items-center w-screen h-full"><Spinner/></div>);
    if (error) return <div>Error: {error}</div>;

    return (
        <Layout variant='feature'>
            <div className="flex justify-center items-center pt-16 pb-16 divide-y divide-dashed">
                <Accordion type="single" collapsible className="w-3/4">
                    {faqs.map((faq) => (
                        <AccordionItem key={faq.value} value={faq.value}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Layout>
    );
}