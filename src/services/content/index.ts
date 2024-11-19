import axios, { AxiosInstance } from 'axios'

import { Groups } from './groups'
import { Posts } from './posts'
import { Friends } from './friends'

export class Content {
  private instance: AxiosInstance

  public posts: Posts
  public groups: Groups
  public friends: Friends

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.posts = new Posts(this.instance)
    this.groups = new Groups(this.instance)
    this.friends = new Friends(this.instance)
  }
}
