import { Messages } from '@/constants/internationalization/messages'

export interface AuthFormProps {
  copy: Messages['auth']['form']
  locale: string
}

export interface isLoadingSubmitProps {
  email: boolean
  google: boolean
}

export interface SignUpInputs {
  email?: string
  password?: string
  name?: string
}

export interface SignUpSchemaData {
  locale: string
}
