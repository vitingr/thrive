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

      console.log(`data: ${userData}`)

      return userData
    } catch (getUserByEmailError) {
      console.error(getUserByEmailError)
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
        body: JSON.stringify({
          uid: uid,
          username: username,
          firstname: firstname,
          lastname: lastname,
          email: email,
          profile_picture: profile_picture,
          background_picture: background_picture,
          followers: followers,
          following: following
        })
      })
    } catch (createUserError) {
      console.error(createUserError)
    }
  }
}
