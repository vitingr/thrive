import { Navbar } from '@/components/common/Navbar'
import '@/styles/index.scss'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className="bg-neutral-100">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
