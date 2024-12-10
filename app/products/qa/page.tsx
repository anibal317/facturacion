// app/products/qa/page.tsx

import Layout from "@/components/layout/Layout";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { getFAQs } from '@/app/products/qa/services/faqService' // Asegúrate de que la ruta sea correcta
import { FAQ } from '@/types/faq'; // Asegúrate de que la ruta sea correcta

// Componente de página
const Page = async () => {
    const faqs: FAQ[] = await getFAQs(); // Llama a la función del servicio

    return (
        <Layout variant='feature'>
            <div className="flex justify-center items-center pt-16 pb-16 divide-y divide-dashed">
                <Accordion type="single" collapsible className="w-3/4">
                    {faqs.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id.toString()}>
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
};

export default Page;