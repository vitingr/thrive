import { instanceContent } from '@/instances/instanceContent'
import { currentUser } from '@clerk/nextjs/server'

export const GET = async () => {
  try {
    const session = await currentUser()

    const userExists = instanceContent.users.getUserByEmail({
      email: session?.emailAddresses[0].emailAddress ?? ''
    })

    if (!userExists) {
      instanceContent.users.createUser()
    }

    return new Response(JSON.stringify(session), { status: 200 })
  } catch (error) {
    return new Response(
      `ERRO! Não foi possível encontrar os produtos correspodentes: ${error}`,
      { status: 500 }
    )
  }
}
