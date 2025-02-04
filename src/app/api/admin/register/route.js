import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { config } from 'dotenv';

config();

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, password, secret } = await req.json();

    if (secret !== process.env.ADMIN_SECRET) {
      return new Response(JSON.stringify({ error: 'Invalid secret' }), { status: 403 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.create({
      data: { email, password: hashedPassword },
    });

    return new Response(JSON.stringify({ success: true, admin }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to register admin' }), { status: 500 });
  }
}
