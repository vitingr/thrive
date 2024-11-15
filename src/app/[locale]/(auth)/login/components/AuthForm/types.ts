import { Messages } from '@/constants/internationalization/messages'

export interface AuthFormProps {
  copy: Messages['auth']['form']
  locale: string
}

export interface isLoadingSubmitProps {
  email: boolean
  google: boolean
}

export interface LoginSchemaData {
  locale: string
}

export interface LoginInputs {
  email?: string
  password?: string
}
