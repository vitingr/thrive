import z from 'zod'

import { DEFAULT_MESSAGES_ERRORS } from '@/constants/errors/defaultMessageErrors'

import { LoginSchemaData } from './types'

export const loginSchema = ({ locale }: LoginSchemaData) =>
  z.object({
    email: z
      .string()
      .min(1, {
        message: DEFAULT_MESSAGES_ERRORS[locale].requiredFieldTooSmall
      })
      .email(DEFAULT_MESSAGES_ERRORS[locale].invalidEmailAddress),
    password: z.string()
  })
