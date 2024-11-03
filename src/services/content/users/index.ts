import { User } from '@/types/models/user'
import { AxiosInstance } from 'axios'
import { CreateUserData, GetUserByEmailData } from './types'

export class Users {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  getUserByEmail = async ({
    email
  }: GetUserByEmailData): Promise<User | undefined> => {
    try {
      const { data: userData } = await this.instance.get(
        `/users/get-user-by-email/${email}`
      )

      return userData
    } catch (getUserByEmailError) {
      console.error('Não foi possível obter o email do usuário')
    }
  }

  createUser = async ({
    uid,
    username,
    firstname,
    lastname,
    email,
    profile_picture,
    background_picture,
    followers,
    following
  }: CreateUserData): Promise<void> => {
    try {
      return this.instance.post(`/users`, {
        uid,
        username,
        firstname,
        lastname,
        email,
        profile_picture,
        background_picture,
        followers,
        following
      })
    } catch (createUserError) {
      console.error(createUserError)
    }
  }
}
