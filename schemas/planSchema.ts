import { z } from "zod";

// Esquema de validación para los datos de un cliente
export const planSchema = z.object({
    isRecommen: z.boolean(),
    title: z.string().min(1, "El título es requerido"),
    subtitle: z.string().min(1, "El título es requerido"),
    originalPrrice: z.string().min(1, "El título es requerido"),
    discounted: z.string().min(1, "El título es requerido").optional(),
    discount: z.string().min(1, "El título es requerido"),
    freeMonths: z.string().min(1, "El título es requerido"),
    features: z.string().min(1, "El título es requerido"),

});