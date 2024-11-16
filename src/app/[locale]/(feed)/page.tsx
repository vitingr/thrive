import Footer from '@/components/common/Footer'
import { getMetaData } from '@/utils/getters/getMetaData'

import { Feed } from './components/Feed'
import { Navbar } from '@/components/common/Navbar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/common/DropdownMenu'

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
