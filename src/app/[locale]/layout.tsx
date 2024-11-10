import { Navbar } from '@/components/common/Navbar'
import ToastMessage from '@/components/toolkit/ToastMessage'

import { NextPage } from 'next'
import { locales } from '@/constants/internationalization'
import { notFound } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/auth'
import NextAuthProvider from '@/contexts/NextAuthProvider'
import { PropsWithChildren } from 'react'
import { Locale } from '@/constants/internationalization/types'

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
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
