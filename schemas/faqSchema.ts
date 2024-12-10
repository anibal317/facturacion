import { z } from "zod";

// Esquema de validación para los datos de un FAQ
export const faqs = z.object({
    question: z.string().min(1, "La pregunta es requerida"),
    answer: z.string().min(1, "La respuesta es requerida"),
    value: z.string().min(1, "El valor es requerido").max(255, "El valor no puede exceder 255 caracteres"),
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    deletedAt: z.date().optional(), // Si necesitas manejar fechas
});