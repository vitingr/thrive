/* eslint-disable @typescript-eslint/no-explicit-any */

import { Dictionaries } from '@/types/internationalization'

export interface TranslationReturn<Dictionary extends keyof Dictionaries> {
  plain: (key: keyof Dictionaries[Dictionary]) => string
  raw: <K extends keyof Dictionaries[Dictionary]>(
    key: K
  ) => Dictionaries[Dictionary][K]
}
