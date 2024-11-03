import { supabaseAPK } from '@/constants/environments/supabaseApk'

export const SUPABASE_API_HEADERS = {
  'Content-Type': 'application/json',
  apikey: supabaseAPK || '',
  Authorization: `Bearer ${supabaseAPK || ''}`
} as const
