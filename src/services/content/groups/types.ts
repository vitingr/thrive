import { Group } from '@/types/models/group'
import { User } from '@/types/models/user'

export interface GetAllGroupsData {
  user: User
}

export interface GetGroupsByLanguageData {
  locale: string
  user: User
}

export interface FollowGroupData {
  payload: {
    group: Group
    user: User
  }
}

export interface UnfollowGroupData {
  payload: {
    group: Group
    user: User
  }
}

export interface CreateGroupData {
  payload: {
    group: Group
    user: User
  }
}

export interface DeleteGroupData {
  group: Group
}
