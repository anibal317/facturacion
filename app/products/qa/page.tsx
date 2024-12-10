import Layout from "@/components/layout/Layout";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "../../../data/faqs.json"; // Asegúrate de usar la ruta correcta

// Define el tipo de las propiedades
interface CustomAccordionContentProps {
    htmlContent: string;
}

const CustomAccordionContent: React.FC<CustomAccordionContentProps> = ({ htmlContent }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default function Page() {
    return (
        <Layout variant='feature'>
            <div className="flex justify-center items-center divide-y divide-dashed w-full h-[69.7vh]">
                <Accordion type="single" collapsible className="w-3/4">
                    {faqs.map((faq) => (
                        <AccordionItem key={faq.value} value={faq.value}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                <CustomAccordionContent htmlContent={faq.answer} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Layout>
    );
}