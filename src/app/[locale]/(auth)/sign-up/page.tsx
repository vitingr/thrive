import { getMetaData } from '@/utils/getters/getMetaData'
import { NextPage } from 'next'
import { SignUpWrapper } from './SignUpWrapper'
import { NextPageDefaultProps } from '@/types/nextPageDefaultProps'

export async function generateMetadata() {
  return getMetaData({
    title:
      'SignUp | Thrive',
    description:
      'Encontre e participe de grupos com pessoas com objetivos saudáveis iguais ao seu na nossa plataforma',
    opengraph: ''
  })
}

const Page: NextPage<NextPageDefaultProps> = ({ params: { locale } }) => {
  return <SignUpWrapper />
}

export default Page
