import { auth } from '@/instances/instanceAuth'
import { generateDefaultUsername } from '@/utils/auth/generateDefaultUsername'
import { getUserFirstName } from '@/utils/auth/getUserFirstName'
import { getUserSession } from '@/utils/auth/getUserSession'
import { cookies } from 'next/headers'

export const googleOptions = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  async profile(profile) {
    const cookie = cookies()
    const locale = cookie.get('NEXT_LOCALE')?.value

    const user = await getUserSession()

    const { sub: googleId, email, picture, given_name, family_name } = profile
    if (!user) {
      try {
        const { data: userData, error } = await auth.sso.loginUser({
          email
        })

        if (userData && !error) {
          return {
            ...userData
          }
        }

        const { data: createdUserData } = await auth.sso.createUser({
          email,
          firstname: given_name,
          lastname: family_name,
          profile_picture: picture,
          background_picture: 'blank',
          google_id: googleId,
          locale: locale,
          username: generateDefaultUsername(getUserFirstName(email))
        })

        if (createdUserData) {
          return {
            ...createdUserData
          }
        }
      } catch (error) {
        console.error({
          googleOptionsErrorMessage: error.message
        })
      }
    }

    return null
  }
}
