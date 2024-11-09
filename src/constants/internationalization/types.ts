export type Locale = 'pt' | 'es' | 'en'

export interface Paths {
  [path: string]: {
    [locale in Locale]?: string
  } & { sitemap: boolean }
}
