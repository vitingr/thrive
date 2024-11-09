export type Locale = 'pt' | 'en'

export interface Paths {
  [path: string]: {
    [locale in Locale]?: string
  } & { sitemap: boolean }
}
