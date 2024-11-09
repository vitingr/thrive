import { Locale } from '@/types/@common/global'
import { Post } from '@/types/models/post'
import { User } from '@/types/models/user'

export interface createPostData {
  creator: User
  postContent: Omit<Post, 'locale' | 'id' | 'number_likes'>
  locale: Locale
}
