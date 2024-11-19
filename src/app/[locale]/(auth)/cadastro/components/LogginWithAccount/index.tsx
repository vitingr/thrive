import { LogginWithAccountProps } from './types'

export const LogginWithAccount: React.FC<LogginWithAccountProps> = ({
  copy
}) => {
  return (
    <section className="animate__animated animate__fadeIn flex flex-col items-center gap-8 rounded-md bg-white p-8 shadow lg:min-w-[400px]">
      <p
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: copy.alreadyHaveAccount.label }}
      />
    </section>
  )
}
