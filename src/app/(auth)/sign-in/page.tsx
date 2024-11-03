import { getMetaData } from '@/utils/getters/getMetaData'
import { SignIn } from '@clerk/nextjs'
import { NextPage } from 'next'

export async function generateMetadata() {
  return getMetaData({
    title: 'SignIn | Thrive',
    description:
      'Encontre e participe de grupos com pessoas com objetivos saudáveis iguais ao seu na nossa plataforma',
    opengraph: ''
  })
}

const Page: NextPage = () => {
  return (
    <main className="flex w-full items-center justify-center">
      <SignIn />
    </main>
  )
}

export default Page
