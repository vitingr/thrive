import { Post } from '@/types/models/post'
import { User } from '@/types/models/user'

export interface PostCardProps {
  disableShadow?: boolean
  post: Post
  user: User
}
