import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request })
    const { pathname } = request.nextUrl
    const authpage = ["/login", "/register"]
    const routes = ["/", "/cart", "/brands", "/categories", "/productdetails", "/Payment","/allorder"]
    if (!token && routes.includes(pathname)) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
    if (token && authpage.includes(pathname)) {
        return NextResponse.redirect(new URL("/", request.url))
    }

}
export const config = {
    matcher: ["/", "/cart", "/brands", "/categories", "/productdetails", "/login", "/register", "/Payment","/allorder"]
}