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
  userId: number
  postId: number
}

export interface DeslikePostData {
  userId: number
  postId: number
}

export interface GetPostByIdData {
  post: Post
}

export interface HasUserLikedPostData {
  userId: number
  postId: number
}

export interface GetMyPostsData {
  userId: number
}
