// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { clientSchema } from "@/schemas/planSchema";


// // Obtener todos los clientes
// export async function GET() {
//     try {
//         const clients = await prisma.client.findMany({
//             where: { deleteAt: null },
//         });
//         return NextResponse.json(clients, { status: 200 });
//     } catch (error: any) {
//         return NextResponse.json(
//             { message: "Error al obtener los datos, details: error.message" },
//             { status: 500 }
//         );
//     }
// }

// // Crear un nuevo cliente
// export async function POST(req: Request) {
//     try {
//         const body = await req.json();

//         // Validar el cuerpo de la solicitud
//         const parsedBody = clientSchema.safeParse(body);
//         if (!parsedBody.success) {
//             return NextResponse.json(
//                 { error: "Datos inválidos", details: parsedBody.error.format() },
//                 { status: 400 }
//             );
//         }
//         // Asegúrate de que data tenga el formato correcto
//         const newItem = await prisma.client.create({
//             data: {
//                 name: body.name,
//                 cuit: body.cuit,
//                 address: body.address || null,
//                 phone: body.phone || null,
//                 email: body.email || null,
//                 city: body.city || null,
//             },
//         });

//         return NextResponse.json(newItem, { status: 201 });
//     } catch (error: any) {
//         if (error.code === "P2002") {
//             return NextResponse.json(
//                 { error: "El recurso ya existe. Verifica los campos únicos." },
//                 { status: 409 }
//             );
//         }
//         return NextResponse.json(
//             { message: "Error al crear el cliente, details: error.message" },
//             { status: 500 }
//         );
//     }
// }

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: `Feature ID:` });
}