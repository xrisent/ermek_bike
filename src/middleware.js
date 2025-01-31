import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req) {
  const cookieJar = await cookies();
  const token = cookieJar.get('token')?.value;
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.nextUrl.origin));
    }

    try {
      await jwtVerify(token, SECRET); 
    } catch (error) {
      return NextResponse.redirect(new URL('/admin/login', req.nextUrl.origin));
    }
  }

  if (pathname === '/admin/login' && token) {
    try {
      await jwtVerify(token, SECRET); 
      return NextResponse.redirect(new URL('/admin', req.nextUrl.origin));
    } catch (error) {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  runtime: 'experimental-edge',  
  matcher: ['/admin/:path*', '/admin/login'],
};
