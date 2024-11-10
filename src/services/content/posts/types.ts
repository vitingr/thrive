import { Locale } from '@/types/@common/global'
import { Post } from '@/types/models/post'
import { User } from '@/types/models/user'

export interface createPostData {
  creator: User
  locale: Locale
  postContent: Omit<Post, 'locale' | 'id' | 'number_likes'>
}
