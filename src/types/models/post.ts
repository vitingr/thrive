import { Locale } from "../@common/global"
import { User } from "./user"

export interface Post {
  id: number
  content: String
  location: string
  image_url: string
  video_url: string
  type: PostType
  creator_id: number
  number_likes: number
  creator: User
  locale: Locale
}

export type PostType = 'video' | 'image'
