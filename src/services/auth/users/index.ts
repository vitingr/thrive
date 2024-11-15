import { AxiosInstance } from 'axios'

import { ServiceRequestResponse } from '@/types/services/serviceRequestResponse'

import {
  CreateUserData,
  GetUserByEmailData,
  LoginUserData,
  LoginUserReturn
} from './types'
import { User } from '@/types/models/user'

export class Users {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  createUser = async ({
    payload
  }: CreateUserData): Promise<ServiceRequestResponse<null>> => {
    try {
      const { data, status } = await this.instance.post(`/users`, payload)

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (err) {
      console.error({
        createUserErrorMessage: err.message
      })

      return {
        error: err.message
      }
    }
  }

  loginUser = async (
    payload: LoginUserData
  ): Promise<ServiceRequestResponse<LoginUserReturn>> => {
    try {
      const { data, status } = await this.instance.get(
        `/users/get-user-by-email/${payload.email}`
      )

      if (status !== 200) {
        throw new Error(data?.message ?? 'Error logging in user')
      }

      return data
    } catch (error) {
      console.error({
        AuthLoginUserErrorMessage: error.message
      })

      return {
        error: error.message
      }
    }
  }

  getUserByEmail = async ({
    email
  }: GetUserByEmailData): Promise<ServiceRequestResponse<User>> => {
    try {
      const { data } = await this.instance.get(
        `/users/get-user-by-email/${email}`
      )

      return data
    } catch (getUserByEmailError) {
      console.error({
        AuthGetUserByEmailErrorMessage: getUserByEmailError.message
      })

      return {
        error: getUserByEmailError.message
      }
    }
  }
}
