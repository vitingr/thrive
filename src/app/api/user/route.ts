import { currentUser } from '@clerk/nextjs/server'

export const GET = async () => {
  try {
    const userInfo = await currentUser()

    return new Response(JSON.stringify(userInfo), { status: 200 })
  } catch (error) {
    return new Response(
      `ERRO! Não foi possível encontrar os produtos correspodentes: ${error}`,
      { status: 500 }
    )
  }
}
