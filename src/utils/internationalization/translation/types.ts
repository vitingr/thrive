import { Messages } from "@/constants/internationalization/messages"

export interface TranslationReturn<Dictionary extends keyof Messages> {
  plain: (key: keyof Messages[Dictionary]) => string
  raw: <K extends keyof Messages[Dictionary]>(
    key: K
  ) => Messages[Dictionary][K]
}
