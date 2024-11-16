import { SetStateAction } from 'react'

import { PostType } from '@/types/models/post'
import { User } from '@/types/models/user'
import { Messages } from '@/constants/internationalization/messages'

export interface SecondStepProps {
  imageUrl: string
  locale: string
  setCurrentStep: React.Dispatch<SetStateAction<number>>
  userData: User
  copy: Messages['navbar']['content']
}

export interface PostContent {
  content: string
  creator: User
  creator_id: number
  image_url: string
  location: string
  type: PostType
  video_url: string
}
