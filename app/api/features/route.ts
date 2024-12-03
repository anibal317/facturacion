import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ message: `Feature ID: ${params.id}` });
}