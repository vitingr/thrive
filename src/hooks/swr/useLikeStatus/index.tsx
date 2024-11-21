import useSWR from 'swr'

import { fetcher } from './fetcher'
import { UseLikeStatusProps } from './types'

export const useLikeStatus = ({ payload }: UseLikeStatusProps) => {
  const { data = { number_likes: 0, user_liked: false }, ...rest } = useSWR(
    [
      'useLikeStatus',
      {
        ...payload
      }
    ],
    fetcher
  )

  return {
    likeStatus: data,
    ...rest
  }
}
