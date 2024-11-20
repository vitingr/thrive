import { swrHookFetcherParams } from '@/types/swr/swrHookFetcherParams'
import { UseLikeStatusData } from './types'
import { instanceContent } from '@/instances/instanceContent'

export const fetcher = async ([
  _,
  payload
]: swrHookFetcherParams<UseLikeStatusData>) => {
  const { data } = await instanceContent.posts.likePost({ payload })

  return data
}
