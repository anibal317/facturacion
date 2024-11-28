"use client";
import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import features from "@/data/features.json";

interface Section {
    description: string;
    items: (string | Partial<Record<string, string[]>>)[]; // Usar Partial para permitir valores opcionales
}

interface Data {
    [key: string]: Section;
}

const FeaturesAccordion: React.FC = () => {
    const data: Data = features;
    const entries = Object.entries(data);
    const midpoint = Math.ceil(entries.length / 2);

    const renderAccordionColumn = (columnEntries: [string, Section][]) => (
        <div className="w-full">
            <Accordion type="single" collapsible className="w-full">
                {columnEntries.map(([section, details], index) => (
                    <AccordionItem key={section} value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-lg font-semibold">
                            {section}
                        </AccordionTrigger>
                        <AccordionContent>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{section}</CardTitle>
                                    <CardDescription>{details.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 list-disc">
                                        {details.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                {typeof item === "string" ? (
                                                    item
                                                ) : (
                                                    Object.entries(item).map(([subSection, subItems]) => (
                                                        <div key={subSection} className="mt-2">
                                                            <strong>{subSection}</strong>
                                                            <ul className="ml-4 list-disc">
                                                                {subItems?.map((subItem, subIndex) => (
                                                                    <li key={subIndex}>{subItem}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );

    return (
        <div className="w-full max-w-7xl mx-auto pt-24 pb-5 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {renderAccordionColumn(entries.slice(0, midpoint))}
                {renderAccordionColumn(entries.slice(midpoint))}
            </div>
        </div>
    );
};

export default FeaturesAccordion;

