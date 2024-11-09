import { PostType } from '@/types/models/post'
import { User } from '@/types/models/user'
import { SetStateAction } from 'react'

export interface SecondStepProps {
  setCurrentStep: React.Dispatch<SetStateAction<number>>
  imageUrl: string
  userData: User
}

export interface PostContent {
  content: string
  location: string
  creator: User
  creator_id: number
  image_url: string
  video_url: string
  type: PostType
}
