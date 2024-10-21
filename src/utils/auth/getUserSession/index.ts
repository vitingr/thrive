export const getUserSession = async () => {
  const request = await fetch('http://localhost:3000/api/user', {
    method: 'GET'
  })
  const response = await request.json()
  return { session: response }
}
