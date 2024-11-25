import { AxiosInstance } from 'axios'

import { Post } from '@/types/models/post'
import { ServiceRequestResponse } from '@/types/services/serviceRequestResponse'

import {
  DeslikePostData,
  GetMyPostsData,
  GetPostByIdData,
  GetPostsByLanguageData,
  HasUserLikedPostData,
  LikePostData,
  createPostData
} from './types'

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

  getMyPosts = async ({ userId }: GetMyPostsData) => {
    try {
      if (!userId) {
        return { data: [] }
      }

      const { data, status } = await this.instance.get(
        `/posts/get-my-posts/${userId}`
      )

      if (status !== 200) {
        return []
      }

      return data
    } catch (getMyPostsErr) {
      console.error({
        getMyPostsErrMessage: getMyPostsErr.message
      })

      return {
        error: getMyPostsErr.message
      }
    }
  }

  getPostsByLanguage = async ({ userId, locale }: GetPostsByLanguageData) => {
    try {
      if (!userId) {
        return { data: [] }
      }

      const response = await fetch(
        `http://localhost:8080/posts/get-posts-by-language/${userId}/${locale}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          next: {
            revalidate: 5 * 60
          }
        }
      )

      if (!response.ok) {
        throw new Error(`Error fetching posts: ${response.statusText}`)
      }

      const data = await response.json()
      return { data }
    } catch (getPostsByLanguageError) {
      console.error({
        getPostsByLanguageErrorMessage: getPostsByLanguageError.message
      })

      return {
        error: getPostsByLanguageError.message
      }
    }
  }

  getPostById = async ({
    post
  }: GetPostByIdData): Promise<ServiceRequestResponse<Post>> => {
    try {
      const { data, status } = await this.instance.get(
        `/posts/get-post-by-id/${post.id}`
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

  likePost = async ({
    userId,
    postId
  }: LikePostData): Promise<ServiceRequestResponse<void>> => {
    try {
      console.log(`enviando ${postId}, ${userId}`)

      const { data, status } = await this.instance.post(`/posts/like-post`, {
        userId,
        postId
      })

      if (status !== 200) {
        throw new Error(data.message)
      }
    } catch (likePostError) {
      console.error({
        likePostErrorMessage: likePostError.message
      })

      return {
        error: likePostError.message
      }
    }
  }

  deslikePost = async ({
    userId,
    postId
  }: DeslikePostData): Promise<ServiceRequestResponse<void>> => {
    try {
      const { data, status } = await this.instance.post(`/posts/deslike-post`, {
        userId,
        postId
      })

      if (status !== 200) {
        throw new Error(data.message)
      }
    } catch (deslikePostError) {
      console.error({
        deslikePostErrorMessage: deslikePostError.message
      })

      return {
        error: deslikePostError.message
      }
    }
  }

  hasUserLikedPost = async ({
    userId,
    postId
  }: HasUserLikedPostData): Promise<ServiceRequestResponse<boolean>> => {
    try {
      const { data, status } = await this.instance.get(
        `/posts/like-status/${postId}/${userId}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }
    } catch (hasUserLikedPostErr) {
      console.error({
        hasUserLikedPostErrMessage: hasUserLikedPostErr.message
      })

      return {
        error: hasUserLikedPostErr.message
      }
    }
  }
}
