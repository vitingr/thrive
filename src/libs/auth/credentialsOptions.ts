import { auth } from '@/instances/instanceAuth'
import { User as NextAuthUser } from 'next-auth'

export const credentialsOptions = {
  id: 'credentials',
  name: 'credentials',
  credentials: {
    email: {
      label: 'email',
      type: 'email'
    },
    codeConfirm: { label: 'codeConfirm', type: 'string' }
  },
  async authorize(credentials) {
    const {
      data: { user }
    } = await auth.users.loginUser(credentials)

    return {
      ...user
    } as unknown as NextAuthUser
  }
}
