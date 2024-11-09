export const getDictionaryPath = (
  translations: Record<string, string>,
  path: string
) => {
  return Object.entries(translations).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: path + value
    }),
    {}
  )
}
