import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { faqs } from '../../../schemas/faqSchema';

const prisma = new PrismaClient();

// Obtener una FAQ por ID o todas las FAQs (GET)
export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const pageParam = searchParams.get("page");
    const pageSizeParam = searchParams.get("pageSize");

    // Asegúrate de que pageParam y pageSizeParam sean strings antes de pasarlos a parseInt
    const page = parseInt(pageParam || '1', 10); // Página actual, por defecto 1
    const pageSize = parseInt(pageSizeParam || '10', 10); // Tamaño de página, por defecto 10

    if (id) {
      const numericId = Number(id);

      if (isNaN(numericId)) {
        return NextResponse.json(
          { error: "El ID debe ser un número." },
          { status: 400 }
        );
      }

      const faq = await prisma.faqs.findUnique({
        where: {
          id: numericId,
        },
      });

      if (!faq) {
        return NextResponse.json(
          { error: "FAQ no encontrada." },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { faq },
        { status: 200 }
      );
    } else {
      // Obtener el total de FAQs para calcular el número total de páginas
      const total = await prisma.faqs.count();

      // Obtener las FAQs con paginación
      const faqs = await prisma.faqs.findMany({
        skip: (page - 1) * pageSize, // Saltar los elementos de las páginas anteriores
        take: pageSize, // Tomar el número de elementos especificado
      });

      return NextResponse.json(
        {
          faqs,
          total,
          page,
          pageSize,
          totalPages: Math.ceil(total / pageSize), // Calcular el total de páginas
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error al obtener la FAQ:", error);
    return NextResponse.json(
      { message: "Error al obtener los datos", details: error },
      { status: 500 }
    );
  }
};

// // Crear una nueva FAQ (POST)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validar los datos excluyendo campos generados automáticamente
    const validation = faqs
      .omit({ id: true, createdAt: true, updatedAt: true })
      .safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', issues: validation.error.format() },
        { status: 400 }
      );
    }

    // Crear una nueva FAQ en la base de datos
    const newFaq = await prisma.faqs.create({
      data: {
        ...validation.data,
        createdAt: new Date(), // Proveer valores explícitos
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(newFaq, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear la FAQ', data: error },
      { status: 500 }
    );
  }
}


// // Actualizar una FAQ por ID (PUT)
// export async function PUT(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const validation = faqs
//       .omit({ id: true, createdAt: true, updatedAt: true })
//       .safeParse(body);

//     if (!validation.success) {
//       return NextResponse.json(
//         { error: 'Datos inválidos', issues: validation.error.format() },
//         { status: 400 }
//       );
//     }

//     const updatedFaq = await prisma.faqs.update({
//       where: { id: body.id },
//       data: validation.data,
//     });

//     return NextResponse.json(updatedFaq, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Error al actualizar la FAQ', data: error },
//       { status: 500 }
//     );
//   }
// }

// // Eliminar una FAQ por ID (DELETE)
// export const DELETE = async (req: NextRequest) => {
//   try {
//     const { searchParams } = new URL(req.url);
//     const id = searchParams.get("id");

//     if (!id) {
//       return NextResponse.json(
//         { error: "El ID es obligatorio para eliminar." },
//         { status: 400 }
//       );
//     }

//     // Convertir el ID a número
//     const numericId = Number(id);

//     // Verificar si la conversión fue exitosa
//     if (isNaN(numericId)) {
//       return NextResponse.json(
//         { error: "El ID debe ser un número." },
//         { status: 400 }
//       );
//     }

//     // Actualizar el campo `deletedAt` para marcar el registro como eliminado
//     const faq = await prisma.faqs.update({
//       where: {
//         id: numericId, // Usar el ID numérico
//       },
//       data: {
//         deletedAt: new Date(), // Marcar la fecha de eliminación
//       },
//     });

//     return NextResponse.json(
//       { message: "FAQ eliminada lógicamente", faq },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Error al eliminar la FAQ", data: error },
//       { status: 500 }
//     );
//   }
// };



/**
 * Borrado fisicamente
 * export const DELETE = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
 
    if (!id) {
      return NextResponse.json(
        { error: "El ID es obligatorio para eliminar." },
        { status: 400 }
      );
    }
 
    // Eliminar el registro de la base de datos
    const faq = await prisma.faq.delete({
      where: {
        id: isNaN(Number(id)) ? id : Number(id), // Convertir a número si es necesario
      },
    });
 
    return NextResponse.json(
      { message: "FAQ eliminada físicamente", faq },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar la FAQ", data: error },
      { status: 500 }
    );
  }
};
  */


