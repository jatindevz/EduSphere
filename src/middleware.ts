import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  const { pathname } = req.nextUrl

  // Redirect logged-in users away from login or register pages
  if (token && (pathname === '/login'  || pathname === '/')) {
    return NextResponse.redirect(new URL('/userprofile', req.url))
  }

  // Redirect unauthenticated users away from protected routes
  if (!token && (pathname.startsWith('/dashboard') || pathname.startsWith('/userprofile'))) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/login', '/dashboard/:path*', '/userprofile/:path*' , '/']
}
