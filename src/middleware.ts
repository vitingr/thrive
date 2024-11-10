import createIntlMiddleware from 'next-intl/middleware'

import {
  localePrefix,
  locales,
  pathsObj
} from './constants/internationalization'
import { NextRequest, NextResponse } from 'next/server'
import { hasUTMStoredMiddleware } from './middlewares/hasUTMStoredMiddleware'
import { getSearchParamsMiddleware } from './middlewares/getSearchParams'
import { getUserAgentMiddleware } from './middlewares/getUserAgent'

const intlMiddleware = createIntlMiddleware({
  defaultLocale: 'pt',
  localePrefix: 'always',
  locales,
  pathnames: pathsObj
})

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
}

export async function middleware(request: NextRequest) {
  if (request.method === 'OPTIONS') {
    return NextResponse.json({}, { headers: corsHeaders })
  }

  const userAgent = getUserAgentMiddleware(request)
  const searchParams = getSearchParamsMiddleware(request)
  const hasUtmStoredData = hasUTMStoredMiddleware(request)
  const utmStaticData = {
    utm_campaign: searchParams?.utm_campaign,
    utm_content: searchParams?.utm_content,
    utm_medium: searchParams?.utm_medium,
    utm_source: searchParams?.utm_source,
    utm_term: searchParams?.utm_term
  }

  const intlResponse = intlMiddleware(request)
  if (intlResponse) {
    intlResponse.cookies.set('current-pathname', request.nextUrl.pathname)
    intlResponse.cookies.set('current-url', request.nextUrl.href)

    intlResponse.cookies.set('searchParams', JSON.stringify(searchParams))
    intlResponse.cookies.set('userAgent', userAgent)

    if (!hasUtmStoredData) {
      intlResponse.cookies.set('utmStaticData', JSON.stringify(utmStaticData), {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60)
      })
    }

    if (request.nextUrl.pathname.includes('platform')) {
      intlResponse.headers.set(
        'Content-Security-Policy',
        `frame-src 'self' https://app.tractian.com https://app-homolog.tractian.com;`
      )
      intlResponse.headers.set(
        'X-Frame-Options',
        `ALLOW-FROM https://app.tractian.com https://app-homolog.tractian.com;`
      )
    }

    return intlResponse
  }

  const response = NextResponse.next()
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  return response
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)'
  ]
}
