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
import features from "@/data/features.json"

interface Section {
    description: string;
    items: (string | Record<string, string[]>)[]; // Estructura esperada
}

interface Data {
    [key: string]: Section;
}
const Page: React.FC = () => {
    const [data, setData] = useState(features);

    if (!data) {
        return (
            <div className="flex felx-col justify-center items-center">
                <Spinner />
            </div>
        )
    }

    return (
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
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
                                                    {subItems.map((subItem: string, subIndex: string) => (
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
    );
};

export default Page;
