import { getMetaData } from '@/utils/getters/getMetaData'
import { NextPage } from 'next'

import { NextPageDefaultProps } from '@/types/nextPageDefaultProps'
import { SignInWrapper } from './SignInWrapper'

export async function generateMetadata() {
  return getMetaData({
    title: 'SignIn | Thrive',
    description:
      'Encontre e participe de grupos com pessoas com objetivos saudáveis iguais ao seu na nossa plataforma',
    opengraph: ''
  })
}

const Page: NextPage<NextPageDefaultProps> = ({ params: { locale } }) => {
  return <SignInWrapper />
}

export default Page
