import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
    }

    const token = jwt.sign({ id: admin.id, email: admin.email }, SECRET, { expiresIn: '1d' });
    console.log(SECRET);

    return new Response(JSON.stringify({ token }), {
      status: 200,
      headers: { 'Set-Cookie': `token=${token}; HttpOnly; Path=/;` },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Login failed' }), { status: 500 });
  }
}
