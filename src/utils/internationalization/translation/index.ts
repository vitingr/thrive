/* eslint-disable @typescript-eslint/no-explicit-any */

import { getTranslations } from 'next-intl/server'

import { Dictionaries } from '@/types/internationalization'

import { TranslationReturn } from './types'

export const translation = async <Dictionary extends keyof Dictionaries>(
  dictionary: Dictionary
): Promise<TranslationReturn<Dictionary>> => {
  const t = await getTranslations(dictionary)

  const raw = t.raw as <K extends keyof Dictionaries[Dictionary]>(
    key: K
  ) => Dictionaries[Dictionary][K]

  return {
    plain: t as (key: keyof Dictionaries[Dictionary]) => string,
    raw
  }
}
