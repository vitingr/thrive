import { Button } from '@/components/toolkit/Button'
import { Container } from '@/components/toolkit/Container'
import { getUserSession } from '@/utils/auth/getUserSession'
import Image from 'next/image'
import { UserHighlights } from './UserHighlights'
import { Navigation } from './Navigation'
import { translation } from '@/utils/internationalization/translation'

export const HeroProfile: React.FC = async () => {
  const user = await getUserSession()
  const { raw } = await translation('profile')

  return (
    <Container
      as="section"
      data-cid="hero-profile"
      className="flex flex-col gap-4 rounded-[6px] bg-white px-6 pt-8 lg:gap-8"
    >
      <header className="flex w-full justify-between gap-4 ">
        <figure className="w-auto lg:min-w-[80px]">
          <Image
            src={user.profile_picture}
            alt={user.username}
            width={80}
            height={80}
            className="cursor-pointer rounded-full transition-all duration-300 hover:brightness-125"
          />
        </figure>
        <article className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col">
            <h1 className="font-semibold">
              {user.firstname} {user.lastname}
            </h1>
            <p className="text-sm">Santa Bárbara d'Oeste, SP</p>
          </div>
          <p className="text-sm text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
            culpa accusantium. Alias commodi voluptates et nobis, fuga enim
            sapiente asperiores, quisquam sunt odio est ad! Praesentium
            asperiores aspernatur modi dicta.
          </p>
        </article>
        <article className="flex h-auto w-auto items-start gap-4 lg:min-w-[220px]">
          <Button variant="secondary" className="md:text-sm">
            Editar
          </Button>
          <Button variant="secondaryOutline" className="md:text-sm">
            Ver Perfil
          </Button>
        </article>
      </header>
      <UserHighlights />
      <Navigation copy={raw('heroProfile')} />
    </Container>
  )
}
