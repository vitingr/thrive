import { Paths } from '../types'

export const PATHS: Paths[] = [
  {
    '/': {
      en: '/',
      pt: '/',
      sitemap: true
    },
    '/cadastro': {
      en: '/register',
      pt: '/cadastro',
      sitemap: true
    },
    '/login': {
      en: '/login',
      pt: '/login',
      sitemap: true
    }
  }
] as const
