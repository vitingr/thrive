import { auth } from '@/instances/instanceAuth'
import { getUserSession } from '@/utils/auth/getUserSession'

export const googleOptions = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  async profile(profile) {
    // const cookie = cookies()
    // const locale = cookie.get('NEXT_LOCALE')?.value
    const user = await getUserSession()

    const { sub: googleId, email, picture, name } = profile

    if (!user) {
      try {
        const { data: userData } = await auth.sso.loginUser({
          googleId
        })

        if (userData) {
          return {
            ...userData,
            profilePicture: picture,
            id: googleId
          }
        }

        const { data: createdUserData } = await auth.sso.createUser({
          email,
          googleId,
          profilePicture: picture,
          fullName: name
        })

        if (createdUserData) {
          return {
            ...createdUserData,
            profilePicture: picture,
            id: googleId
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
