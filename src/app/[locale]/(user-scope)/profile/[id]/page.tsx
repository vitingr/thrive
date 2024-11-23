import Footer from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/getters/getMetaData'

import { NextPage } from 'next'
import { NextPageDefaultProps } from '@/types/nextPageDefaultProps'
import { Sidebar } from '@/app/[locale]/(feed)/components/Feed/Sidebar'
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
  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-2xl justify-between gap-4 px-4 py-6 lg:max-w-7xl lg:gap-8 lg:py-12 xl:px-0">
        <ProfileFeed />
        <Sidebar />
      </main>
      <Footer />
    </>
  )
}

export default Page
