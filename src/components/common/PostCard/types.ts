import { Post } from '@/types/models/post'
import { User } from '@/types/models/user'

export interface PostCardProps {
  post: Post
  user: User
  disableShadow?: boolean
}
