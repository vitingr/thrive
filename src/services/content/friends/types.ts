import { User } from '@/types/models/user'

export interface GetUserFriendsData {
  user: User
}

export interface GetSuggestFriendsData {
  payload: Pick<User, 'id'>
}

export interface FollowUserData {
  payload: {
    user: User
    friend: string
  }
}

export interface UnfollowUserData {
  payload: {
    user: User
    friend: string
  }
}
