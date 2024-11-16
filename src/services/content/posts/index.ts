import { AxiosInstance } from 'axios'

import { createPostData, GetPostsByLanguageData } from './types'

import { ServiceRequestResponse } from '@/types/services/serviceRequestResponse'
import { Post } from '@/types/models/post'

export class Posts {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  createPost = async ({
    userId,
    postContent,
    locale
  }: createPostData): Promise<ServiceRequestResponse<Post>> => {
    try {
      const { data, status } = await this.instance.post('/posts', {
        content: postContent.content,
        location: postContent.location,
        image_url: postContent.image_url,
        video_url: postContent.video_url,
        type: 'image',
        creator_id: userId,
        locale
      })

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (createPostError) {
      console.error({
        createPostErrorMessage: createPostError.message
      })

      return {
        error: createPostError.message
      }
    }
  }

  getPostsByLanguage = async ({
    userId,
    locale
  }: GetPostsByLanguageData): Promise<ServiceRequestResponse<Post[]>> => {
    try {
      const { data, status } = await this.instance.get(
        `/get-posts-by-language/${userId}/${locale}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (getPostsByLanguageError) {
      console.error({
        getPostsByLanguageErrorMessage: getPostsByLanguageError.message
      })

      return {
        error: getPostsByLanguageError.message
      }
    }
  }
}
