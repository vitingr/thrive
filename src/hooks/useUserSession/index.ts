'use client'

import { User } from '@/types/models/user'
import { SessionContextValue, useSession } from 'next-auth/react'

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
