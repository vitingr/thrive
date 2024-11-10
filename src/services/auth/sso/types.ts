import { User } from '@/types/models/user'

export interface CreateUserData extends Pick<User, 'email'> {
  fullName: string
  googleId?: string
  profilePicture?: string
}

export interface LoginLinkedinUserData {
  googleId?: string
}
