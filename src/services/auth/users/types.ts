import { User } from '@/types/models/user'

export interface CreateUserData {
  payload: Omit<User, 'id'>
}

export interface LoginUserData {
  email: string
}

export interface LoginUserReturn {
  message?: string
  user: User
}

export interface GetUserByEmailData {
  email: string
}
