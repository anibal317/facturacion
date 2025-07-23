"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
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
import Modal from "@/components/modal/Modal";

interface Item {
    id: number;
    text: string;
    featureId: number;
    parentId: number | null;
    children: Item[];
}

interface Section {
    id: number;
    title: string;
    description: string;
    video: boolean;
    videoLink: string;
    items: Item[];
}

const FeatureSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideoLink, setCurrentVideoLink] = useState('');
    const [features, setFeatures] = useState<Section[]>([]);

    useEffect(() => {
        const fetchFeatures = async () => {
            const response = await fetch('https://facturacion-admin.vercel.app/api/features');
            const data = await response.json();
            setFeatures(data);
        };

        fetchFeatures();
    }, []);

    const midpoint = Math.ceil(features.length / 2);

    const renderAccordionColumn = (columnEntries: Section[]) => (
        <Accordion type="single" collapsible className="w-full">
            {columnEntries.map((details, index) => (
                <AccordionItem key={details.id} value={`item-${index + 1}`}>
                    <AccordionTrigger className="font-semibold text-2xl">
                        {details.title}
                    </AccordionTrigger>
                    <AccordionContent>
                        <Card>
                            <CardHeader>
                                {/* <CardTitle>{details.title}</CardTitle> */}
                                {/* <CardDescription>{details.description}</CardDescription> */}
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 list-disc">
                                    {details.items.map((item) => (
                                        <li key={item.id}>
                                            {item.text}
                                            {item.children.length > 0 && (
                                                <ul className="ml-4 list-disc">
                                                    {item.children.map((subItem) => (
                                                        <li key={subItem.id}>{subItem.text}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                                {details.video && (
                                    <div className="flex justify-center items-center gap-1">
                                        <Button
                                            onClick={() => openVideoModal(details.videoLink)}
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
    );

    const openVideoModal = (videoLink: string) => {
        setCurrentVideoLink(videoLink);
        setIsModalOpen(true);
    };

    return (
        <section id='featureSection' className="flex flex-col bg-[#2f3d98] text-white justify-center items-center divide-y divide-dashed w-screen h-[100svh]">
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-3xl text-center sm:text-5xl tracking-tighter uppercase ">Funcionalidades</h2>
                <div className="mt-28 w-[100svh] h-auto">
                    <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
                        {renderAccordionColumn(features.slice(0, midpoint))}
                        {renderAccordionColumn(features.slice(midpoint))}
                    </div>
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
        </section>
    );
};

export default FeatureSection;