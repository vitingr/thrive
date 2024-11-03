import { getMetaData } from '@/utils/getters/getMetaData'
import { SignUp } from '@clerk/nextjs'
import { NextPage } from 'next'

export async function generateMetadata() {
  return getMetaData({
    title:
      'SignUp | Thrive',
    description:
      'Encontre e participe de grupos com pessoas com objetivos saudáveis iguais ao seu na nossa plataforma',
    opengraph: ''
  })
}

const Page: NextPage = () => {
  return (
    <main className="flex w-full items-center justify-center">
      <SignUp />
    </main>
  )
}

export default Page
