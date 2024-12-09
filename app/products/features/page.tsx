"use client";
import { Button } from "@/components/ui/button"
import { useState } from 'react';
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
import Layout from "@/components/layout/Layout";
import Modal from "@/components/modal/Modal";

interface Section {
    description: string;
    items: (string | Partial<Record<string, string[]>>)[];
    video?: boolean;
    videoLink?: string;
}

interface Data {
    [key: string]: Section;
}

const FeaturesAccordion: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideoLink, setCurrentVideoLink] = useState('');

    const data: Data = features;
    const entries = Object.entries(data);
    const midpoint = Math.ceil(entries.length / 2);

    const renderAccordionColumn = (columnEntries: [string, Section][]) => (
        <div className="mt-5 w-full">
            <Accordion type="single" collapsible className="w-full">
                {columnEntries.map(([section, details], index) => (
                    <AccordionItem key={section} value={`item-${index + 1}`}>
                        <AccordionTrigger className="font-semibold text-lg">
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
                                    {details.video && (
                                        <div className="flex justify-center items-center gap-1">
                                            <Button
                                                onClick={() => openVideoModal(details.videoLink!)}
                                                className="mt-4"
                                                variant="outline"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-red-600 fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg> Ver Video
                                            </Button>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );

    const openVideoModal = (videoLink: string) => {
        setCurrentVideoLink(videoLink);
        setIsModalOpen(true);
    };

    return (
        <Layout variant='feature'>
            <div className="mx-auto px-4 py-8 w-full max-w-7xl">
                <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
                    {renderAccordionColumn(entries.slice(0, midpoint))}
                    {renderAccordionColumn(entries.slice(midpoint))}
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Video Tutorial"
                content={
                    <iframe
                        width="100%"
                        height="315"
                        src={currentVideoLink.replace('watch?v=', 'embed/')}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                }
            />
        </Layout>
    );
};

export default FeaturesAccordion;

