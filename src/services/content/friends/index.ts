import { AxiosInstance } from 'axios'

import { User } from '@/types/models/user'
import { ServiceRequestResponse } from '@/types/services/serviceRequestResponse'

import {
  FollowUserData,
  GetSuggestFriendsData,
  GetUserFriendsData,
  UnfollowUserData
} from './types'

export class Friends {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  getUserFriends = async ({
    user
  }: GetUserFriendsData): Promise<ServiceRequestResponse<User[]>> => {
    try {
      const { data, status } = await this.instance.post(
        `/get-user-friends/${user.id}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (getUserFriendsErr) {
      console.error({
        getUserFriendsMessage: getUserFriendsErr.message
      })
 
      return {
        error: getUserFriendsErr.message
      }
    }
  }

  getSuggestFriends = async ({
    userId
  }: GetSuggestFriendsData): Promise<ServiceRequestResponse<User[]>> => {
    try {
      const { data, status } = await this.instance.get(`/users/get-suggest-friends/${userId}`)

      console.log('pegando users amigos')

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (getSuggestFriendsErr) {
      console.error({
        getSuggestFriendsMessage: getSuggestFriendsErr.message
      })

      return {
        error: getSuggestFriendsErr.message
      }
    }
  }

  followUser = async ({
    payload
  }: FollowUserData): Promise<ServiceRequestResponse<void>> => {
    try {
      await this.instance.post(`/frieds/follow-user`, payload)
    } catch (followUserErr) {
      console.error({
        followUserMessage: followUserErr.message
      })

      return {
        error: followUserErr.message
      }
    }
  }

  unfollowUser = async ({
    payload
  }: UnfollowUserData): Promise<ServiceRequestResponse<void>> => {
    try {
      await this.instance.post(`/frieds/unfollow-user`, payload)
    } catch (unfollowUserErr) {
      console.error({
        unfollowUserMessage: unfollowUserErr.message
      })

      return {
        error: unfollowUserErr.message
      }
    }
  }
}
