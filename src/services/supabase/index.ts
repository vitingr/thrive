import axios, { AxiosInstance } from 'axios'

import { SUPABASE_API_HEADERS } from '@/constants/headers'
import { supabaseBaseUrl } from '@/environments/supabaseBaseUrl'

import { Groups } from './groups'
import { Posts } from './posts'
import { Users } from './users'

export class Supabase {
  private instance: AxiosInstance

  public posts: Posts
  public users: Users
  public groups: Groups

  constructor() {
    this.instance = axios.create({
      baseURL: supabaseBaseUrl,
      headers: SUPABASE_API_HEADERS
    })

    this.posts = new Posts(this.instance)
    this.users = new Users(this.instance)
    this.groups = new Groups(this.instance)
  }
}
