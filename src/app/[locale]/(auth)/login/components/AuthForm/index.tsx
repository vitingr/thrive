'use client'

import { Button } from '@/components/toolkit/Button'
import { AuthFormProps, isLoadingSubmitProps, LoginInputs } from './types'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from './schemas'
import { auth } from '@/instances/instanceAuth'
import { toast } from 'react-toastify'
import useRefreshRoute from '@/hooks/useRefreshRoute'
import { useUserSession } from '@/hooks/useUserSession'
import { useRouter } from 'next/navigation'

export const AuthForm: React.FC<AuthFormProps> = ({ copy, locale }) => {
  const router = useRouter()
  const { user } = useUserSession()
  const { refreshRoute } = useRefreshRoute({})

  const {
    register,
    handleSubmit,
    formState: { errors, isValidating }
  } = useForm({
    resolver: zodResolver(loginSchema({ locale }))
  })

  const [isLoadingSubmit, setIsLoadingSubmit] = useState<isLoadingSubmitProps>({
    email: false,
    google: false
  })

  const onSubmit: SubmitHandler<LoginInputs> = async ({ email, password }) => {
    setIsLoadingSubmit(prev => ({
      ...prev,
      email: true
    }))

    try {
      const { error: accountDoesNotExist } = await auth.users.getUserByEmail({
        email
      })

      if (accountDoesNotExist) {
        toast.error(copy.userNotFound)
        return
      }

      const response = await signIn('credentials', {
        email,
        password,
        redirect: true,
        callbackUrl: undefined
      })

      if (response?.error) {
        throw new Error(response.error)
      }
    } catch (loginUserErr) {
      console.error({ message: loginUserErr })
    } finally {
      setIsLoadingSubmit({
        email: false,
        google: false
      })
    }
  }

  const handleSignInWithGoogle = async () => {
    console.log('a')
    setIsLoadingSubmit(prev => ({
      ...prev,
      google: true
    }))
    console.log('b')
    try {
      signIn('google')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (user) {
      refreshRoute()
    }
  }, [user, refreshRoute])

  return (
    <form
      className="animate__animated animate__fadeIn flex flex-col items-center gap-8 rounded-md bg-white p-8 shadow lg:min-w-[400px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <article className="flex w-full flex-col items-center">
        <h1 className="text-center text-3xl font-semibold">{copy.title}</h1>
        <p className="text-center text-sm text-slate-500">{copy.description}</p>
      </article>
      <section className="flex w-full flex-col gap-4">
        <input
          className="w-full rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-600 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:ring-indigo-500"
          type="text"
          id='email'
          minLength={8}
          maxLength={80}
          spellCheck={false}
          placeholder={copy.email.placeholder}
          {...register('email')}
          required
        />
        {errors.email && <span>{errors.root.message}</span>}
        <input
          className="w-full rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-600 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:ring-indigo-500"
          type="password"
          id="password"
          minLength={8}
          maxLength={40}
          spellCheck={false}
          placeholder={copy.password.placeholder}
          {...register('password')}
          required
        />
        {errors.password && <span>{errors.root.message}</span>}
        <Button
          type="submit"
          isLoading={isLoadingSubmit.email}
          className="min-w-full rounded-md md:text-sm"
        >
          {copy.button.label}
        </Button>
      </section>
      <div className="flex w-full items-center gap-4">
        <hr className="h-0.5 w-full text-slate-300" />
        <p className="text-sm text-slate-400">{copy.or}</p>
        <hr className="h-0.5 w-full text-slate-300" />
      </div>
      <Button
        className="flex w-full cursor-pointer items-center gap-2 rounded-md border border-slate-200 px-2 py-1.5 transition-all duration-300 hover:bg-slate-50"
        variant="custom"
        onClick={() => handleSignInWithGoogle()}
      >
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
      </Button>
    </form>
  )
}
