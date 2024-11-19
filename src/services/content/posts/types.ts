import { Post } from '@/types/models/post'

export interface createPostData {
  locale: string
  postContent: Omit<Post, 'locale' | 'id' | 'number_likes'>
  userId: number
}

export interface GetPostsByLanguageData {
  locale: string
  userId: number | null
}
