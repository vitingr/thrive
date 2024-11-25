import { PropsWithChildren, SetStateAction } from 'react'

import { Post } from '@/types/models/post'
import { User } from '@/types/models/user'

export interface UserProfileContextProps {
  currentSelectedTab: number
  myPosts: Post[]
  setCurrentSelectedTab: React.Dispatch<SetStateAction<number>>
  user: User
}

export interface UserProfileProviderProps extends PropsWithChildren {
  myCreatedPosts: Post[]
  user: User
}
