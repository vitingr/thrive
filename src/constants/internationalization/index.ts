/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
  Pathnames,
  createLocalizedPathnamesNavigation
} from 'next-intl/navigation'

import locales from './locales'
import translations from './translations'

const pathsObj: Pathnames<typeof locales> = {}
const pathsOnlyForMiddleware: Pathnames<typeof locales> = {}

export const localePrefix = 'as-needed'

export const pathsArr = Object.entries(pathsObj).map(([key, values]) => {
  return {
    key,
    // @ts-expect-error
    ...values
  } as { key: string; pt: string; es: string; en: string }
})

export { pathsObj }
export { pathsOnlyForMiddleware }
export { locales }
export { translations }
export const {
  Link: TranslatedLink,
  redirect: translatedRedirect,
  usePathname: useTranslatedPathname,
  useRouter: useTranslatedRouter,
  getPathname: getTranslatedPathname
} = createLocalizedPathnamesNavigation({
  locales,
  localePrefix,
  pathnames: pathsOnlyForMiddleware
})
