import { Messages } from '@/constants/internationalization/messages'

import { RawTranslationProps } from './types'
type MessageKeys = keyof Messages

export const rawTranslation = <
  T extends MessageKeys,
  K extends keyof Messages[T]
>({
  t,
  key
}: RawTranslationProps<T, K>): Messages[T][K] => {
  return t.raw(key) as Messages[T][K]
}
