import { PropsWithChildren } from "react"

export interface SettingInputProps extends PropsWithChildren {
  copy: {
    title: string
    placeholder: string
    description: string
  }
}
