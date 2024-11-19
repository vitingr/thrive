import { Messages } from '@/constants/internationalization/messages'
import { User } from '@/types/models/user'

export interface CreatePostProps {
  copy: Messages['navbar']['content']
  locale: string
  userData: User
}
