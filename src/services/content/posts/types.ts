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

export interface LikePostData {
  postId: number
  userId: number
}

export interface DeslikePostData {
  postId: number
  userId: number
}

export interface GetPostByIdData {
  post: Post
}

export interface HasUserLikedPostData {
  postId: number
  userId: number
}

export interface GetMyPostsData {
  userId: number
}
