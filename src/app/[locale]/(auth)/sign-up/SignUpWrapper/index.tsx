import { SignUp } from '@clerk/nextjs'

export const SignUpWrapper: React.FC = () => {
  return (
    <main className="flex w-full items-center justify-center">
      <SignUp />
    </main>
  )
}
