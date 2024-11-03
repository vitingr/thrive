import axios, { AxiosInstance } from 'axios'

import { Groups } from './groups'
import { Posts } from './posts'
import { Users } from './users'
import { CONTENT_API_KEY } from '@/constants/environments/contentApk'

export class Content {
  private instance: AxiosInstance

  public posts: Posts
  public users: Users
  public groups: Groups

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.posts = new Posts(this.instance)
    this.users = new Users(this.instance)
    this.groups = new Groups(this.instance)
  }
}
