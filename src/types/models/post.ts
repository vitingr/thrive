import { Locale } from '../@common/global'
import { User } from './user'

export interface Post {
  content: string
  creator: User
  creator_id: number
  id: number
  image_url: string
  locale: Locale
  location: string
  number_likes: number
  type: PostType
  video_url: string
  user_liked?: boolean
}

export type PostType = 'video' | 'image'
