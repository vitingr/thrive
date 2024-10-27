import { instanceContent } from '@/instances/instanceContent'
import { generateDefaultUsername } from '@/utils/auth/generateDefaultUsername'
import { currentUser } from '@clerk/nextjs/server'

export const GET = async () => {
  try {
    const session = await currentUser()

    const userExists = instanceContent.users.getUserByEmail({
      email: session?.emailAddresses[0].emailAddress ?? ''
    })

    if (!userExists) {
      instanceContent.users.createUser({
        background_picture:
          'https://wallpapers.com/images/hd/minimalist-simple-linkedin-background-cccrhcvkvmzfxu0s.jpg',
        email: session?.emailAddresses?.[0]?.emailAddress || '',
        firstname: session?.firstName || '',
        lastname: session?.lastName || '',
        profile_picture: session?.imageUrl || '',
        username: generateDefaultUsername(session?.firstName || ''),
        uid: session?.id || '',
        followers: 0,
        following: 0
      })
    }

    return new Response(JSON.stringify(session), { status: 200 })
  } catch (error) {
    return new Response(
      `ERRO! Não foi possível encontrar os produtos correspodentes: ${error}`,
      { status: 500 }
    )
  }
}
