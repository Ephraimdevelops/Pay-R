import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    // Only protect /admin routes
    if (req.nextUrl.pathname.startsWith('/admin')) {
        // Check for Basic Auth header
        const authorizationHeader = req.headers.get('authorization')

        if (authorizationHeader) {
            const basicAuth = authorizationHeader.split(' ')[1]
            const [user, pwd] = atob(basicAuth).split(':')

            // Validate against environment variables
            // Default to "admin" if no user env var is set, but password is strictly required
            const validUser = process.env.ADMIN_USER || 'admin'
            const validPass = process.env.ADMIN_PASSWORD

            if (user === validUser && pwd === validPass) {
                return NextResponse.next()
            }
        }

        // If no auth or invalid auth, return 401 to prompt browser login
        return new NextResponse('Authentication required', {
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Secure Admin Area"',
            },
        })
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/admin/:path*',
}
