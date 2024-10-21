import { AxiosInstance } from 'axios'

export class Groups {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }
}
