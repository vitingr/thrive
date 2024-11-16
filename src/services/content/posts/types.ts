import { Post } from '@/types/models/post'
import { User } from '@/types/models/user'

export interface createPostData {
  userId: number
  locale: string
  postContent: Omit<Post, 'locale' | 'id' | 'number_likes'>
}

export interface GetPostsByLanguageData {
  userId: number | null
  locale: string
}
