import { User } from '@/types/models/user'
import { AxiosInstance } from 'axios'
import { GetUserByEmailProps } from './types'

export class Users {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  getUserByEmail = async ({
    email
  }: GetUserByEmailProps): Promise<User | undefined> => {
    try {
      return this.instance.get(`/users/get-user-by-email/${email}`)
    } catch (getUserByEmailError) {
      console.error(getUserByEmailError)
    }
  }

  createUser = async (): Promise<void> => {
    console.log('usuario criado')
  }
}
