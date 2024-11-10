import { AxiosInstance } from 'axios'

import { createPostData } from './types'

export class Posts {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  createPost = async ({
    creator,
    postContent,
    locale
  }: createPostData): Promise<void> => {
    try {
      return await this.instance.post('/posts', {
        content: postContent.content,
        location: postContent.location,
        image_url: postContent.image_url,
        video_url: postContent.video_url,
        type: 'image',
        creatorId: creator.id,
        number_likes: 0,
        creator,
        locale
      })
    } catch (err) {
      console.error({ createPostErrorMessage: err.message })
    }
  }
}
