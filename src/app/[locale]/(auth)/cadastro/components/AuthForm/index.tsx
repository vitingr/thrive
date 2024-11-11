import { Button } from '@/components/toolkit/Button'
import { AuthFormProps } from './types'
import Image from 'next/image'

export const AuthForm: React.FC<AuthFormProps> = ({ copy, locale }) => {
  return (
    <form className="animate__animated animate__fadeIn flex flex-col items-center gap-8 rounded-md bg-white p-8 shadow lg:min-w-[400px]">
      <article className="flex w-full flex-col items-center">
        <h1 className="text-center text-3xl font-semibold">{copy.title}</h1>
        <p className="text-center text-sm text-slate-500">{copy.description}</p>
      </article>
      <section className="flex w-full flex-col gap-4">
        <input
          className="w-full rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-600 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:ring-indigo-500"
          type="text"
          placeholder={copy.email.placeholder}
        />
        <input
          className="w-full rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-600 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:ring-indigo-500"
          type="text"
          placeholder={copy.password.placeholder}
        />
        <Button className="min-w-full rounded-md md:text-sm">
          {copy.button.label}
        </Button>
      </section>
      <div className="flex w-full items-center gap-4">
        <hr className="h-0.5 w-full text-slate-300" />
        <p className="text-sm text-slate-400">{copy.or}</p>
        <hr className="h-0.5 w-full text-slate-300" />
      </div>
      <div className="flex w-full cursor-pointer items-center gap-2 rounded-md border border-slate-200 px-2 py-1.5 transition-all duration-300 hover:bg-slate-50">
        <figure className="w-8">
          <Image
            className="w-8"
            width={512}
            height={512}
            alt="Google Logo"
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          />
        </figure>
        <p className="text-sm text-slate-500">{copy.loginWithGoogle}</p>
      </div>
    </form>
  )
}
