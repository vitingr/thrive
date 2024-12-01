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
  name?: string
  password?: string
  confirmPassword?: string
}

export interface SignUpSchemaData {
  locale: string
}
