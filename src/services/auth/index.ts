import axios, { AxiosInstance } from 'axios'

import { Sso } from './sso'
import { Users } from './users'

export class Auth {
  private instance: AxiosInstance

  public sso: Sso
  public users: Users

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.sso = new Sso(this.instance)
    this.users = new Users(this.instance)
  }
}
