import { AxiosInstance } from 'axios'

import { ServiceRequestResponse } from '@/types/services/serviceRequestResponse'

import { CreateUserData, LoginUserData, LoginUserReturn } from './types'

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
        AuthSendEmailErrorMessage: error.message
      })

      return {
        error: error.message
      }
    }
  }
}
