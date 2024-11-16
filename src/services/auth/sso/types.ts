import { User } from '@/types/models/user'

export interface CreateUserData
  extends Pick<
    User,
    | 'email'
    | 'firstname'
    | 'lastname'
    | 'profile_picture'
    | 'background_picture'
    | 'username'
    | 'locale'
  > {
  google_id?: string
  profilePicture?: string
}

export interface LoginUserData {
  email?: string
}
