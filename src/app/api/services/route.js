import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  const { name, description, time, price } = await req.json();

  try {
    const service = await prisma.service.create({
      data: { name, description, time: parseInt(time), price: parseFloat(price) },
    });
    return new Response(JSON.stringify(service), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function GET() {
  try {
    const services = await prisma.service.findMany();
    return new Response(JSON.stringify(services), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
}

export async function PUT(req) {
  const { id, name, description, time, price } = await req.json();

  try {
    const service = await prisma.service.update({
      where: { id: parseInt(id) },
      data: { name, description, time: parseInt(time), price: parseFloat(price) },
    });
    return new Response(JSON.stringify(service), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
}

export async function DELETE(req) {
  const { id } = await req.json();

  try {
    const serviceExists = await prisma.service.findUnique({
      where: { id: parseInt(id) },
    });

    if (!serviceExists) {
      return new Response(JSON.stringify({ error: 'Service not found' }), { status: 404 });
    }

    const service = await prisma.service.delete({
      where: { id: parseInt(id) },
    });
    return new Response(JSON.stringify(service), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
}
