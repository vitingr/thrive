import { currentUser } from "@clerk/nextjs/server"

export const getUserSession = async () => {
  const user = await currentUser()

  if (!user) {
    console.error("User is null or undefined in Clerk")
    return { session: null }
  }

  const request = await fetch('http://localhost:3000/api/users/get-user', {
    method: 'POST',
    next: {
      revalidate: 5 * 60
    },
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ session: user })
  })

  if (request.ok) {
    const response = await request.json()
    return { session: response }
  }

  return { session: null }
}
