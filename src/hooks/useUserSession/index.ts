'use client'

import { SessionContextValue, useSession } from 'next-auth/react'

import { User } from '@/types/models/user'

export const useUserSession = (): {
  user?: User
  update: SessionContextValue['update']
} => {
  const { data, update } = useSession() ?? {}

  return {
    // @ts-expect-error
    user: data?.user,
    update
  }
}
