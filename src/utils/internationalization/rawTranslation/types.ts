import { Messages } from '@/constants/internationalization/messages'

type MessageKeys = keyof Messages
export interface RawTranslationProps<
  T extends MessageKeys,
  K extends keyof Messages[T]
> {
  key: K
  namespace: T
  t: any
}
