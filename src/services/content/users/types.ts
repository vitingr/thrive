export interface GetUserByEmailData {
  email: string
}

export interface CreateUserData {
  uid: string
  username: string
  firstname: string
  lastname: string
  email: string
  profile_picture: string
  background_picture: string
  followers: number
  following: number
}
