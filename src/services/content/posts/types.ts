import { Post } from '@/types/models/post'
import { User } from '@/types/models/user'

export interface createPostData {
  locale: string
  postContent: Omit<Post, 'locale' | 'id' | 'number_likes'>
  userId: number
}

export interface GetPostsByLanguageData {
  locale: string
  userId: number | null
}

export interface LikePostData {
  payload: {
    user: User
    post: Post
  }
}

export interface DeslikePostData {
  payload: {
    user: User
    post: Post
  }
}
