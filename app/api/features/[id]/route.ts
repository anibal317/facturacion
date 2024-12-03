// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { planSchema } from "@/schemas/planSchema";

// // Obtener un plane por ID
// export async function GET(req: Request, { params }: { params: { id: string } }) {
//     try {
//         const { id } = params;

//         const plan = await prisma.plan.findUnique({
//             where: { id },
//         });

//         if (!plan) {
//             return NextResponse.json(
//                 { error: "plane no encontrado" },
//                 { status: 404 }
//             );
//         }

//         return NextResponse.json(plan, { status: 200 });
//     } catch (error: any) {
//         return NextResponse.json(
//             { message: `Error al obtener el plane, details: error.message `},
//             { status: 500 }
//         );
//     }
// }

// // Actualizar un plane por ID
// export async function PATCH(req: Request, { params }: { params: { id: string } }) {
//     try {
//         const { id } = params;
//         const body = await req.json();

//         // Validar el cuerpo de la solicitud
//         const parsedBody = planSchema.safeParse(body);
//         if (!parsedBody.success) {
//             return NextResponse.json(
//                 { error: "Datos inválidos", details: parsedBody.error.format() },
//                 { status: 400 }
//             );
//         }

//         const updatedplan = await prisma.plan.update({
//             where: { id },
//             data: parsedBody.data,
//         });

//         return NextResponse.json(updatedplan, { status: 200 });
//     } catch (error: any) {
//         if (error.code === "P2025") {
//             return NextResponse.json(
//                 { error: "El plane no existe" },
//                 { status: 404 }
//             );
//         }
//         return NextResponse.json(
//             { message: `Error al actualizar el plane, details: error.message` },
//             { status: 500 }
//         );
//     }
// }

// // Eliminar un plane por ID
// export async function DELETE(req: Request, { params }: { params: { id: string } }) {
//     try {
//         const { id } = params;

//         await prisma.plan.delete({
//             where: { id },
//         });

//         return NextResponse.json(
//             { message: "plane eliminado correctamente" },
//             { status: 200 }
//         );
//     } catch (error: any) {
//         if (error.code === "P2025") {
//             return NextResponse.json(
//                 { error: "El plane no existe" },
//                 { status: 404 }
//             );
//         }
//         return NextResponse.json(
//             { message:` Error al eliminar el plane, details: error.message` },
//             { status: 500 }
//         );
//     }
// }