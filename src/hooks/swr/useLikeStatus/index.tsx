import useSWR from 'swr'

import { fetcher } from './fetcher'
import { UseLikeStatusProps } from './types'

export const useLikeStatus = ({ payload }: UseLikeStatusProps) => {
  const { data = [], ...rest } = useSWR(
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
