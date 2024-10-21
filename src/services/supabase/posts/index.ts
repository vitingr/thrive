import { AxiosInstance } from 'axios'

export class Posts {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }
}
