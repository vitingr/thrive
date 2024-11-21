import { Post } from '@/types/models/post'

export interface UseLikeStatusData {
  post: Post
}

export interface UseLikeStatusProps {
  payload: {
    post: Post
  }
}
