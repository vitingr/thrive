import { AxiosInstance } from 'axios'
import { CreateUserData, LoginLinkedinUserData } from './types'
import { ServiceRequestResponse } from '@/types/services/serviceRequestResponse'
import { User } from '@/types/models/user'

export class Sso {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  createUser = async (
    payload: CreateUserData
  ): Promise<ServiceRequestResponse<User>> => {
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
    payload: LoginLinkedinUserData
  ): Promise<ServiceRequestResponse<User>> => {
    try {
      const { data, status } = await this.instance.get(
        `/users/get-user-by-google-id/${payload.googleId}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (err) {
      console.error({
        loginUserErrorMessage: err.message
      })
      return {
        error: err.message
      }
    }
  }
}