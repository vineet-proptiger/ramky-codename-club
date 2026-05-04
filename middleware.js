import { NextResponse } from 'next/server'

const SLUG = '/codename-club-class-bangalore'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Correct slug → internally serve home page (URL stays as slug in browser)
  if (pathname === SLUG) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.rewrite(url)
  }

  // Direct root access → show 404
  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/_not-found'
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/codename-club-class-bangalore'],
}
