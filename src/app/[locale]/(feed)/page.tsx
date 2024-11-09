import Footer from '@/components/common/Footer'
import { getMetaData } from '@/utils/getters/getMetaData'

import { Feed } from './components/Feed'

export async function generateMetadata() {
  return getMetaData({
    title:
      'Encontre e participe de grupos com pessoas com objetivos saudáveis iguais ao seu na nossa plataforma',
    description:
      'Encontre e participe de grupos com pessoas com objetivos saudáveis iguais ao seu na nossa plataforma',
    opengraph: ''
  })
}

export default function Home() {
  return (
    <main className="pt-8">
      <Feed />
      <Footer />
    </main>
  )
}
