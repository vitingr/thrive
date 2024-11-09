import { Navbar } from '@/components/common/Navbar'
import ToastMessage from '@/components/toolkit/ToastMessage'
import { ClerkProvider } from '@clerk/nextjs'

import '@/styles/index.scss'
import { NextPage } from 'next'
import { NextLayoutDefaultProps } from '@/types/nextLayoutDefaultProps'
import { locales } from '@/constants/internationalization'
import { notFound } from 'next/navigation'

const RootLayout: NextPage<NextLayoutDefaultProps> = ({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) => {
  const isValidLocale = locales.some(cur => cur === locale)
  if (!isValidLocale) {
    return notFound()
  }

  return (
    <ClerkProvider>
      <html lang={locale}>
        <body className="bg-neutral-100">
          <ToastMessage />
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
