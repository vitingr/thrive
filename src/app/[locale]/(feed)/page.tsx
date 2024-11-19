import Footer from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/getters/getMetaData'

import { Feed } from './components/Feed'

export async function generateMetadata() {
  return getMetaData({
    title: 'Thrive',
    description:
      'Encontre e participe de grupos com pessoas com objetivos saudáveis iguais ao seu na nossa plataforma',
    opengraph: ''
  })
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Feed />
      </main>
      <Footer />
    </>
  )
}
