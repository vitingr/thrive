import { genSalt, hash } from 'bcryptjs'

import { GenerateHashData } from './types'

export const generateHash = async ({ password }: GenerateHashData) => {
  try {
    console.log('c1')
    const salt = await genSalt()
    console.log('c2')
    const hashedPassword = await hash(password, salt)
    console.log('c3')

    console.log(hashedPassword)
    return hashedPassword
  } catch (generateHashErr) {
    console.error(generateHashErr)
  }
}
