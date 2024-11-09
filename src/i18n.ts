import { getRequestConfig } from 'next-intl/server'

import { translations } from './constants/internationalization'

export default getRequestConfig(async ({ locale }) => {
  const getDictionary = async (path: string) => {
    try {
      const dictionary = await import(`./locales/${locale}/${path}.json`)

      return dictionary.default
    } catch (err) {
      console.error({
        getDictionaryErrorMessage: err.message
      })
    }
  }

  const messages = await Object.keys(translations).reduce(
    async (accPromise, key) => {
      const acc = await accPromise
      const dictionary = await getDictionary(translations[key])

      return {
        ...acc,
        [key]: dictionary
      }
    },
    Promise.resolve({})
  )

  return {
    messages
  }
})
