import { SignIn } from "@clerk/nextjs"

export const SignInWrapper: React.FC = () => {
  return (
    <main className="flex w-full items-center justify-center">
      <SignIn />
    </main>
  )
}
