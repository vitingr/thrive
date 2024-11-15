export const DEFAULT_MESSAGES_ERRORS = {
  pt: {
    requiredField: 'Campo obrigatório!',
    requiredSelectField: 'Campo obrigatório, selecione uma opção!',
    requiredMultiSelectField:
      'Campo obrigatório, selecione uma ou mais opções!',
    requiredNumberTooLarge: 'O valor é muito grande. Tente um valor menor',
    requiredNumberPositive: 'O valor deve ser maior que 0',
    requiredFieldTooSmall: 'O valor é muito curto. Tente um valor maior',
    invalidEmailAddress: 'Digite um email válido.'
  },
  en: {
    requiredField: 'This field is required!',
    requiredSelectField: 'This field is required, please select an option!',
    requiredMultiSelectField:
      'This field is required, please select one or more options!',
    requiredNumberTooLarge:
      'The value is too large. Please try a smaller value.',
    requiredNumberPositive: 'The value must be greater than 0.',
    requiredFieldTooSmall: 'The value is too short. Please try a larger value.',
    invalidEmailAddress: 'Type a valid email address.'
  }
} as const
