import { User as NextAuthUser } from 'next-auth'

import { auth } from '@/instances/instanceAuth'
import { getUserSession } from '@/utils/auth/getUserSession'
import { cookies } from 'next/headers'
import { generateDefaultUsername } from '@/utils/auth/generateDefaultUsername'
import { getUserFirstName } from '@/utils/auth/getUserFirstName'
import { generateHash } from '@/utils/auth/generateHash'

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
    },
    name: {
      label: 'username',
      type: 'text'
    }
  },
  async authorize(credentials) {
    const cookie = cookies()
    const locale = cookie.get('NEXT_LOCALE')?.value

    const user = await getUserSession()

    if (!user) {
      try {
        if (credentials.action === 'signIn') {
          const { email, password } = credentials

          const { data: userData, error } = await auth.sso.loginUser({
            email,
            password
          })

          if (userData && !error) {
            return {
              ...userData
            }
          }
        }

        if (credentials.action === 'signUp') {
          const { name, email, password } = credentials

          const hashedPassword = await generateHash({ password })
          const fullName = name.trim().split(' ')

          const firstName = fullName[0]
          const lastName = fullName.slice(1).join(' ')

          const { data: createdUserData } = await auth.sso.createUser({
            email,
            firstname: firstName,
            lastname: lastName,
            profile_picture:
              'https://christopherscottedwards.com/wp-content/uploads/2018/07/Generic-Profile.jpg',
            background_picture: 'https://wallpapercave.com/wp/wp10824842.jpg',
            locale,
            password: hashedPassword,
            username: generateDefaultUsername(firstName)
          })

          if (createdUserData) {
            const { data: loginData, error: loginError } =
              await auth.sso.loginUser({
                email,
                password
              })

            if (loginData && !loginError) {
              return {
                ...loginData
              }
            }
          }
        }
      } catch (error) {
        console.error({
          credentialsOptionsErrorMessage: error.message
        })
      }
    }

    // const {
    //   data: { user }
    // } = await auth.users.loginUser(credentials)

    return {
      id: user.id,
      ...user
    }
  }
}
