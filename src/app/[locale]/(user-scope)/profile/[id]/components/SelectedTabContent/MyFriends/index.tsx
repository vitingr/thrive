import { EmptyPapertray } from '@/assets/common/EmptyPapertray'
import { Container } from '@/components/toolkit/Container'

export const MyFriends: React.FC = () => {
  return (
    <Container
      as="section"
      className="animate__animated animate__fadeIn flex flex-col gap-4 rounded-[6px] bg-white px-6 py-8 lg:gap-8"
      data-cid="my-friends-profile"
    >
      <article className="flex w-full flex-col gap-8 lg:gap-16">
        <div className="flex w-full flex-col">
          <h2 className="font-medium lg:text-xl">Minhas amizades</h2>
          <p className="text-sm text-slate-500">
            Veja aqui as pessoas que você acompanha no seu feed
          </p>
        </div>
        <div className="flex w-full items-center justify-center gap-2 pb-4">
          <EmptyPapertray className="h-5 w-5" />
          <p className="text-slate-500">
            Você não segue ninguém até o momento...
          </p>
        </div>
      </article>
    </Container>
  )
}
