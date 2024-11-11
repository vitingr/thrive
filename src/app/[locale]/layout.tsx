import { NextPage } from 'next'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import { PropsWithChildren } from 'react'

import ToastMessage from '@/components/toolkit/ToastMessage'
import { locales } from '@/constants/internationalization'
import { Locale } from '@/constants/internationalization/types'
import NextAuthProvider from '@/contexts/NextAuthProvider'
import { authOptions } from '@/libs/auth'

import '@/styles/index.scss'

interface RootLayoutProps extends PropsWithChildren {
  params: { locale: Locale }
}

export const generateStaticParams = () => {
  return locales?.map(locale => ({ locale }))
}

const RootLayout: NextPage<RootLayoutProps> = async ({
  children,
  params: { locale }
}) => {
  if (!locales.includes(locale)) notFound()

  const session = await getServerSession(authOptions)

  return (
    <html lang={locale}>
      <body className="bg-neutral-100">
        <NextAuthProvider session={session}>
          <ToastMessage />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
