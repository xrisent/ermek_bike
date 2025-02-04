import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  const id = req.nextUrl.pathname.split('/').pop();

  try {
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 });
    }

    const service = await prisma.service.findUnique({
      where: { id: parseInt(id) },
    });

    if (!service) {
      return new Response(JSON.stringify({ error: 'Service not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(service), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
}


export async function PUT(req) {
    const id = req.nextUrl.pathname.split('/').pop();
    
    try {
      if (!id) {
        return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 });
      }
  
      const { name, description, price, time } = await req.json();
  
      if (!name || !description || !price || !time) {
        return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
      }
  
      const service = await prisma.service.update({
        where: { id: parseInt(id) },
        data: { name, description, price: parseFloat(price), time: parseInt(time) },
      });
  
      if (!service) {
        return new Response(JSON.stringify({ error: 'Service not found' }), { status: 404 });
      }
  
      return new Response(JSON.stringify(service), { status: 200 });
    } catch (err) {
        console.log(err)
      return new Response(JSON.stringify({ error: err }), { status: 500 });
    }
  }