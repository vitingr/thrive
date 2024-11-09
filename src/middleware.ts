import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import createIntlMiddleware from 'next-intl/middleware'
// import { NextRequest, NextResponse } from 'next/server'

import {
  localePrefix,
  locales,
  pathsObj
} from './constants/internationalization'

const isProtectedRoute = createRouteMatcher(['/feed(.*)'])

const intlMiddleware = createIntlMiddleware({
  defaultLocale: 'pt',
  localePrefix: 'always',
  locales,
  pathnames: pathsObj
})

export default clerkMiddleware((auth, req) => {
  return intlMiddleware(req)
})

// export async function middleware(request: NextRequest) {
//   const intlResponse = intlMiddleware(request)
//   if (intlResponse) {
//     intlResponse.cookies.set('current-pathname', request.nextUrl.pathname)
//     intlResponse.cookies.set('current-url', request.nextUrl.href)

//     return intlResponse
//   }

//   const response = NextResponse.next()
//   return response
// }

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)'
  ]
}
