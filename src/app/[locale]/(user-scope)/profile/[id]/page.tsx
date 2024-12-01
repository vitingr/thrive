import { NextPage } from 'next'
import { setRequestLocale } from 'next-intl/server'

import { Sidebar } from '@/app/[locale]/(feed)/components/Feed/Sidebar'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import Footer from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { NextPageDefaultProps } from '@/types/nextPageDefaultProps'
import { getMetaData } from '@/utils/getters/getMetaData'

import { ProfileFeed } from './components/ProfileFeed'

export async function generateMetadata() {
  return getMetaData({
    title: 'Thrive',
    description:
      'Encontre e participe de grupos com pessoas com objetivos saudáveis iguais ao seu na nossa plataforma',
    opengraph: ''
  })
}

const Page: NextPage<NextPageDefaultProps> = async ({ params: { locale } }) => {
  setRequestLocale(locale)

  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-[62vh] max-w-2xl flex-col gap-4 px-4 py-6 lg:max-w-7xl lg:gap-8 lg:py-12 xl:px-0">
        <span className="w-full px-4">
          <Breadcrumb items={[{ name: 'Perfil', href: '#' }]} />
        </span>
        <div className="flex w-full justify-between gap-4 lg:gap-8">
          <ProfileFeed />
          <Sidebar />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Page
