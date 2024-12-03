// import { NextResponse } from "next/server";
// import { prisma } from "@/libs/prisma";
// import { clientSchema } from "@/schemas/planSchema";

// // Obtener un cliente por ID
// export async function GET(req: Request, { params }: { params: { id: string } }) {
//     try {
//         const { id } = params;

//         const client = await prisma.client.findUnique({
//             where: { id },
//         });

//         if (!client) {
//             return NextResponse.json(
//                 { error: "Cliente no encontrado" },
//                 { status: 404 }
//             );
//         }

//         return NextResponse.json(client, { status: 200 });
//     } catch (error: any) {
//         return NextResponse.json(
//             { message: Error al obtener el cliente, details: error.message },
//             { status: 500 }
//         );
//     }
// }

// // Actualizar un cliente por ID
// export async function PATCH(req: Request, { params }: { params: { id: string } }) {
//     try {
//         const { id } = params;
//         const body = await req.json();

//         // Validar el cuerpo de la solicitud
//         const parsedBody = clientSchema.safeParse(body);
//         if (!parsedBody.success) {
//             return NextResponse.json(
//                 { error: "Datos inválidos", details: parsedBody.error.format() },
//                 { status: 400 }
//             );
//         }

//         const updatedClient = await prisma.client.update({
//             where: { id },
//             data: parsedBody.data,
//         });

//         return NextResponse.json(updatedClient, { status: 200 });
//     } catch (error: any) {
//         if (error.code === "P2025") {
//             return NextResponse.json(
//                 { error: "El cliente no existe" },
//                 { status: 404 }
//             );
//         }
//         return NextResponse.json(
//             { message: Error al actualizar el cliente, details: error.message },
//             { status: 500 }
//         );
//     }
// }

// // Eliminar un cliente por ID
// export async function DELETE(req: Request, { params }: { params: { id: string } }) {
//     try {
//         const { id } = params;

//         await prisma.client.delete({
//             where: { id },
//         });

//         return NextResponse.json(
//             { message: "Cliente eliminado correctamente" },
//             { status: 200 }
//         );
//     } catch (error: any) {
//         if (error.code === "P2025") {
//             return NextResponse.json(
//                 { error: "El cliente no existe" },
//                 { status: 404 }
//             );
//         }
//         return NextResponse.json(
//             { message: Error al eliminar el cliente, details: error.message },
//             { status: 500 }
//         );
//     }
// }

import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ message: `Feature ID: ${params.id}` });
}