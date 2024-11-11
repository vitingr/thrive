import { NextPageDefaultProps } from '@/types/nextPageDefaultProps'
import { getMetaData } from '@/utils/getters/getMetaData'
import { NextPage } from 'next'
import { AuthForm } from './components/AuthForm'
import { translation } from '@/utils/internationalization/translation'
import { CreateAccount } from './components/CreateAccount'

export async function generateMetadata() {
  return getMetaData({
    title:
      'Encontre e participe de grupos com pessoas com objetivos saudáveis iguais ao seu na nossa plataforma',
    description:
      'Encontre e participe de grupos com pessoas com objetivos saudáveis iguais ao seu na nossa plataforma',
    opengraph: ''
  })
}

const Page: NextPage<NextPageDefaultProps> = async ({ params: { locale } }) => {
  const { raw } = await translation('auth')

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-slate-100">
      <AuthForm copy={raw('form')} locale={locale} />
      <CreateAccount copy={raw('form')} />
    </main>
  )
}

export default Page
