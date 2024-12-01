import axios, { AxiosInstance } from 'axios'

import { Sso } from './sso'
import { Google } from './google'
import { Users } from './users'

export class Auth {
  private instance: AxiosInstance

  public sso: Sso
  public google: Google
  public user: Users

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.sso = new Sso(this.instance)
    this.google = new Google(this.instance)
    this.user = new Users(this.instance)
  }
}
