import { swrHookFetcherParams } from '@/types/swr/swrHookFetcherParams'
import { UseLikeStatusData } from './types'
import { instanceContent } from '@/instances/instanceContent'

export const fetcher = async ([
  _,
  payload
]: swrHookFetcherParams<UseLikeStatusData>) => {
  const { data } = await instanceContent.posts.getPostById({
    post: payload.post
  })

  return {
    number_likes: data.number_likes,
    user_liked: data.user_liked || false
  }
}
