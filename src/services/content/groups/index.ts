import { AxiosInstance } from 'axios'

import { User } from '@/types/models/user'
import { ServiceRequestResponse } from '@/types/services/serviceRequestResponse'

import {
  CreateGroupData,
  FollowGroupData,
  GetAllGroupsData,
  GetGroupsByLanguageData,
  UnfollowGroupData
} from './types'

export class Groups {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  getAllGroups = async ({
    user
  }: GetAllGroupsData): Promise<ServiceRequestResponse<User[]>> => {
    try {
      const { data, status } = await this.instance.post(
        `/groups/get-all-groups`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (getAllGroupsErr) {
      console.error({
        getAllGroupsMessage: getAllGroupsErr.message
      })

      return {
        error: getAllGroupsErr.message
      }
    }
  }

  getGroupsByLanguage = async ({ user, locale }: GetGroupsByLanguageData) => {
    try {
      const { data, status } = await this.instance.post(
        `/groups/get-groups-by-language/${user.id}/${locale}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (getGroupsByLanguageErr) {
      console.error({
        getGroupsByLanguageMessage: getGroupsByLanguageErr.message
      })

      return {
        error: getGroupsByLanguageErr.message
      }
    }
  }

  followGroup = async ({
    payload
  }: FollowGroupData): Promise<ServiceRequestResponse<void>> => {
    try {
      await this.instance.post(`/groups/follow-group`, payload)
    } catch (followGroupErr) {
      console.error({
        unfollowGroupMessage: followGroupErr.message
      })

      return {
        error: followGroupErr.message
      }
    }
  }

  unfollowGroup = async ({
    payload
  }: UnfollowGroupData): Promise<ServiceRequestResponse<void>> => {
    try {
      await this.instance.post(`/groups/unfollow-group`, payload)
    } catch (unfollowGroupErr) {
      console.error({
        unfollowGroupMessage: unfollowGroupErr.message
      })

      return {
        error: unfollowGroupErr.message
      }
    }
  }

  createGroup = async ({
    payload
  }: CreateGroupData): Promise<ServiceRequestResponse<void>> => {
    try {
      await this.instance.post(`/groups/create-group`, payload)
    } catch (createGroupErr) {
      console.error({
        createGroupMessage: createGroupErr.message
      })

      return {
        error: createGroupErr.message
      }
    }
  }

  deleteGroup = async ({
    payload
  }: CreateGroupData): Promise<ServiceRequestResponse<void>> => {
    try {
      await this.instance.post(`/groups/delete-group`, payload)
    } catch (deleteGroupErr) {
      console.error({
        deleteGroupMessage: deleteGroupErr.message
      })

      return {
        error: deleteGroupErr.message
      }
    }
  }
}
