import { SetStateAction } from 'react'

import { Messages } from '@/constants/internationalization/messages'
import { PostType } from '@/types/models/post'
import { User } from '@/types/models/user'

export interface SecondStepProps {
  copy: Messages['navbar']['content']
  imageUrl: string
  locale: string
  setCurrentStep: React.Dispatch<SetStateAction<number>>
  setImageUrl: React.Dispatch<SetStateAction<string>>
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
  userData: User
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
