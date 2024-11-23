import auth from '@/locales/pt/auth.json'
import navbar from '@/locales/pt/components/navbar.json'
import sidebar from '@/locales/pt/components/sidebar.json'
import userSidebar from '@/locales/pt/components/user-sidebar.json'

export type components = {
  auth: typeof auth
  navbar: typeof navbar
  sidebar: typeof sidebar
  'user-sidebar': typeof userSidebar
}
