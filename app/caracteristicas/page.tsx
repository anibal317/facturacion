"use client";

import React, { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import Spinner from "@/components/spinner/Spinner";
import { Navigation } from "@/components/navBar/Navigation";
import Footer from "@/components/footer/Footer";

interface Section {
    description: string;
    items: (string | Record<string, string[]>)[]; // Estructura esperada
}

interface Data {
    [key: string]: Section;
}

const Page: React.FC = () => {
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        // Fetch del archivo JSON desde /public/data.json
        const fetchData = async () => {
            const response = await fetch("/features.json");
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    if (!data) {
        return (
            <div className="flex felx-col justify-center items-center">
                <Spinner />
            </div>
        ) // Muestra un loader mientras se cargan los datos
    }

    return (
        <>
            <Navigation />
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 w-[100rem] ml-[10%] mt-[5%]">
                {Object.entries(data).map(([section, details]) => (
                    <Card key={section}>
                        <CardHeader>
                            <CardTitle>{section}</CardTitle>
                            <CardDescription>{details.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2  list-disc">
                                {details.items.map((item, index) => (
                                    <li key={index}>
                                        {typeof item === "string" ? (
                                            item
                                        ) : (
                                            Object.entries(item).map(([subSection, subItems]) => (
                                                <div key={subSection} className="mt-2">
                                                    <strong>{subSection}</strong>
                                                    <ul className="ml-4 list-disc">
                                                        {subItems.map((subItem, subIndex) => (
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
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Page;
