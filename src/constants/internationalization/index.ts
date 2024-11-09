import {
  Pathnames,
  createLocalizedPathnamesNavigation
} from 'next-intl/navigation'

import locales from './locales'
// import { paths as pathsWithExtraProps } from './paths'
import { Locale, Paths } from './types'
import translations from './translations'

const pathsObj: Pathnames<typeof locales> = {}
const pathsOnlyForMiddleware: Pathnames<typeof locales> = {}

// const mergePaths = (sourcePaths: Paths) => {
//   for (const [path, translatedPaths] of Object.entries(sourcePaths)) {
//     // eslint-disable-next-line no-unused-vars
//     const { sitemap: _, ...cleanPaths } = translatedPaths

//     const typedCleanPaths: Record<Locale, string> = {
//       pt: cleanPaths?.pt ?? path,
//       es: cleanPaths?.es ?? path,
//       en: cleanPaths?.en ?? path
//     }

//     pathsObj[path] = typedCleanPaths
//     pathsOnlyForMiddleware[path] = {
//       pt: cleanPaths?.pt ?? path,
//       es: cleanPaths?.es ?? path,
//       en: cleanPaths?.en ?? path
//     }
//   }
// }

// mergePaths(pathsWithExtraProps)

export const localePrefix = 'as-needed'

export const pathsArr = Object.entries(pathsObj).map(([key, values]) => {
  return {
    key,
    // @ts-expect-error
    ...values
  } as { key: string; pt: string; es: string; en: string }
})

// export { pathsWithExtraProps }
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
