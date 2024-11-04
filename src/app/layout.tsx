import { Navbar } from '@/components/common/Navbar'
import ToastMessage from '@/components/toolkit/ToastMessage'
import '@/styles/index.scss'
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="pt">
        <body className="bg-neutral-100">
          <ToastMessage />
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
