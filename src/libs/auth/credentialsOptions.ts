import { User as NextAuthUser } from 'next-auth'

import { auth } from '@/instances/instanceAuth'

export const credentialsOptions = {
  id: 'credentials',
  name: 'credentials',
  credentials: {
    email: {
      label: 'email',
      type: 'email'
    },
    password: {
      label: 'password',
      type: 'password'
    }
  },
  async authorize(credentials) {
    console.log('getulio')
    const {
      data: { user }
    } = await auth.users.loginUser(credentials)

    console.log(user)

    return {
      ...user
    } as unknown as NextAuthUser
  }
}
