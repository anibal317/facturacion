// services/faqService.ts

import { PrismaClient, faqs as FAQModel } from '@prisma/client';
import { faqs as faqSchema } from '@/schemas/faqSchema'; // Asegúrate de que la ruta sea correcta
import { z } from 'zod';

const prisma = new PrismaClient();

// Obtener todos los FAQs
export const getFAQs = async (): Promise<FAQModel[]> => {
    return await prisma.faqs.findMany();
};

// Crear un nuevo FAQ
export const createFAQ = async (faqData: Omit<FAQModel, 'id' | 'createdAt' | 'updatedAt'>): Promise<FAQModel> => {
    // Validar los datos usando Zod
    const parsedData = faqSchema.parse(faqData);

    return await prisma.faqs.create({
        data: {
            question: parsedData.question,
            value: parsedData.value,
            answer: parsedData.answer,
            createdAt: new Date(), // Establecer la fecha de creación
            updatedAt: new Date(), // Establecer la fecha de actualización
            // No incluyas 'id' ni 'deletedAt' si no es necesario
        },
    });
};

// Eliminar un FAQ
export const deleteFAQ = async (id: number): Promise<FAQModel> => {
    return await prisma.faqs.delete({
        where: { id },
    });
};

// Puedes agregar más funciones según sea necesario