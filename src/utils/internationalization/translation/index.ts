/* eslint-disable @typescript-eslint/no-explicit-any */

import { getTranslations } from 'next-intl/server'


import { TranslationReturn } from './types'
import { Messages } from '@/constants/internationalization/messages'

export const translation = async <Dictionary extends keyof Messages>(
  dictionary: Dictionary
): Promise<TranslationReturn<Dictionary>> => {
  const t = await getTranslations(dictionary)

  const raw = t.raw as <K extends keyof Messages[Dictionary]>(
    key: K
  ) => Messages[Dictionary][K]

  return {
    plain: t as (key: keyof Messages[Dictionary]) => string,
    raw
  }
}