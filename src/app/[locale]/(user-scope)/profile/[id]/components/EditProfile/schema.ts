import z from 'zod'

import { DEFAULT_MESSAGES_ERRORS } from '@/constants/errors/defaultMessageErrors'

import { UpdateProfileSchemaData } from './types'

export const editProfileSchema = ({ locale }: UpdateProfileSchemaData) =>
  z.object({
    name: z.string().min(1, {
      message: DEFAULT_MESSAGES_ERRORS[locale].requiredFieldTooSmall
    }),
    dateOfBirth: z
      .string()
      .min(1, {
        message: DEFAULT_MESSAGES_ERRORS[locale].requiredFieldTooSmall
      })
      .email(DEFAULT_MESSAGES_ERRORS[locale].invalidEmailAddress),
    password: z.string(),
    confirmPassword: z.string()
  })
