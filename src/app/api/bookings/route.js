import { PrismaClient } from '@prisma/client';
import { toZonedTime } from 'date-fns-tz';
import { startOfDay, endOfDay } from 'date-fns';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { clientName, phoneNumber, serviceId, startTime } = await req.json();

    const parsedServiceId = parseInt(serviceId, 10);
    const parsedStartTime = new Date(`${startTime}Z`);

    if (isNaN(parsedStartTime.getTime())) {
      return new Response(JSON.stringify({ error: 'Invalid start time' }), { status: 400 });
    }

    const bishkekTime = toZonedTime(new Date(), 'Asia/Bishkek');
    
    if (parsedStartTime < bishkekTime) {
      return new Response(JSON.stringify({ error: 'Start time cannot be in the past' }), { status: 400 });
    }

    if (!clientName || !phoneNumber || isNaN(parsedServiceId) || !parsedStartTime) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
    }

    const service = await prisma.service.findUnique({
      where: { id: parsedServiceId },
    });

    if (!service) {
      return new Response(JSON.stringify({ error: 'Service not found' }), { status: 404 });
    }

    const endTime = new Date(parsedStartTime.getTime() + service.time * 60000);

    const existingBooking = await prisma.booking.findFirst({
      where: {
        serviceId: parsedServiceId,
        startTime: { lt: endTime }, 
        endTime: { gt: parsedStartTime },
      },
    });

    if (existingBooking) {
      return new Response(JSON.stringify({ error: 'Time slot is already booked' }), { status: 405 });
    }

    const dayStart = startOfDay(parsedStartTime);
    const dayEnd = endOfDay(parsedStartTime);

    const existingPhoneBooking = await prisma.booking.findFirst({
      where: {
        phoneNumber,
        startTime: { gte: dayStart, lte: dayEnd },
      },
    });

    if (existingPhoneBooking) {
      return new Response(JSON.stringify({ error: 'A booking with this phone number already exists for this day' }), { status: 405 });
    }

    const newBooking = await prisma.booking.create({
      data: {
        clientName,
        phoneNumber,
        service: { connect: { id: parsedServiceId } },
        startTime: parsedStartTime,
        endTime,
      },
    });

    return new Response(JSON.stringify(newBooking), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message}), { status: 500 });
  }
}



export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      include: { service: true },
    });
    return new Response(JSON.stringify(bookings), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const { id, clientName, phoneNumber, serviceId, startTime } = await req.json();

    const parsedServiceId = parseInt(serviceId, 10);
    const parsedStartTime = new Date(startTime);

    if (!id || !clientName || !phoneNumber || isNaN(parsedServiceId) || !parsedStartTime) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
    }

    const service = await prisma.service.findUnique({
      where: { id: parsedServiceId },
    });

    if (!service) {
      return new Response(JSON.stringify({ error: 'Service not found' }), { status: 404 });
    }

    const endTime = new Date(parsedStartTime.getTime() + service.time * 60000);

    // Check for conflicts with existing bookings
    const existingBooking = await prisma.booking.findFirst({
      where: {
        serviceId: parsedServiceId,
        startTime: { lt: endTime },
        endTime: { gt: parsedStartTime },
        NOT: { id },
      },
    });

    if (existingBooking) {
      return new Response(JSON.stringify({ error: 'Time slot is already booked' }), { status: 405 });
    }

    const updatedBooking = await prisma.booking.update({
      where: { id },
      data: {
        clientName,
        phoneNumber,
        service: { connect: { id: parsedServiceId } },
        startTime: parsedStartTime,
        endTime,
      },
    });

    return new Response(JSON.stringify(updatedBooking), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}


export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ error: 'Booking ID is required' }), { status: 400 });
    }

    const deletedBooking = await prisma.booking.delete({
      where: { id },
    });

    return new Response(JSON.stringify(deletedBooking), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
